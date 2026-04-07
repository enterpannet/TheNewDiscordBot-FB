import { horizonAssets as a } from '../assets'
import { Button } from '../components/ui/Button'
import { PageHeader } from '../components/ui/PageHeader'
import { Pagination } from '../components/ui/Pagination'
import { InviteStaffCard, StaffMemberCard } from '../components/staff/StaffMemberCard'

const staff = [
  {
    name: 'Sarah Chen',
    title: 'Lead Software Architect',
    department: 'Engineering',
    departmentKind: 'engineering' as const,
    discordId: 'sarah_dev#9921',
    timezone: 'PST (UTC-8)',
    avatarSrc: a.staffSarah,
    presence: 'online' as const,
  },
  {
    name: 'Marcus Thorne',
    title: 'Product Director',
    department: 'Management',
    departmentKind: 'management' as const,
    discordId: 'm.thorne#0014',
    timezone: 'EST (UTC-5)',
    avatarSrc: a.staffMarcus,
    presence: 'away' as const,
  },
  {
    name: 'Elena Rodriguez',
    title: 'Senior Product Designer',
    department: 'Design',
    departmentKind: 'design' as const,
    discordId: 'elena_ux#4482',
    timezone: 'CET (UTC+1)',
    avatarSrc: a.staffElena,
    presence: 'online' as const,
  },
  {
    name: 'Julian Voss',
    title: 'Backend Developer',
    department: 'Engineering',
    departmentKind: 'engineering' as const,
    discordId: 'jvoss#8831',
    timezone: 'GMT (UTC+0)',
    avatarSrc: a.staffJulian,
    presence: 'offline' as const,
  },
  {
    name: 'Amara Okafor',
    title: 'Customer Success Lead',
    department: 'Support',
    departmentKind: 'support' as const,
    discordId: 'amara_ops#1222',
    timezone: 'WAT (UTC+1)',
    avatarSrc: a.staffAmara,
    presence: 'online' as const,
  },
  {
    name: 'Liam Davies',
    title: 'DevOps Engineer',
    department: 'Engineering',
    departmentKind: 'engineering' as const,
    discordId: 'l_davies#5677',
    timezone: 'GMT (UTC+0)',
    avatarSrc: a.staffLiam,
    presence: 'online' as const,
  },
]

export function StaffDirectoryPage() {
  return (
    <div className="relative">
      <PageHeader
        title="Staff Directory"
        subtitle="Manage your distributed workforce, monitor real-time availability, and coordinate department assignments through our Discord-synced ecosystem."
        actions={
          <>
            <Button variant="secondary" className="gap-2 px-6 py-3">
              <img src={a.staffFilterBtn} alt="" className="h-2.5 w-4" />
              Filters
            </Button>
            <Button variant="primary" className="gap-3 px-8 py-3">
              <img src={a.staffSyncDiscord} alt="" className="size-[13px]" />
              <span className="text-center leading-tight">
                Sync with
                <br />
                Discord
              </span>
            </Button>
          </>
        }
      />

      <div className="mb-8 grid gap-6 lg:grid-cols-12">
        <div className="rounded-3xl bg-[#f3f4f5] p-6 lg:col-span-4">
          <p className="font-inter text-[10px] font-semibold uppercase tracking-[2px] text-[#003d9b]">
            Total Workforce
          </p>
          <p className="font-manrope mt-2 text-5xl font-extrabold tracking-tight text-[#191c1d]">142</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#e1e3e4] px-3 py-1 font-inter text-[11px] font-semibold text-[#434654]">
              98 ONLINE
            </span>
            <span className="rounded-full bg-[#e1e3e4] px-3 py-1 font-inter text-[11px] font-semibold text-[#434654]">
              44 AWAY
            </span>
          </div>
        </div>
        <div className="rounded-3xl bg-[#f3f4f5] p-6 lg:col-span-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="font-inter text-xs font-semibold uppercase text-[#434654]">Department</p>
              <div className="relative mt-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl bg-white px-4 py-2.5 text-left font-inter text-sm text-[#191c1d] shadow-sm"
                >
                  All Departments
                  <img src={a.staffDropdownChevron} alt="" className="size-5 opacity-60" />
                </button>
              </div>
            </div>
            <div>
              <p className="font-inter text-xs font-semibold uppercase text-[#434654]">Role Type</p>
              <div className="relative mt-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl bg-white px-4 py-2.5 text-left font-inter text-sm text-[#191c1d] shadow-sm"
                >
                  All Roles
                  <img src={a.staffDropdownChevron} alt="" className="size-5 opacity-60" />
                </button>
              </div>
            </div>
            <div>
              <p className="font-inter text-xs font-semibold uppercase text-[#434654]">Presence</p>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm"
                  aria-label="Grid view"
                >
                  <img src={a.staffGridView} alt="" className="size-[18px]" />
                </button>
                <button
                  type="button"
                  className="flex size-10 items-center justify-center rounded-full"
                  aria-label="List view"
                >
                  <img src={a.staffListView} alt="" className="h-4 w-[18px] opacity-60" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {staff.map((s) => (
          <StaffMemberCard key={s.name} {...s} />
        ))}
        <InviteStaffCard />
      </div>

      <Pagination showing={6} total={142} page={1} totalPages={24} />

      <div className="fixed bottom-8 right-8 z-30 max-w-sm rounded-2xl bg-[#2e3132] px-6 py-4 shadow-2xl">
        <div className="flex items-center gap-3">
          <span className="relative flex size-3">
            <span className="absolute inset-0 animate-pulse rounded-full bg-[#4ade80] opacity-75" />
            <span className="relative size-3 rounded-full bg-[#22c55e]" />
          </span>
          <p className="font-inter text-sm font-medium text-[#f0f1f2]">
            Discord Sync Active • Last updated 2m ago
          </p>
        </div>
      </div>
    </div>
  )
}
