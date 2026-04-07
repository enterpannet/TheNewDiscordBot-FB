import type { HTMLAttributes, ReactNode } from 'react'

export function SurfaceCard({
  children,
  className = '',
  padding = 'p-6',
  ...rest
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  padding?: string
}) {
  return (
    <div
      className={`rounded-2xl bg-white shadow-[0px_12px_32px_0px_rgba(25,28,29,0.06)] ${padding} ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
