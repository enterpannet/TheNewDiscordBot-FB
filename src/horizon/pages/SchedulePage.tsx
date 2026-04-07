import { Fragment } from 'react'
import { PageHeader } from '../components/ui/PageHeader'
import { SurfaceCard } from '../components/ui/SurfaceCard'
import { Button } from '../components/ui/Button'

const locations = ['Logistics HQ', 'Night Shift Floor', 'Remote EU', 'Briefing Room A']

const timeSlots = ['06:00', '10:00', '14:00', '18:00', '22:00']
const weekLabels = ['Mon 7', 'Tue 8', 'Wed 9', 'Thu 10', 'Fri 11', 'Sat 12', 'Sun 13']

export function SchedulePage() {
  return (
    <>
      <PageHeader
        title="Master Schedule"
        subtitle="Unified view of shifts, on-call rotations, and Discord voice room coverage."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex rounded-full bg-[#edeeef] p-1">
              <button
                type="button"
                className="rounded-full bg-white px-4 py-2 font-inter text-xs font-semibold shadow-sm"
              >
                Week
              </button>
              <button
                type="button"
                className="rounded-full px-4 py-2 font-inter text-xs font-semibold text-[#737685]"
              >
                Month
              </button>
            </div>
            <Button variant="primary" className="gap-2">
              <span className="text-lg leading-none">+</span>
              Quick Add
            </Button>
          </div>
        }
      />

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-4">
          <SurfaceCard>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-manrope text-sm font-bold text-[#191c1d]">April 2026</h3>
              <div className="flex gap-2 text-[#64748b]">
                <button type="button" aria-label="Prev month">
                  ‹
                </button>
                <button type="button" aria-label="Next month">
                  ›
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center font-inter text-[10px] font-semibold uppercase text-[#94a3b8]">
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-7 gap-1 text-center font-inter text-xs">
              {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`rounded-lg py-2 ${
                    d === 8 ? 'bg-[#003d9b] font-semibold text-white' : 'text-[#191c1d] hover:bg-[#f1f5f9]'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </SurfaceCard>
          <SurfaceCard>
            <h3 className="font-manrope text-sm font-bold text-[#191c1d]">Locations</h3>
            <ul className="mt-4 space-y-3">
              {locations.map((loc) => (
                <li key={loc}>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-transparent p-2 hover:bg-[#f8fafc]">
                    <input type="checkbox" defaultChecked className="size-4 rounded border-[#cbd5e1]" />
                    <span className="font-inter text-sm text-[#191c1d]">{loc}</span>
                  </label>
                </li>
              ))}
            </ul>
          </SurfaceCard>
        </div>
        <div className="lg:col-span-8">
          <SurfaceCard padding="p-0" className="overflow-hidden">
            <div className="grid grid-cols-[100px_repeat(7,minmax(0,1fr))] gap-px bg-[rgba(195,198,214,0.2)] font-inter text-xs">
              <div className="bg-[#f8fafc] p-3 font-semibold text-[#737685]">Time</div>
              {weekLabels.map((d) => (
                <div key={d} className="bg-[#f8fafc] p-3 text-center font-semibold text-[#737685]">
                  {d}
                </div>
              ))}
              {timeSlots.map((t) => (
                <Fragment key={t}>
                  <div className="bg-white p-3 text-[#94a3b8]">{t}</div>
                  {weekLabels.map((_, colIdx) => (
                    <div key={`${t}-${colIdx}`} className="min-h-[72px] bg-white p-1">
                      {t === '10:00' && colIdx === 2 ? (
                        <div className="h-full rounded-md bg-[#003d9b]/90 p-2 text-[10px] font-semibold leading-tight text-white">
                          All-hands
                        </div>
                      ) : null}
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </div>
    </>
  )
}
