import { AnimatePresence, motion } from 'framer-motion'
import { ChevronUp, Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { routeTitles } from '../utils/routes'

const mainLinks = [
  { label: 'О министерстве', path: '/about' },
  { label: 'Руководство', path: '/leadership' },
  { label: 'Структура', path: '/structure' },
  { label: 'Документы', path: '/documents' },
  { label: 'Новости', path: '/news' },
  { label: 'Контакты', path: '/contacts' },
  { label: 'Обращения граждан', path: '/appeals' }
]

const megaCards = [
  { label: 'Открытость', title: 'Открытый бюджет', text: 'Документы, данные, визуализация и общественное участие.', path: '/open-budget' },
  { label: 'Процесс', title: 'Бюджетный процесс', text: 'Этапы подготовки, рассмотрения, утверждения и исполнения бюджета.', path: '/budget' },
  { label: 'Отчеты', title: 'Исполнение бюджета', text: 'Ежемесячные, квартальные и годовые отчеты с выгрузками данных.', path: '/budget/execution' },
  { label: 'Устойчивость', title: 'Государственный долг', text: 'Долговая политика, структура долга, динамика и документы.', path: '/budget/debt' }
]

export const AppLayout = () => {
  const [open, setOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [budgetOpen, setBudgetOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)
  const crumbs = segments.map((_, i) => '/' + segments.slice(0, i + 1).join('/'))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMegaOpen(false)
    setBudgetOpen(false)
  }, [location.pathname])

  const isBudgetActive = useMemo(() => ['/budget', '/budget/execution', '/budget/debt', '/open-budget'].some((p) => location.pathname === p), [location.pathname])

  return (
    <div className='site-shell min-h-screen'>
      <div className='topbar'>
        <div className='topbar-inner'>
          <span>Официальный портал Министерства финансов Липецкой области</span>
          <div className='topbar-links'>
            <a href='#'>Версия для слабовидящих</a>
            <a href='#'>Карта сайта</a>
          </div>
        </div>
      </div>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className='header-inner'>
          <Link to='/' className='logo-link'>МИНФИН48</Link>
          <button className='mobile-menu-toggle md:hidden' onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls='main-nav'>{open ? <X size={18}/> : <Menu size={18}/>}</button>
          <nav id='main-nav' className={`site-nav ${open ? 'open' : ''}`}>
            {mainLinks.map((n) => <NavLink key={n.path} to={n.path} className={({isActive})=>`nav-pill ${isActive ? 'active' : ''}`}>{n.label}</NavLink>)}
            <div className={`mega-item ${megaOpen ? 'open' : ''}`} onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
              <button className={`mega-trigger ${isBudgetActive ? 'active' : ''}`} onClick={() => setMegaOpen((v)=>!v)} aria-expanded={megaOpen}>Бюджет ▾</button>
              <div className='mega-panel'>
                {megaCards.map((card)=><NavLink key={card.path} to={card.path} className='mega-card'><small>{card.label}</small><strong>{card.title}</strong><span>{card.text}</span></NavLink>)}
              </div>
            </div>
          </nav>
          <div className='header-actions'>
            <div className={`webbudget-entry ${budgetOpen ? 'open' : ''}`} onMouseEnter={() => setBudgetOpen(true)} onMouseLeave={() => setBudgetOpen(false)}>
              <button className={`nav-pill webbudget-trigger ${location.pathname === '/open-budget' ? 'active': ''}`} onClick={() => setBudgetOpen((v)=>!v)} aria-expanded={budgetOpen}>Электронный бюджет</button>
              <div className='webbudget-menu'>
                <NavLink to='/open-budget'><small>Система</small><strong>Открытый бюджет</strong><span>Данные и визуализации для граждан.</span></NavLink>
                <NavLink to='/budget/execution'><small>Отчеты</small><strong>Исполнение бюджета</strong><span>Квартальные и годовые отчеты исполнения.</span></NavLink>
              </div>
            </div>
          </div>
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
