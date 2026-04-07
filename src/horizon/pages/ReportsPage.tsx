import { AttendanceTrendChart } from '../components/charts/AttendanceTrendChart'
import { PageHeader } from '../components/ui/PageHeader'
import { SurfaceCard } from '../components/ui/SurfaceCard'
import { Button } from '../components/ui/Button'

export function ReportsPage() {
  return (
    <>
      <PageHeader
        title="Monthly Attendance Report"
        subtitle="Reporting period: March 1 – March 31, 2026 • Generated for Horizon Workforce operations."
        actions={
          <>
            <Button variant="secondary" className="gap-2">
              <span className="text-lg leading-none">↓</span>
              Export PDF
            </Button>
            <Button variant="primary" className="gap-2">
              <span className="text-lg leading-none">+</span>
              Schedule Report
            </Button>
          </>
        }
      />

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Avg. Daily Attendance', value: '94.2%', sub: 'Rolling 30-day mean' },
          { label: 'Total Absences', value: '12', sub: 'Across 18 staff members' },
          { label: 'Late Arrivals', value: '28', sub: 'Grace period applied: 7m' },
          { label: 'Unplanned OT Hours', value: '64.5', sub: 'Requires manager sign-off' },
        ].map((s) => (
          <SurfaceCard key={s.label}>
            <p className="font-inter text-[10px] font-semibold uppercase tracking-wide text-[#737685]">
              {s.label}
            </p>
            <p className="font-manrope mt-2 text-3xl font-extrabold text-[#191c1d]">{s.value}</p>
            <p className="font-inter mt-2 text-xs text-[#525f73]">{s.sub}</p>
          </SurfaceCard>
        ))}
      </div>

      <SurfaceCard padding="p-8">
        <h3 className="font-manrope text-lg font-bold text-[#191c1d]">Attendance Trend</h3>
        <p className="font-inter mt-1 text-sm text-[#525f73]">
          Department-level attendance vs. target threshold (90%).
        </p>
        <AttendanceTrendChart />
      </SurfaceCard>
    </>
  )
}
