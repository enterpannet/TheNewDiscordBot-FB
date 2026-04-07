import { horizonAssets as a } from '../assets'
import { Button } from '../components/ui/Button'
import {
  DiscordFeed,
  KpiCards,
  LaborChart,
  TimesheetApprovals,
} from '../components/dashboard/DashboardSections'

export function DashboardPage() {
  return (
    <>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="font-manrope text-4xl font-extrabold tracking-tight text-[#191c1d]">
            Operational Pulse
          </h1>
          <p className="font-inter mt-1 text-base italic text-[#525f73]">
            Architectural ledger updated 2 minutes ago
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" className="px-6 py-4">
            Export Ledger
          </Button>
          <Button variant="primary" className="px-6 py-3">
            <img src={a.iconPlus} alt="" className="size-[10.5px]" />
            Create Shift
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-6 xl:flex-row xl:items-stretch">
        <div className="flex min-w-0 flex-1 flex-col gap-6 xl:max-w-[calc(100%-320px)]">
          <KpiCards />
          <LaborChart />
        </div>
        <div className="w-full shrink-0 xl:w-[min(100%,320px)] xl:max-w-sm">
          <DiscordFeed />
        </div>
      </div>

      <div className="mt-6">
        <TimesheetApprovals />
      </div>
    </>
  )
}
