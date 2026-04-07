import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './horizon/components/layout/AppShell'
import { paths } from './horizon/navigation'
import { DashboardPage } from './horizon/pages/DashboardPage'
import { StaffDirectoryPage } from './horizon/pages/StaffDirectoryPage'
import { ShiftManagementPage } from './horizon/pages/ShiftManagementPage'
import { TimesheetsPage } from './horizon/pages/TimesheetsPage'
import { ReportsPage } from './horizon/pages/ReportsPage'
import { SchedulePage } from './horizon/pages/SchedulePage'
import { SettingsPage } from './horizon/pages/SettingsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path={paths.home} element={<DashboardPage />} />
          <Route path={paths.timesheets} element={<TimesheetsPage />} />
          <Route path={paths.shifts} element={<ShiftManagementPage />} />
          <Route path={paths.staff} element={<StaffDirectoryPage />} />
          <Route path={paths.reports} element={<ReportsPage />} />
          <Route path={paths.schedule} element={<SchedulePage />} />
          <Route path={paths.settings} element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<Navigate to={paths.home} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
