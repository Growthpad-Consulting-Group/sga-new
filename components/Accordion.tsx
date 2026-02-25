'use client'

import { useState, ReactNode } from 'react'
import { Icon } from '@iconify/react'

interface AccordionItemProps {
  id: string
  title: string | ReactNode
  children: ReactNode
  isOpen: boolean
  onToggle: () => void
  variant?: 'default' | 'footer'
}

function AccordionItem({ title, children, isOpen, onToggle, variant = 'default' }: AccordionItemProps) {
  const variants = {
    default: {
      container: 'border border-gray-200 rounded-lg overflow-hidden',
      button: 'w-full text-left p-6 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between',
      title: 'text-lg font-semibold text-navy-blue pr-4',
      icon: 'w-6 h-6 text-primary-orange flex-shrink-0',
      content: 'p-6 bg-gray-50 border-t border-gray-200',
    },
    footer: {
      container: 'border border-white/20 rounded-lg overflow-hidden',
      button: 'w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 transition-colors',
      title: 'font-semibold text-white capitalize text-xl sm:text-2xl',
      icon: 'w-6 h-6 text-white',
      content: 'p-4',
    },
  }

  const styles = variants[variant]

  return (
    <div className={styles.container}>
      <button onClick={onToggle} className={styles.button}>
        {typeof title === 'string' ? (
          <h4 className={styles.title}>{title}</h4>
        ) : (
          title
        )}
        <Icon
          icon="mdi:chevron-down"
          className={`${styles.icon} transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  )
}

interface AccordionProps {
  items: Array<{
    id: string
    title: string | ReactNode
    content: ReactNode
  }>
  defaultOpenId?: string
  variant?: 'default' | 'footer'
  allowMultiple?: boolean
}

export default function Accordion({ items, defaultOpenId, variant = 'default', allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : [])

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev =>
        prev.includes(id) ? prev.filter(openId => openId !== id) : [...prev, id]
      )
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          isOpen={openIds.includes(item.id)}
          onToggle={() => toggleItem(item.id)}
          variant={variant}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}
