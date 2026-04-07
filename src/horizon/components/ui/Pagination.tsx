import { horizonAssets as a } from '../../assets'

export function Pagination({
  showing,
  total,
  page,
  totalPages,
}: {
  showing: number
  total: number
  page: number
  totalPages: number
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(195,198,214,0.2)] pt-8">
      <p className="font-inter text-sm text-[#434654]">
        Showing <span className="font-semibold text-[#191c1d]">{showing}</span> of{' '}
        <span className="font-semibold text-[#191c1d]">{total}</span> members
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full bg-[#f3f4f5]"
          aria-label="Previous page"
        >
          <img src={a.staffPagePrev} alt="" className="h-3 w-2" />
        </button>
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            type="button"
            className={`flex size-10 items-center justify-center rounded-full text-xs font-semibold ${
              n === page ? 'bg-[#003d9b] text-white' : 'text-[#434654]'
            }`}
          >
            {n}
          </button>
        ))}
        <span className="px-1 text-[#434654]">...</span>
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full text-xs font-semibold text-[#434654]"
        >
          {totalPages}
        </button>
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full bg-[#f3f4f5]"
          aria-label="Next page"
        >
          <img src={a.staffPageNext} alt="" className="h-3 w-2" />
        </button>
      </div>
    </div>
  )
}
