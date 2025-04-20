import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="h-full w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}
