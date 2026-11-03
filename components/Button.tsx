import Link from 'next/link'
import { Icon } from '@iconify/react'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  /**
   * dark:  white outline, fills white on hover (for dark backgrounds)
   * light: orange outline, fills orange on hover (for light backgrounds)
   * solid: orange fill, fills white on hover
   */
  variant?: 'dark' | 'light' | 'solid'
  size?: 'default' | 'small'
  className?: string
  /** Optional icon shown before the label (iconify name, e.g. "mdi:phone-outline") */
  icon?: string
  /** Show the arrow that fades in on hover (default true) */
  arrow?: boolean
}

// Same look and hover as the "Our Sustainability Impact" button on the About section
const variants = {
  dark: 'bg-transparent hover:bg-white text-white hover:text-primary-orange border border-white',
  light: 'bg-transparent hover:bg-primary-orange text-primary-orange hover:text-white border border-primary-orange',
  solid: 'bg-primary-orange hover:bg-white text-white hover:text-primary-orange border border-primary-orange',
}

const sizes = {
  default: 'px-14 hover:px-18 py-3 text-md',
  small: 'px-6 hover:px-12 py-2 text-sm',
}

// Arrow colour is chosen so it stays visible on the hovered fill
const arrowColors = {
  dark: 'text-primary-orange',
  light: 'text-white',
  solid: 'text-primary-orange',
}

export default function Button({ children, href, onClick, variant = 'light', size = 'default', className = '', icon, arrow = true }: ButtonProps) {
  const classes = `${variants[variant]} ${sizes[size]} rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-center group relative w-full sm:w-auto ${className}`

  const content = (
    <>
      {icon && <Icon icon={icon} className="w-5 h-5 shrink-0" />}
      {children}
      {arrow && (
        <Icon
          icon="iconoir:arrow-right-circle"
          className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-4 ${arrowColors[variant]}`}
        />
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
