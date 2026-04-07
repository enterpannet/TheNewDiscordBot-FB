import { horizonAssets as a } from '../../assets'

export type DepartmentKind = 'engineering' | 'management' | 'design' | 'support'

const deptStyles: Record<DepartmentKind, string> = {
  engineering: 'bg-[#ffdbcf] text-[#380d00]',
  management: 'bg-[#d6e3fb] text-[#3b485a]',
  design: 'bg-[#e1e3e4] text-[#434654]',
  support: 'bg-[#ffc6b2] text-[#812800]',
}

const presenceColor: Record<'online' | 'away' | 'offline', string> = {
  online: 'bg-[#23a55a]',
  away: 'bg-[#f0b232]',
  offline: 'bg-[#80848e]',
}

export function StaffMemberCard({
  name,
  title,
  department,
  departmentKind,
  discordId,
  timezone,
  avatarSrc,
  presence,
}: {
  name: string
  title: string
  department: string
  departmentKind: DepartmentKind
  discordId: string
  timezone: string
  avatarSrc: string
  presence: keyof typeof presenceColor
}) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-[0px_12px_32px_0px_rgba(25,28,29,0.06)]">
      <div className="flex items-start justify-between gap-2">
        <div className="relative">
          <div className="relative size-20 overflow-hidden rounded-2xl">
            <img src={avatarSrc} alt="" className="size-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-white">
            <span className={`size-4 rounded-full border-2 border-white ${presenceColor[presence]}`} />
          </div>
        </div>
        <span
          className={`rounded-full px-3 py-0.5 text-right font-inter text-[10px] font-semibold uppercase ${deptStyles[departmentKind]}`}
        >
          {department}
        </span>
      </div>
      <div>
        <h3 className="font-manrope text-xl font-bold text-[#191c1d]">{name}</h3>
        <p className="font-inter mt-1 text-sm font-medium text-[#434654]">{title}</p>
      </div>
      <div className="border-t border-[rgba(195,198,214,0.2)] pt-6">
        <div className="flex justify-between gap-2 text-xs">
          <span className="font-inter font-medium text-[#434654]">Discord ID</span>
          <span className="font-mono text-[#191c1d]">{discordId}</span>
        </div>
        <div className="mt-3 flex justify-between gap-2 text-xs">
          <span className="font-inter font-medium text-[#434654]">Timezone</span>
          <span className="font-inter text-[#191c1d]">{timezone}</span>
        </div>
      </div>
      <button
        type="button"
        className="font-inter w-full rounded-xl bg-[#f3f4f5] py-3 text-sm font-semibold text-[#003d9b]"
      >
        View Profile
      </button>
    </div>
  )
}

export function InviteStaffCard() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[rgba(195,198,214,0.4)] p-8 text-center">
      <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#edeeef]">
        <img src={a.staffInviteGraphic} alt="" className="h-5 w-7" />
      </div>
      <h3 className="font-manrope text-lg font-bold text-[#191c1d]">Invite Staff</h3>
      <p className="font-inter mt-2 max-w-[14rem] text-xs text-[#434654]">
        Manually add members or share the Discord invite link.
      </p>
    </div>
  )
}
