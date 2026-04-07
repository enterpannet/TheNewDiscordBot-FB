import { PageHeader } from '../components/ui/PageHeader'
import { SurfaceCard } from '../components/ui/SurfaceCard'
import { Button } from '../components/ui/Button'

const rows = [
  { staff: 'Sarah Chen', project: 'Core API', regular: '38.0', ot: '4.5', status: 'Synced' },
  { staff: 'Marcus Thorne', project: 'Mobile', regular: '36.5', ot: '0.0', status: 'Pending' },
  { staff: 'Elena Rodriguez', project: 'Design Ops', regular: '40.0', ot: '2.0', status: 'Synced' },
  { staff: 'David Miller', project: 'Logistics', regular: '42.0', ot: '6.0', status: 'Flagged' },
  { staff: 'Frank Castle', project: 'Security', regular: '40.0', ot: '0.0', status: 'Synced' },
]

export function TimesheetsPage() {
  return (
    <>
      <PageHeader
        title="Timesheets Log"
        subtitle="Review Discord-linked work sessions, overtime accrual, and approval states across your organization."
        actions={
          <>
            <Button variant="secondary">Export CSV</Button>
            <Button variant="primary">Request Adjustment</Button>
          </>
        }
      />

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <SurfaceCard className="border-l-4 border-[#003d9b]">
          <p className="font-inter text-[10px] font-semibold uppercase tracking-wide text-[#003d9b]">
            Total Regular Hours
          </p>
          <p className="font-manrope mt-2 text-4xl font-extrabold text-[#191c1d]">1,248.5</p>
          <p className="font-inter mt-3 text-xs text-[#525f73]">Synced across 14 voice channels</p>
        </SurfaceCard>
        <SurfaceCard className="border-l-4 border-[#ffdbcf]">
          <p className="font-inter text-[10px] font-semibold uppercase tracking-wide text-[#812800]">
            Total Overtime Hours
          </p>
          <p className="font-manrope mt-2 text-4xl font-extrabold text-[#191c1d]">112.0</p>
          <p className="font-inter mt-3 text-xs text-[#525f73]">12% increase from last period</p>
        </SurfaceCard>
        <SurfaceCard className="flex flex-col justify-center gap-3 md:flex-row">
          <Button variant="secondary" className="flex-1 py-4">
            Bulk Approve
          </Button>
          <Button variant="primary" className="flex-1 py-4">
            Sync Payroll
          </Button>
        </SurfaceCard>
      </div>

      <SurfaceCard className="mb-6" padding="p-6">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="font-inter text-[10px] font-semibold uppercase text-[#434654]">Week</label>
            <select className="mt-1 block w-40 rounded-lg border border-[rgba(195,198,214,0.4)] bg-white px-3 py-2 font-inter text-sm">
              <option>Apr 1 – Apr 7, 2026</option>
            </select>
          </div>
          <div>
            <label className="font-inter text-[10px] font-semibold uppercase text-[#434654]">Department</label>
            <select className="mt-1 block w-44 rounded-lg border border-[rgba(195,198,214,0.4)] bg-white px-3 py-2 font-inter text-sm">
              <option>All Departments</option>
            </select>
          </div>
          <div>
            <label className="font-inter text-[10px] font-semibold uppercase text-[#434654]">Status</label>
            <select className="mt-1 block w-36 rounded-lg border border-[rgba(195,198,214,0.4)] bg-white px-3 py-2 font-inter text-sm">
              <option>All statuses</option>
            </select>
          </div>
        </div>
      </SurfaceCard>

      <div className="overflow-x-auto rounded-2xl border border-[rgba(195,198,214,0.2)] bg-white shadow-sm">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-[rgba(195,198,214,0.2)] bg-[#f8fafc] font-inter text-xs font-semibold uppercase tracking-wide text-[#737685]">
              <th className="px-6 py-4">Staff Member</th>
              <th className="px-6 py-4">Project / Channel</th>
              <th className="px-6 py-4">Regular</th>
              <th className="px-6 py-4">Overtime</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.staff}
                className="border-b border-[rgba(195,198,214,0.12)] font-inter text-[#191c1d] last:border-0"
              >
                <td className="px-6 py-4 font-semibold">{r.staff}</td>
                <td className="px-6 py-4 text-[#525f73]">{r.project}</td>
                <td className="px-6 py-4">{r.regular}h</td>
                <td className="px-6 py-4">{r.ot}h</td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      r.status === 'Synced'
                        ? 'bg-[#dcfce7] text-[#15803d]'
                        : r.status === 'Pending'
                          ? 'bg-[#fef9c3] text-[#a16207]'
                          : 'bg-[#ffdbcf] text-[#812800]'
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
