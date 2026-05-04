import { ChevronUp, Menu } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { navigation } from '../data/navigation'
import { routeTitles } from '../utils/routes'

export const AppLayout = () => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)
  const crumbs = segments.map((_, i) => '/' + segments.slice(0, i + 1).join('/'))

  return (
    <div className='min-h-screen'>
      <div className='bg-slate-900 px-4 py-2 text-xs text-white'>Официальный портал МИНФИН48</div>
      <header className='sticky top-0 z-20 border-b bg-white'>
        <div className='mx-auto flex max-w-6xl items-center justify-between p-3'>
          <Link to='/' className='font-bold'>МИНФИН48</Link>
          <button className='md:hidden' onClick={() => setOpen(!open)}><Menu /></button>
          <nav className='hidden gap-3 md:flex'>
            {navigation.slice(0, 6).map((n) => (
              <NavLink key={n.path} to={n.path} className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-slate-700')}>
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
        {open && (
          <div className='grid gap-2 border-t p-3 md:hidden'>
            {navigation.map((n) => (
              <NavLink key={n.path} to={n.path} onClick={() => setOpen(false)}>
                {n.label}
              </NavLink>
            ))}
          </div>
        )}
        <div className='hidden border-t bg-slate-50 md:block'>
          <div className='mx-auto flex max-w-6xl gap-4 overflow-auto p-2 text-sm'>
            {navigation.map((n) => (
              <NavLink key={n.path} to={n.path} className={({ isActive }) => (isActive ? 'font-semibold text-blue-700' : 'text-slate-600')}>
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>
      <div className='mx-auto max-w-6xl p-4'>
        <div className='mb-4 text-sm text-slate-500'>
          <Link to='/'>Главная</Link>
          {crumbs.map((c) => <span key={c}> / {routeTitles[c]}</span>)}
        </div>
        <Outlet />
      </div>
      <footer className='mt-8 bg-slate-900 p-6 text-white'>© 2026 МИНФИН48</footer>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='fixed bottom-6 right-6 rounded-full bg-blue-700 p-3 text-white'>
        <ChevronUp size={18} />
      </button>
    </div>
  )
}
