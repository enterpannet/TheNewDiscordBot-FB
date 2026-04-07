import { PageHeader } from '../components/ui/PageHeader'
import { SurfaceCard } from '../components/ui/SurfaceCard'
import { Button } from '../components/ui/Button'

export function SettingsPage() {
  return (
    <>
      <p className="font-inter mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#737685]">
        System configuration
      </p>
      <PageHeader
        title="Enterprise Controls"
        subtitle="Define shift boundaries, Discord sync behavior, and compliance rules for Horizon Workforce. Changes are audited and applied on the next maintenance window."
      />

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <SurfaceCard>
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-manrope text-lg font-bold text-[#191c1d]">Shift Definitions</h3>
                <p className="font-inter mt-1 text-sm text-[#525f73]">
                  Canonical work blocks used for timesheets and Discord presence mapping.
                </p>
              </div>
              <Button variant="ghost" className="text-sm text-[#003d9b]">
                + Add window
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[rgba(195,198,214,0.2)] p-4">
                <div>
                  <p className="font-manrope font-semibold text-[#191c1d]">Morning Shift</p>
                  <p className="font-inter text-xs text-[#525f73]">06:00 – 14:00 local</p>
                </div>
                <div className="text-right font-inter text-sm text-[#434654]">
                  <p className="font-semibold">Discord sync</p>
                  <p className="text-xs text-[#737685]">#morning-check-in</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[rgba(195,198,214,0.2)] p-4">
                <div>
                  <p className="font-manrope font-semibold text-[#191c1d]">Afternoon Shift</p>
                  <p className="font-inter text-xs text-[#525f73]">14:00 – 22:00 local</p>
                </div>
                <div className="text-right font-inter text-sm text-[#434654]">
                  <p className="font-semibold">Discord sync</p>
                  <p className="text-xs text-[#737685]">#floor-ops</p>
                </div>
              </div>
            </div>
          </SurfaceCard>

          <SurfaceCard>
            <h3 className="font-manrope text-lg font-bold text-[#191c1d]">Overtime & grace</h3>
            <p className="font-inter mt-1 text-sm text-[#525f73]">
              Thresholds before automatic flagging in reports.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block font-inter text-xs font-semibold text-[#434654]">
                Daily OT threshold (h)
                <input
                  type="text"
                  defaultValue="2"
                  className="mt-2 w-full rounded-lg border border-[rgba(195,198,214,0.4)] px-3 py-2 font-inter text-sm"
                />
              </label>
              <label className="block font-inter text-xs font-semibold text-[#434654]">
                Clock-in grace (min)
                <input
                  type="text"
                  defaultValue="7"
                  className="mt-2 w-full rounded-lg border border-[rgba(195,198,214,0.4)] px-3 py-2 font-inter text-sm"
                />
              </label>
            </div>
          </SurfaceCard>
        </div>

        <div className="space-y-6 lg:col-span-5">
          <SurfaceCard>
            <h3 className="font-manrope text-lg font-bold text-[#191c1d]">Discord integration</h3>
            <p className="font-inter mt-1 text-sm text-[#525f73]">
              Webhook endpoints and bot permissions for live activity feeds.
            </p>
            <label className="mt-6 block font-inter text-xs font-semibold text-[#434654]">
              Guild ID
              <input
                type="text"
                defaultValue="••••••••••••••••"
                readOnly
                className="mt-2 w-full rounded-lg border border-[rgba(195,198,214,0.4)] bg-[#f8fafc] px-3 py-2 font-mono text-sm"
              />
            </label>
            <Button variant="primary" className="mt-6 w-full py-3">
              Rotate webhook secret
            </Button>
          </SurfaceCard>
          <SurfaceCard className="border border-[#003d9b]/20 bg-[rgba(239,246,255,0.4)]">
            <p className="font-manrope font-semibold text-[#003d9b]">Maintenance window</p>
            <p className="font-inter mt-2 text-sm text-[#525f73]">
              Sundays 02:00–04:00 UTC. Configuration publishes automatically after validation.
            </p>
          </SurfaceCard>
        </div>
      </div>
    </>
  )
}
