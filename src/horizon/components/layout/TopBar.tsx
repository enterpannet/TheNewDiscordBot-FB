import { horizonAssets as a } from '../../assets'

export function TopBar({ searchPlaceholder }: { searchPlaceholder: string }) {
  return (
    <header className="fixed left-64 right-0 top-0 z-30 flex h-16 items-center justify-between gap-6 border-b border-[rgba(195,198,214,0.15)] bg-[rgba(255,255,255,0.85)] px-8 backdrop-blur-md">
      <div className="relative min-w-0 flex-1">
        <img
          src={a.iconSearch}
          alt=""
          className="pointer-events-none absolute left-3.5 top-1/2 h-[13.5px] w-[13.5px] -translate-y-1/2 opacity-70"
        />
        <input
          type="search"
          placeholder={searchPlaceholder}
          className="font-manrope w-full rounded-full border-0 bg-[#f3f4f5] py-2 pl-10 pr-4 text-sm font-medium text-[#191c1d] placeholder:text-[#6b7280] outline-none focus:ring-2 focus:ring-[#003d9b]/20"
        />
      </div>
      <div className="flex shrink-0 items-center gap-6">
        <div className="flex items-center gap-4">
          <button type="button" className="relative p-0" aria-label="Notifications">
            <img src={a.iconBell} alt="" className="h-5 w-4" />
            <span className="absolute -right-px top-0 size-2 rounded-full bg-[#ba1a1a]" />
          </button>
          <button type="button" aria-label="Help">
            <img src={a.iconHelp} alt="" className="size-5" />
          </button>
        </div>
        <div className="h-6 w-px bg-[rgba(195,198,214,0.2)]" />
        <div className="flex items-center gap-3">
          <span className="font-manrope hidden text-xs font-semibold uppercase tracking-wide text-[#64748b] sm:inline">
            Operational Status:
          </span>
          <div className="flex items-center gap-1.5 rounded-full bg-[#f0fdf4] px-2.5 py-1">
            <span className="size-1.5 rounded-full bg-[#16a34a]" />
            <span className="font-manrope text-[10px] font-bold text-[#15803d]">NOMINAL</span>
          </div>
        </div>
      </div>
    </header>
  )
}
