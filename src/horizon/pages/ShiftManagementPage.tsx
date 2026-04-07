import { horizonAssets as a } from '../assets'
import { Button } from '../components/ui/Button'
import { PageHeader } from '../components/ui/PageHeader'

const weekDays = [
  { label: 'Mon', date: 23, weekend: false },
  { label: 'Tue', date: 24, weekend: false },
  { label: 'Wed', date: 25, weekend: false, active: true },
  { label: 'Thu', date: 26, weekend: false },
  { label: 'Fri', date: 27, weekend: false },
  { label: 'Sat', date: 28, weekend: true },
  { label: 'Sun', date: 29, weekend: true },
]

const staffRows = [
  { name: 'Sarah Jenkins', avatar: a.shiftStaff1, checked: true },
  { name: 'Marcus Chen', avatar: a.shiftStaff2, checked: false },
  { name: 'David Miller', avatar: a.shiftStaff3, checked: true },
  { name: 'Lydia Thorne', avatar: a.shiftStaff4, checked: false },
]

export function ShiftManagementPage() {
  return (
    <>
      <PageHeader
        title="Shift Management"
        subtitle="Control resource allocation and monitor real-time presence."
        actions={
          <>
            <Button variant="secondary" className="gap-2 px-5 py-2.5">
              <img src={a.shiftExportPdf} alt="" className="size-3" />
              Export PDF
            </Button>
            <Button variant="primary" className="gap-2 px-5 py-2.5">
              <img src={a.shiftPlus} alt="" className="size-[15px]" />
              Create New Shift
            </Button>
          </>
        }
      />

      <div className="grid gap-6 xl:grid-cols-12">
        <div className="xl:col-span-4">
          <div className="rounded-xl bg-[#f3f4f5] p-6">
            <div className="mb-6 flex items-start gap-2">
              <img src={a.shiftBulkIcon} alt="" className="mt-1 h-4 w-6" />
              <div>
                <h2 className="font-manrope text-lg font-bold text-[#191c1d]">Bulk Assign Shift</h2>
                <p className="font-inter mt-1 text-xs font-semibold uppercase tracking-wide text-[#737685]">
                  Labor Allocation
                </p>
              </div>
            </div>
            <p className="font-inter mb-3 text-xs font-semibold uppercase text-[#434654]">
              Select Staff
            </p>
            <div className="mb-6 space-y-2 rounded-lg border border-[rgba(195,198,214,0.2)] bg-white p-3">
              {staffRows.map((row) => (
                <label
                  key={row.name}
                  className="flex cursor-pointer items-center gap-3 rounded-md p-2 hover:bg-[#f8f9fa]"
                >
                  <span
                    className={`flex size-[18px] items-center justify-center rounded border ${
                      row.checked
                        ? 'border-[#003d9b] bg-[#003d9b]'
                        : 'border-[#6b7280] bg-white'
                    }`}
                  >
                    {row.checked ? <img src={a.shiftCheckbox} alt="" className="size-4" /> : null}
                  </span>
                  <img src={row.avatar} alt="" className="size-6 rounded-full object-cover" />
                  <span className="font-inter text-sm font-medium text-[#191c1d]">{row.name}</span>
                </label>
              ))}
            </div>
            <p className="font-inter mb-2 text-xs font-semibold uppercase text-[#434654]">Date Range</p>
            <div className="relative mb-6">
              <img
                src={a.shiftCalendar}
                alt=""
                className="pointer-events-none absolute left-3 top-1/2 size-[13px] -translate-y-1/2"
              />
              <input
                readOnly
                className="w-full rounded-t-lg border-b-2 border-[rgba(195,198,214,0.4)] bg-white py-3 pl-10 pr-3 font-inter text-sm"
                value="Oct 24, 2023 - Oct 31, 2023"
              />
            </div>
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div>
                <p className="font-inter mb-2 text-xs font-semibold uppercase text-[#434654]">
                  Start Time
                </p>
                <div className="rounded-t-lg border-b-2 border-[rgba(195,198,214,0.4)] bg-white px-3 py-2 font-inter text-sm">
                  09:00 AM
                </div>
              </div>
              <div>
                <p className="font-inter mb-2 text-xs font-semibold uppercase text-[#434654]">End Time</p>
                <div className="rounded-t-lg border-b-2 border-[rgba(195,198,214,0.4)] bg-white px-3 py-2 font-inter text-sm">
                  05:00 PM
                </div>
              </div>
            </div>
            <div className="mb-6 rounded-xl border-l-4 border-[#7b2600] bg-[#ffdbcf] px-4 py-4">
              <div className="flex gap-3">
                <img src={a.shiftConflict} alt="" className="mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <p className="font-inter text-sm font-semibold text-[#380d00]">Conflict Detected</p>
                  <p className="font-inter mt-1 text-xs text-[#812800]">
                    David Miller is already assigned to Night Shift on Oct 25.
                  </p>
                </div>
              </div>
            </div>
            <Button variant="primary" className="w-full py-4">
              Assign to 2 Selected Staff
              <img src={a.shiftFabAi} alt="" className="size-4 opacity-90" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[rgba(195,198,214,0.1)] bg-white p-6 shadow-sm xl:col-span-8">
          <div className="absolute -right-32 -top-32 size-64 rounded-full bg-[rgba(0,61,155,0.05)] blur-3xl" />
          <div className="relative mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="font-manrope text-xl font-extrabold leading-tight text-[#191c1d]">
                Weekly
                <br />
                Outlook
              </h2>
              <div className="flex rounded-full bg-[#edeeef] p-1">
                <button
                  type="button"
                  className="rounded-full bg-white px-6 py-2 text-center font-inter text-xs font-semibold shadow-sm"
                >
                  Grid
                  <br />
                  View
                </button>
                <button
                  type="button"
                  className="rounded-full px-6 py-2 text-center font-inter text-xs font-semibold text-[#737685]"
                >
                  List
                  <br />
                  View
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="flex size-8 items-center justify-center rounded-full">
                <img src={a.shiftChevronLeft} alt="" className="h-2.5 w-1.5" />
              </button>
              <p className="font-inter text-center text-sm font-semibold text-[#191c1d]">
                Oct 23 - Oct 29,
                <br />
                2023
              </p>
              <button type="button" className="flex size-8 items-center justify-center rounded-full">
                <img src={a.shiftChevronRight} alt="" className="h-2.5 w-1.5" />
              </button>
            </div>
          </div>

          <div className="relative grid grid-cols-7 gap-2 border-t border-[rgba(195,198,214,0.2)] pt-4">
            {weekDays.map((d) => (
              <div
                key={d.label}
                className={`min-h-[280px] rounded-xl p-2 ${
                  d.active ? 'ring-2 ring-[#003d9b]' : ''
                } ${d.weekend ? 'bg-[#f3f4f5]' : 'bg-[#fafafa]'}`}
              >
                <div className="mb-3 text-center">
                  <p className="font-inter text-[10px] font-semibold uppercase text-[#737685]">
                    {d.label}
                  </p>
                  <p
                    className={`font-manrope text-lg font-bold ${
                      d.active ? 'text-[#003d9b]' : 'text-[#191c1d]'
                    }`}
                  >
                    {d.date}
                  </p>
                  {d.active ? <div className="mx-auto mt-1 h-1 w-1 rounded-full bg-[#003d9b]" /> : null}
                </div>
                {d.weekend ? (
                  <p className="mt-16 -rotate-90 text-center font-inter text-[10px] font-bold uppercase tracking-widest text-[#94a3b8]">
                    Weekend
                  </p>
                ) : d.label === 'Tue' ? (
                  <button
                    type="button"
                    className="w-full rounded-lg border border-dashed border-[#c3c6d6] py-8 font-inter text-[10px] font-semibold text-[#737685]"
                  >
                    + Add Shift
                  </button>
                ) : (
                  <div className="space-y-2">
                    <div className="rounded-lg bg-[#003d9b] px-2 py-3 font-inter text-[10px] font-semibold text-white">
                      Morning Standup
                      <br />
                      09:00–09:30
                    </div>
                    {d.active ? (
                      <div className="rounded-lg bg-[#7b2600] px-2 py-3 font-inter text-[10px] font-semibold text-white">
                        Night Shift
                        <br />
                        22:00–06:00
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="font-inter mt-6 flex items-center gap-2 text-xs text-[#737685]">
            <span className="inline-block size-3 rounded border border-[#cbd5e1]" />
            Drag shifts to reassign dates or staff members
          </p>
        </div>
      </div>

      <button
        type="button"
        className="fixed bottom-10 right-10 z-30 flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#003d9b] to-[#0052cc] shadow-xl xl:hidden"
        aria-label="Quick add"
      >
        <img src={a.shiftFabAi} alt="" className="size-6" />
      </button>
    </>
  )
}
