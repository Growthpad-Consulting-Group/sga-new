'use client'

import { useMemo, useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'

// --- Auxiliary Components ---

const ImageModal = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const currentImage = images[currentIndex]
  
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'Escape') onClose()
  }, [onNext, onPrev, onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!currentImage) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
    >
      <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />
      
      <motion.div
        key={currentIndex}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full h-full z-10 pointer-events-none"
      >
        <Image
          src={urlFor(currentImage).url()}
          alt="Gallery zoom"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Navigation Controls */}
      {images.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all z-20 group"
          >
            <Icon icon="mdi:chevron-left" className="w-10 h-10 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all z-20 group"
          >
            <Icon icon="mdi:chevron-right" className="w-10 h-10 group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* subtle counter moved to bottom edge or hidden - User asked to remove or hide */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] font-black z-20 tracking-[0.4em] uppercase">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}

      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors z-20"
      >
        <Icon icon="mdi:close" className="w-8 h-8" />
      </button>
    </motion.div>
  )
}

const SocialShare = ({ url, title }) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4"
        >
          <div className="flex flex-col gap-3 bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-gray-100">
            {Object.entries(shareLinks).map(([platform, link]) => (
              <a
                key={platform}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 shadow-sm"
                style={{
                  backgroundColor: 
                    platform === 'facebook' ? '#1877F2' :
                    platform === 'twitter' ? '#000000' :
                    platform === 'linkedin' ? '#0A66C2' :
                    platform === 'whatsapp' ? '#25D366' : '#F15522'
                }}
              >
                <Icon icon={`mdi:${platform === 'twitter' ? 'twitter' : platform}`} className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const TableOfContents = ({ body }) => {
  const [activeId, setActiveId] = useState('')
  const headings = useMemo(() => {
    if (!body || !Array.isArray(body)) return []
    return body
      .filter(block => ['h2', 'h3'].includes(block.style))
      .map(block => {
        const text = block.children.map(c => c.text).join('')
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
        return { id, text, level: block.style }
      })
  }, [body])

  useEffect(() => {
    const observer = new IntersectionObserver((es) => {
        es.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id) })
    }, { rootMargin: '0% 0% -80% 0%' })
    headings.forEach(h => { const el = document.getElementById(h.id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <div className="sticky top-32 self-start hidden lg:block w-64 pr-8 border-r border-gray-100">
      <h4 className="text-xs font-black text-dark-charcoal uppercase tracking-[0.2em] mb-6">Contents</h4>
      <nav className="space-y-4">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            onClick={(e) => { e.preventDefault(); document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' }) }}
            className={`block text-xs transition-all hover:text-primary-orange ${
              activeId === h.id ? 'text-primary-orange font-black translate-x-2' : 'text-gray-400 font-bold'
            } ${h.level === 'h3' ? 'pl-4' : ''}`}
          >
            {h.text}
          </a>
        ))}
      </nav>
    </div>
  )
}

const Gallery = ({ images, onImageClick }) => {
  if (!images || images.length === 0) return null
  const gridCols = images.length === 1 ? 'grid-cols-1' : images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'
  return (
    <div className={`grid ${gridCols} gap-10 my-10`}>
      {images.map((img, idx) => (
        <div 
          key={idx} 
          onClick={() => onImageClick(img)}
          className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 cursor-zoom-in group ${images.length === 1 ? 'h-[500px]' : 'h-64 md:h-80'}`}
        >
          <Image
            src={urlFor(img).url()}
            alt={img.alt || `Gallery image ${idx + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-dark-charcoal/0 group-hover:bg-dark-charcoal/20 transition-colors" />
        </div>
      ))}
    </div>
  )
}

const PortableTextComponents = (onImageClick) => ({
  types: {
    image: ({ value }) => (
      <div 
        onClick={() => onImageClick(value)}
        className="relative w-full h-[500px] my-14 rounded-3xl overflow-hidden shadow-2xl group border-4 border-white cursor-zoom-in"
      >
        <Image
          src={value ? urlFor(value).url() : '/images/misc/blog-placeholder'}
          alt={value?.alt || 'Featured content image'}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {value.caption && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
            <p className="text-white text-sm font-bold tracking-wide">{value.caption}</p>
          </div>
        )}
      </div>
    ),
    gallery: ({ value }) => <Gallery images={value.images} onImageClick={onImageClick} />,
  },
  block: {
    normal: ({ children }) => <p className="text-dark-charcoal/80 leading-relaxed mb-8 text-lg md:text-xl font-medium">{children}</p>,
    h2: ({ children }) => {
      const id = children.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      return <h2 id={id} className="text-3xl md:text-4xl font-black text-dark-charcoal mt-20 mb-10 tracking-tight scroll-mt-32 uppercase">{children}</h2>
    },
    h3: ({ children }) => {
      const id = children.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      return <h3 id={id} className="text-2xl md:text-3xl font-bold text-dark-charcoal mt-12 mb-6 tracking-tight scroll-mt-32">{children}</h3>
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-[10px] border-primary-orange pl-10 py-6 my-14 bg-primary-orange/5 rounded-r-3xl italic text-2xl text-dark-charcoal font-bold shadow-sm">
        "{children}"
      </blockquote>
    ),
  },
})

// --- Main Article Component ---

export default function BlogDetail({ blog, relatedPosts = [] }) {
  const pathname = usePathname()
  const [currentUrl, setCurrentUrl] = useState('')
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  useEffect(() => setCurrentUrl(window.location.href), [])

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      comment: formData.get('comment'),
      postId: blog._id
    }

    try {
      const res = await fetch('/api/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        setIsSubmitted(true)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error(err)
      alert('Error submitting comment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const prepareBody = (body) => {
    if (!body || !Array.isArray(body)) return body
    const prepared = []
    let currentGallery = []
    body.forEach((block) => {
      if (block._type === 'image') {
        currentGallery.push(block)
      } else {
        if (currentGallery.length > 1) prepared.push({ _type: 'gallery', _key: `gallery-${prepared.length}`, images: currentGallery })
        else if (currentGallery.length === 1) prepared.push(currentGallery[0])
        currentGallery = []
        prepared.push(block)
      }
    })
    if (currentGallery.length > 1) prepared.push({ _type: 'gallery', _key: `gallery-final`, images: currentGallery })
    else if (currentGallery.length === 1) prepared.push(currentGallery[0])
    return prepared
  }

  const allImages = useMemo(() => {
    const images = []
    if (blog?.mainImage) images.push(blog.mainImage)
    if (blog?.body) {
      blog.body.forEach(block => {
        if (block._type === 'image') images.push(block)
      })
    }
    return images
  }, [blog])

  const openImageModal = (image) => {
    const idx = allImages.findIndex(img => img._key === image._key || urlFor(img).url() === urlFor(image).url())
    setSelectedImageIndex(idx)
  }

  const navigateNext = useCallback(() => {
    setSelectedImageIndex(prev => (prev + 1) % allImages.length)
  }, [allImages.length])

  const navigatePrev = useCallback(() => {
    setSelectedImageIndex(prev => (prev - 1 + allImages.length) % allImages.length)
  }, [allImages.length])

  const processedBody = useMemo(() => prepareBody(blog?.body), [blog?.body])
  const readTime = useMemo(() => {
    const text = Array.isArray(blog?.body) 
      ? blog.body.filter(b => b._type === 'block').map(b => b.children.map(c => c.text).join('')).join(' ')
      : blog?.content || ''
    return `${Math.ceil(text.split(/\s+/).length / 200)} min read`
  }, [blog])

  if (!blog) return null

  const isBlog = blog.category?.toLowerCase() === 'blog'
  const backLabel = isBlog ? 'Return to Blog' : 'Return to News'

  return (
    <section className="bg-white min-h-screen">
      <AnimatePresence>
        {selectedImageIndex > -1 && (
          <ImageModal 
            images={allImages} 
            currentIndex={selectedImageIndex} 
            onClose={() => setSelectedImageIndex(-1)} 
            onNext={navigateNext}
            onPrev={navigatePrev}
          />
        )}
      </AnimatePresence>
      
      <SocialShare url={currentUrl} title={blog.title} />

      {/* Hero Header */}
      <div className="relative h-[75vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={blog.image || (blog.mainImage ? urlFor(blog.mainImage).url() : '/images/misc/blog-placeholder')}
          alt={blog.title}
          fill
          className="object-cover scale-105"
          priority
        />
        
        {/* Deep Orange Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-orange/90 via-primary-orange/40 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute top-40 right-20 w-48 h-48 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-primary-orange opacity-10 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center mt-12 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="px-6 py-2 bg-white text-primary-orange rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                {blog.category || 'Insights'}
              </span>
              <span className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 drop-shadow-md bg-dark-charcoal/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Icon icon="mdi:clock-outline" className="w-4 h-4" />
                {readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tight max-w-5xl mx-auto drop-shadow-lg">
              {blog.title}
            </h1>
            
            <div className="pt-8 text-white/80 text-xs font-black uppercase tracking-[0.3em] drop-shadow-md">
               {new Date(blog.publishedAt || blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <TableOfContents body={blog.body} />

          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1"
          >
            {!blog.body && (
              <div className="text-2xl md:text-4xl font-black text-dark-charcoal leading-tight mb-16 border-l-[12px] border-primary-orange pl-10 py-4 opacity-90 italic">
                {blog.summary}
              </div>
            )}

            <div className="prose prose-xl prose-slate max-w-none 
              prose-headings:text-dark-charcoal 
              prose-p:text-dark-charcoal/80 prose-p:leading-[1.9]
              prose-strong:text-dark-charcoal prose-strong:font-black
              prose-a:text-primary-orange prose-a:font-black prose-a:underline-offset-4
              prose-img:rounded-[3rem] prose-img:shadow-2xl">
              {blog.body ? (
                <PortableText value={processedBody} components={PortableTextComponents(openImageModal)} />
              ) : (
                <p className="whitespace-pre-line">{blog.content}</p>
              )}
            </div>

            {/* Author Section */}
            <div className="mt-24 p-12 bg-gray-50 rounded-[4rem] border border-gray-100 flex flex-col md:flex-row items-center gap-12">
               <div className="w-24 h-24 bg-white rounded-3xl p-4 shadow-xl ring-4 ring-white flex items-center justify-center shrink-0">
                  <Image 
                    src="/images/logo.svg" 
                    alt="SGA logo" 
                    width={80} 
                    height={80} 
                    className="object-contain"
                  />
               </div>
               <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-dark-charcoal uppercase">SGA Team</h3>
                  <p className="text-gray-900 mt-4 leading-relaxed font-medium text-lg">Daily strategic security insights for East Africa. Trusted for over 50 years.</p>
               </div>
            </div>

            {/* Recommended Posts Section */}
            {relatedPosts.length > 0 && (
              <div className="mt-24 border-t border-gray-100 pt-20">
                <div className="flex items-center justify-between mb-12">
                  <h4 className="text-3xl font-bold text-primary-orange capitalize">Recommended For You</h4>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((post) => (
                    <Link key={post._id} href={`/news-reports/${post.slug.current || post.slug}`} className="group">
                      <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all hover:border-primary-orange hover:shadow-2xl hover:shadow-primary-orange/20 h-full flex flex-col">
                        <div className="relative h-48 w-full">
                          <Image
                            src={post.image || (post.mainImage ? urlFor(post.mainImage).url() : '/images/misc/blog-placeholder')}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                          <span className="text-sm font-bold text-primary-orange uppercase tracking-widest mb-4 block">{post.category}</span>
                          <h5 className="text-2xl font-bold text-dark-charcoal leading-tight mb-5 group-hover:text-primary-orange transition-colors">{post.title}</h5>
                          <p className="text-gray-500 text-sm line-clamp-2 mt-auto font-medium leading-relaxed">{post.summary}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Display Approved Comments */}
            {blog.comments && blog.comments.length > 0 && (
              <div className="mt-24">
                <h4 className="text-sm font-black text-dark-charcoal uppercase tracking-[0.3em] mb-12">
                  Discussion ({blog.comments.length})
                </h4>
                <div className="space-y-8">
                  {blog.comments.map((comment) => (
                    <div key={comment._id} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary-orange text-white rounded-2xl flex items-center justify-center font-black text-xl">
                          {comment.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h5 className="font-black text-dark-charcoal uppercase text-sm tracking-widest">{comment.name}</h5>
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                            {new Date(comment._createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        {comment.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Comment Section */}
            <div className="mt-24 bg-primary-orange rounded-[4rem] p-10 md:p-16 text-white overflow-hidden relative">
               <div className="relative z-10 text-center">
                  <h3 className="text-4xl font-black mb-4 uppercase tracking-tight">Join the Conversation</h3>
                  <p className="text-white font-bold mb-12 max-w-md mx-auto opacity-90">Have a question about this advisory? Share your thoughts below.</p>
                  
                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white/10 p-12 rounded-[3rem] backdrop-blur-md border border-white/20"
                    >
                      <Icon icon="mdi:check-circle" className="w-20 h-20 text-white mx-auto mb-6" />
                      <h4 className="text-2xl font-black mb-2">Comment Received!</h4>
                      <p className="text-white/80 font-bold">Your message has been sent for moderation. It will appear once approved by the SGA Team.</p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="mt-8 text-xs font-black uppercase tracking-widest border-b border-white hover:text-white/60 transition-colors"
                      >
                        Write another comment
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleCommentSubmit} className="space-y-6 max-w-2xl mx-auto">
                      <div className="grid md:grid-cols-2 gap-6">
                        <input name="name" required type="text" placeholder="Full Name" className="w-full bg-white/20 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-white transition-colors font-bold placeholder:text-white/60" />
                        <input name="email" required type="email" placeholder="Email Address" className="w-full bg-white/20 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-white transition-colors font-bold placeholder:text-white/60" />
                      </div>
                      <textarea name="comment" required rows={4} placeholder="Your comment..." className="w-full bg-white/20 border border-white/20 rounded-3xl px-6 py-4 focus:outline-none focus:border-white transition-colors font-bold placeholder:text-white/60"></textarea>
                      <button 
                        disabled={isSubmitting}
                        className="px-12 py-5 bg-white text-primary-orange font-black uppercase text-xs tracking-widest rounded-3xl shadow-xl hover:bg-dark-charcoal hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Post Comment'}
                      </button>
                    </form>
                  )}
               </div>
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            {/* Back Button */}
            <div className="mt-24 flex justify-center">
               <Link 
                href="/news-reports#news" 
                className="group relative inline-flex items-center justify-center bg-primary-orange text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
               >
                  <Icon icon="mdi:chevron-left" className="w-6 h-6 mr-2 transition-transform group-hover:-translate-x-1" />
                  {backLabel}
               </Link>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  )
}
