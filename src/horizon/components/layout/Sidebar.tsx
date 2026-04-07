import { NavLink } from 'react-router-dom'
import { horizonAssets as a } from '../../assets'
import { mainNav, paths } from '../../navigation'

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-20 flex h-screen w-64 flex-col justify-between border-r border-[rgba(195,198,214,0.12)] bg-[#f8fafc] py-6">
      <div className="px-6 pb-8">
        <div className="flex items-center gap-3">
          <div
            className="flex h-8 w-[31px] items-center justify-center rounded-lg"
            style={{
              backgroundImage: 'linear-gradient(134deg, rgb(0, 61, 155) 0%, rgb(0, 82, 204) 100%)',
            }}
          >
            <img src={a.brandBolt} alt="" className="h-[10.5px] w-[6.5px]" />
          </div>
          <div>
            <p className="font-manrope text-xl font-bold leading-7 tracking-tight text-[#1d4ed8]">
              Horizon
              <br />
              Workforce
            </p>
            <p className="font-manrope text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">
              Admin Portal
            </p>
          </div>
        </div>
      </div>
      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3">
        {mainNav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              [
                'flex items-center gap-3 rounded-xl py-3 pl-3 pr-4 font-manrope text-sm transition',
                isActive
                  ? 'border-r-4 border-[#1d4ed8] bg-[rgba(239,246,255,0.5)] font-bold text-[#1d4ed8]'
                  : 'font-medium text-[#64748b] hover:bg-[rgba(241,245,249,0.8)]',
              ].join(' ')
            }
          >
            <img src={a[item.icon]} alt="" className="size-[18px] shrink-0 opacity-90" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="flex flex-col gap-4 px-4 pt-2">
        <NavLink
          to={paths.settings}
          className={({ isActive }) =>
            [
              'flex items-center gap-3 rounded-xl p-3 font-manrope text-sm',
              isActive
                ? 'bg-[rgba(239,246,255,0.5)] font-bold text-[#1d4ed8]'
                : 'font-medium text-[#64748b] hover:bg-[#f1f5f9]',
            ].join(' ')
          }
        >
          <img src={a.navSettings} alt="" className="h-5 w-5 shrink-0" />
          Settings
        </NavLink>
        <div className="flex items-center gap-3 rounded-xl bg-[#f1f5f9] px-3 py-4">
          <div className="relative size-10 shrink-0 overflow-hidden rounded-full shadow-sm">
            <img src={a.userProfile} alt="" className="size-full object-cover" />
          </div>
          <div className="min-w-0">
            <p className="font-manrope text-xs font-bold text-[#191c1d]">Alex Sterling</p>
            <p className="font-manrope text-[10px] text-[#64748b]">System Admin</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
