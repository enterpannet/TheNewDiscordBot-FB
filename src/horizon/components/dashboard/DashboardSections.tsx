import type { ReactNode } from 'react'
import { horizonAssets as a } from '../../assets'

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="flex flex-col gap-4 rounded-[32px] bg-white px-8 pb-12 pt-8 shadow-sm">
        <p className="font-inter text-[10px] font-semibold uppercase tracking-[2px] text-[#737685]">
          Active Staff
        </p>
        <div className="flex items-end gap-2">
          <span className="font-manrope text-[60px] font-extrabold leading-none tracking-tight text-[#003d9b]">
            24
          </span>
          <div className="mb-2 flex items-center gap-1">
            <img src={a.iconTrendUp} alt="" className="h-1.5 w-2.5" />
            <span className="font-inter text-sm font-semibold text-[#16a34a]">+12%</span>
          </div>
        </div>
        <div className="-ml-2 flex items-center pt-4">
          {[a.kpiAvatar1, a.kpiAvatar2, a.kpiAvatar3].map((src) => (
            <div
              key={src}
              className="-ml-2 size-8 shrink-0 overflow-hidden rounded-full border-2 border-white"
            >
              <img src={src} alt="" className="size-full object-cover" />
            </div>
          ))}
          <div className="-ml-2 flex size-8 items-center justify-center rounded-full border-2 border-white bg-[#f1f5f9]">
            <span className="font-inter text-[10px] font-semibold text-[#64748b]">+21</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-[32px] bg-white p-8 shadow-sm">
        <p className="font-inter text-[10px] font-semibold uppercase tracking-[2px] text-[#737685]">
          Total Hours
          <br />
          Today
        </p>
        <p className="font-manrope text-[60px] font-extrabold leading-none tracking-tight text-[#191c1d]">
          164.5
        </p>
        <p className="font-inter pt-4 text-xs font-medium leading-4 text-[#525f73]">
          8.2 hrs avg per
          <br />
          active member
        </p>
      </div>
      <div className="flex flex-col gap-4 rounded-[32px] bg-[#ffdbcf] px-8 pb-12 pt-8 shadow-sm">
        <p className="font-inter text-[10px] font-semibold uppercase tracking-[2px] text-[#380d00]">
          Overtime Alerts
        </p>
        <div className="flex items-baseline gap-2">
          <span className="font-manrope text-[60px] font-extrabold leading-none tracking-tight text-[#380d00]">
            03
          </span>
          <img src={a.iconWarning} alt="" className="h-[28.5px] w-[33px]" />
        </div>
        <p className="font-inter pt-4 text-xs font-semibold leading-4 text-[#812800]">
          Action required for
          <br />
          Sector B
        </p>
      </div>
    </div>
  )
}

export { LaborChart } from '../charts/LaborChart'

type FeedItem = {
  avatar: string
  online?: boolean
  isBot?: boolean
  body: ReactNode
  meta: string
  dimmed?: boolean
}

const feedItems: FeedItem[] = [
  {
    avatar: a.feedAvatar1,
    online: true,
    body: (
      <>
        <span className="font-semibold">Sarah J.</span>
        <span className="font-normal"> joined voice</span>
        <br />
        <span className="font-normal">channel </span>
        <span className="font-semibold text-[#003d9b]">#general</span>
      </>
    ),
    meta: '09:12 AM • Logistics HQ',
  },
  {
    avatar: a.feedAvatar2,
    online: false,
    body: (
      <>
        <span className="font-semibold">Marcus Chen</span>
        <span className="font-normal"> uploaded</span>
        <br />
        <span className="italic text-[#003d9b]">inventory_report.pdf</span>
      </>
    ),
    meta: '08:45 AM • Night Shift',
  },
  {
    avatar: a.feedAvatar3,
    online: true,
    body: (
      <>
        <span className="font-semibold">Lily R.</span>
        <span className="font-normal"> started a meeting in</span>
        <br />
        <span className="text-[#003d9b]">#briefing-room</span>
      </>
    ),
    meta: '08:00 AM • Main Hub',
  },
  {
    avatar: a.botPlaceholder,
    isBot: true,
    body: (
      <>
        <span className="font-semibold">Mee6 Bot</span>
        <span className="font-normal"> cleared</span>
        <br />
        <span className="italic">#spam-channel</span>
      </>
    ),
    meta: '04:00 AM • Automated',
    dimmed: true,
  },
]

