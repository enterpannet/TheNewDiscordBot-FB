import { Outlet, useLocation } from 'react-router-dom'
import { horizonAssets as a } from '../../assets'
import { paths, searchPlaceholderForPath } from '../../navigation'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

export function AppShell() {
  const { pathname } = useLocation()
  const placeholder = searchPlaceholderForPath(pathname)
  const showFab = pathname === paths.home

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-inter text-[#191c1d]">
      <Sidebar />
      <TopBar searchPlaceholder={placeholder} />
      <main className="ml-64 min-h-screen pt-16">
        <div className="px-6 pb-16 pt-10 md:px-8">
          <Outlet />
        </div>
      </main>
      {showFab ? (
        <button
          type="button"
          title="Quick Actions"
          className="fixed bottom-10 right-10 z-40 flex size-16 items-center justify-center rounded-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
          style={{
            backgroundImage: 'linear-gradient(45deg, rgb(0, 61, 155) 0%, rgb(0, 82, 204) 100%)',
          }}
        >
          <img src={a.fabBolt} alt="" className="h-[25px] w-[22.5px]" />
        </button>
      ) : null}
    </div>
  )
}
