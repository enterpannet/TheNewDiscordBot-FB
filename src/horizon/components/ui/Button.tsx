import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-[#003d9b] to-[#0052cc] text-white shadow-[0_10px_15px_-3px_rgba(0,61,155,0.2)] hover:opacity-[0.97]',
  secondary: 'bg-[#e7e8e9] text-[#0040a2] hover:bg-[#dfe0e2]',
  ghost: 'bg-transparent text-[#64748b] hover:bg-[#f1f5f9]',
}

export function Button({
  variant = 'secondary',
  className = '',
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}) {
  return (
    <button
      type="button"
      className={`font-inter inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