export function DiscordFeed() {
  return (
    <div className="flex h-full min-h-[520px] flex-col rounded-[40px] bg-[#e1e3e4] p-8 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative size-[31px]">
            <img src={a.discordLogo} alt="" className="size-full" />
          </div>
          <h3 className="font-manrope text-base font-bold text-[#191c1d]">Discord Feed</h3>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-[#f0fdf4] px-2 py-1">
          <span className="size-1 rounded-full bg-[#16a34a]" />
          <span className="font-inter text-[10px] font-semibold text-[#16a34a]">LIVE</span>
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto pr-2">
        {feedItems.map((item) => (
          <div
            key={item.meta}
            className={`flex gap-4 ${item.dimmed ? 'opacity-60' : ''}`}
          >
            <div className="relative shrink-0">
              {item.isBot ? (
                <div className="flex size-10 items-center justify-center rounded-full bg-[#e2e8f0]">
                  <img src={item.avatar} alt="" className="h-[18px] w-4" />
                </div>
              ) : (
                <>
                  <div className="h-10 w-7 overflow-hidden rounded-full sm:w-8">
                    <img src={item.avatar} alt="" className="size-full object-cover" />
                  </div>
                  <span
                    className={`absolute bottom-0 right-0 size-3 rounded-full border-2 border-white ${
                      item.online ? 'bg-[#22c55e]' : 'bg-[#cbd5e1]'
                    }`}
                  />
                </>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-inter text-sm leading-5 text-[#191c1d]">{item.body}</p>
              <p className="font-inter mt-1 text-[10px] font-semibold text-[#737685]">
                {item.meta}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="font-inter mt-8 w-full rounded-2xl border border-[rgba(195,198,214,0.3)] bg-white py-4 text-[10px] font-semibold uppercase tracking-wide text-[#737685]"
      >
        View Full Logs
      </button>
    </div>
  )
}

type ApprovalStatus = 'approved' | 'pending' | 'flagged'

const approvals: {
  name: string
  dept: string
  status: ApprovalStatus
  avatar: string
}[] = [
  { name: 'David Miller', dept: 'Operations • 40.5 hrs', status: 'approved', avatar: a.approvalDavid },
  { name: 'Emma Watson', dept: 'Design • 38.0 hrs', status: 'pending', avatar: a.approvalEmma },
  { name: 'Frank Castle', dept: 'Security • 48.0 hrs', status: 'approved', avatar: a.approvalFrank },
  { name: 'Grace Hopper', dept: 'Development • 42.2 hrs', status: 'flagged', avatar: a.approvalGrace },
]

function badgeFor(status: ApprovalStatus) {
  switch (status) {
    case 'approved':
      return (
        <span className="rounded-full bg-[#dcfce7] px-3 py-1 font-inter text-[10px] font-semibold text-[#15803d]">
          APPROVED
        </span>
      )
    case 'pending':
      return (
        <span className="rounded-full bg-[#fef9c3] py-1 pl-3 pr-12 font-inter text-[10px] font-semibold uppercase leading-tight text-[#a16207]">
          Pending
          <br />
          Review
        </span>
      )
    default:
      return (
        <span className="rounded-full bg-[#ffdbcf] px-3 py-1 font-inter text-[10px] font-semibold text-[#380d00]">
          FLAGGED
        </span>
      )
  }
}

function barFor(status: ApprovalStatus) {
  switch (status) {
    case 'approved':
      return <div className="h-1 w-full rounded-full bg-[#003d9b]" />
    case 'pending':
      return (
        <div className="relative h-1 w-full overflow-hidden rounded-full bg-[rgba(195,198,214,0.2)]">
          <div className="absolute inset-y-0 left-0 w-[95%] bg-[#eab308]" />
        </div>
      )
    default:
      return <div className="h-1 w-full rounded-full bg-[#7b2600]" />
  }
}

export function TimesheetApprovals() {
  return (
    <section className="rounded-[40px] bg-white p-10 shadow-sm">
      <div className="mb-10 flex items-center justify-between">
        <h3 className="font-manrope text-2xl font-bold text-[#191c1d]">
          Recent Timesheet Approvals
        </h3>
        <div className="flex gap-2">
          <button type="button" className="p-2" aria-label="Filter">
            <img src={a.iconFilter} alt="" className="h-3 w-[18px]" />
          </button>
          <button type="button" className="p-2" aria-label="More">
            <img src={a.iconMore} alt="" className="h-1 w-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {approvals.map((row) => (
          <div
            key={row.name}
            className="flex flex-col justify-between rounded-3xl bg-[#f3f4f5] p-6"
          >
            <div className="mb-6 flex items-start justify-between gap-2">
              <div className="size-12 overflow-hidden rounded-2xl shadow-sm">
                <img src={row.avatar} alt="" className="size-full object-cover" />
              </div>
              {badgeFor(row.status)}
            </div>
            <div>
              <p className="font-inter text-base font-semibold text-[#191c1d]">{row.name}</p>
              <p className="font-inter mt-1 pb-4 text-xs text-[#737685]">{row.dept}</p>
              <div className="overflow-hidden rounded-full bg-[rgba(195,198,214,0.2)]">
                {barFor(row.status)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
