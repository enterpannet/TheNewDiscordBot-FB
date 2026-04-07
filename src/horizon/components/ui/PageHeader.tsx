import type { ReactNode } from 'react'

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string
  subtitle?: string
  actions?: ReactNode
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
      <div>
        <h1 className="font-manrope text-3xl font-extrabold tracking-tight text-[#191c1d] md:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="font-inter mt-2 max-w-3xl text-base leading-relaxed text-[#434654] md:text-[15px]">
            {subtitle}
          </p>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
    </div>
  )
}
