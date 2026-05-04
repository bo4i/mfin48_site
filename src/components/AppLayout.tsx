import { AnimatePresence, motion } from 'framer-motion'
import { ChevronUp, Menu } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { navigation } from '../data/navigation'
import { routeTitles } from '../utils/routes'

export const AppLayout = () => {
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(false)
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)
  const crumbs = segments.map((_, i) => '/' + segments.slice(0, i + 1).join('/'))

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top_left,_#dbeafe_0,_transparent_35%),linear-gradient(#fff,#f1f5f9)]'>
      <div className='bg-slate-950 px-4 py-2 text-xs text-white'>Официальный портал МИНФИН48</div>
      <header className='sticky top-0 z-20 border-b border-white/60 bg-white/80 backdrop-blur-xl'>
        <div className='mx-auto flex max-w-6xl items-center justify-between p-3'>
          <Link to='/' className='font-black text-blue-900'>МИНФИН48</Link>
          <button className='md:hidden' onClick={() => setOpen(!open)}><Menu /></button>
          <nav className='hidden items-center gap-2 md:flex'>
            {navigation.slice(0, 5).map((n) => <NavLink key={n.path} to={n.path} className='rounded-full px-3 py-2 text-sm font-semibold hover:bg-blue-50'>{n.label}</NavLink>)}
            <div onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)} className='relative'>
              <button className='rounded-full px-3 py-2 text-sm font-semibold hover:bg-blue-50'>Разделы</button>
              <AnimatePresence>{mega && <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:6}} className='absolute right-0 top-10 grid w-80 grid-cols-2 gap-2 rounded-3xl border bg-white p-3 shadow-2xl'>{navigation.slice(5).map((n)=><NavLink key={n.path} to={n.path} className='rounded-2xl p-2 text-sm hover:bg-slate-50'>{n.label}</NavLink>)}</motion.div>}</AnimatePresence>
            </div>
          </nav>
        </div>
      </header>
      <div className='mx-auto max-w-6xl p-4'>
        <div className='mb-4 text-sm text-slate-500'><Link to='/'>Главная</Link>{crumbs.map((c) => <span key={c}> / {routeTitles[c]}</span>)}</div>
        <AnimatePresence mode='wait'><motion.div key={location.pathname} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:0.25}}><Outlet /></motion.div></AnimatePresence>
      </div>
      <footer className='mt-8 bg-slate-900 p-6 text-white'>© 2026 МИНФИН48</footer>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='fixed bottom-6 right-6 rounded-full bg-blue-700 p-3 text-white'><ChevronUp size={18} /></button>
    </div>
  )
}
