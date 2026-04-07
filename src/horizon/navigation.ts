import type { HorizonAssetKey } from './assets'

export const paths = {
  home: '/',
  timesheets: '/timesheets',
  shifts: '/shifts',
  staff: '/staff',
  reports: '/reports',
  schedule: '/schedule',
  settings: '/settings',
} as const

export type NavItem = {
  to: string
  label: string
  icon: HorizonAssetKey
  end?: boolean
}

export const mainNav: NavItem[] = [
  { to: paths.home, label: 'Dashboard', icon: 'navDashboard', end: true },
  { to: paths.timesheets, label: 'Timesheets', icon: 'navTimesheets' },
  { to: paths.shifts, label: 'Shift Management', icon: 'navShift' },
  { to: paths.staff, label: 'Staff Directory', icon: 'navStaff' },
  { to: paths.reports, label: 'Reports', icon: 'navReports' },
  { to: paths.schedule, label: 'Schedule', icon: 'navSchedule' },
]

const searchByPath: Record<string, string> = {
  [paths.home]: 'Search operations, staff, or logs...',
  [paths.timesheets]: 'Search timesheets, staff, or projects...',
  [paths.shifts]: 'Search staff or schedules...',
  [paths.staff]: 'Search staff members...',
  [paths.reports]: 'Search reports or departments...',
  [paths.schedule]: 'Search shifts or locations...',
  [paths.settings]: 'Search settings...',
}

export function searchPlaceholderForPath(pathname: string): string {
  return searchByPath[pathname] ?? searchByPath[paths.home]
}
