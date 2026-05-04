import { Link } from 'react-router-dom'
import { Fade } from '../components/ui'
import { kpis } from '../data/budget'
import { news } from '../data/news'

const roles = [
  { title: 'Гражданин', text: 'Понять бюджет, меры поддержки и направить обращение.', href: '/open-budget' },
  { title: 'Сотрудник учреждения', text: 'Войти в веб-бюджет, скачать инструкции и компоненты.', href: '/budget/execution' },
  { title: 'Учреждение', text: 'Найти документы, регламенты и ответственных специалистов.', href: '/documents' },
  { title: 'Аналитик', text: 'Посмотреть исполнение, доходы и открытые данные.', href: '/budget' }
]

const quickServices = [
  { num: '01', title: 'Работа с веб-бюджетом', text: 'Вход, настройка, инструкции и поддержка пользователей.', href: '/budget/execution' },
  { num: '02', title: 'Реестр документов', text: 'НПА, приказы, письма, архив и фильтрация по категориям.', href: '/documents' },
  { num: '03', title: 'Бюджетная аналитика', text: 'Исполнение бюджета, доходы и данные по муниципалитетам.', href: '/budget/execution' },
  { num: '04', title: 'Бюджет для граждан', text: 'Краткая инфографика, меры поддержки и полный PDF.', href: '/open-budget' }
]

const docs = [
  { title: 'Закон об областном бюджете', meta: 'PDF / DOCX / XLSX', href: '/budget' },
  { title: 'Бюджет для граждан', meta: 'HTML / PDF', href: '/open-budget' },
  { title: 'Открытые данные', meta: 'CSV / JSON / XLSX', href: '/open-budget' },
  { title: 'Методические материалы', meta: 'Письма / рекомендации', href: '/documents' },
  { title: 'Исполнение бюджета', meta: 'Квартальные отчеты', href: '/budget/execution' },
  { title: 'Госпрограммы и трансферты', meta: 'Паспорта и мониторинг', href: '/budget' }
]

export const HomePage = () => (
  <Fade>
    <div className='space-y-6 home-rich'>
      <form className='search-hero' role='search'>
        <input placeholder='Поиск по документам, новостям, контактам, данным и разделам сайта' />
        <button type='submit' className='primary-btn'>Найти</button>
      </form>

      <div className='hero-grid'>
        <section className='hero' id='web-budget'>
          <div className='eyebrow'>Единая точка входа в финансовые сервисы региона</div>
          <h1>Открытое управление общественными финансами</h1>
          <p className='hero-text'>Главные сценарии вынесены на первый экран: вход в электронный бюджет, документы, бюджет для граждан, аналитика и новости.</p>
          <div className='hero-actions'>
            <div className='webbudget-entry webbudget-entry-hero'>
              <button className='primary-btn' type='button'>Вход в «Электронный бюджет»</button>
              <div className='webbudget-menu'>
                <a href='#'><small>Вход</small><strong>Личный кабинет</strong><span>Доступ для сотрудников и ответственных исполнителей.</span></a>
                <a href='#'><small>Поддержка</small><strong>Инструкции и шаблоны</strong><span>Регламенты, шаблоны и руководства пользователей.</span></a>
              </div>
            </div>
            <Link className='ghost-btn' to='/open-budget'>Я гражданин</Link>
            <Link className='ghost-btn' to='/news'>Новости и публикации</Link>
          </div>
        </section>

        <aside className='role-panel' aria-label='Выбор роли пользователя'>
          <div className='role-grid'>
            {roles.map((role) => (
              <Link key={role.title} className='role-card' to={role.href}>
                <b>{role.title}</b>
                <span>{role.text}</span>
              </Link>
            ))}
          </div>
          <div className='status-box'>
            <strong>Система работает штатно</strong>
            <span>Обновление статусов, публикаций и справочников — в рабочем режиме.</span>
          </div>
          <div className='news-strip'>
            {news.slice(0, 3).map((n) => (
              <article key={n.id} className='news-card'>
                <div className='news-meta'>{n.date} · {n.category}</div>
                <h3>{n.title}</h3>
              </article>
            ))}
          </div>
        </aside>
      </div>

      <section>
        <div className='section-head'><h2>Быстрые сервисы</h2></div>
        <div className='services-grid'>
          {quickServices.map((s) => (
            <Link key={s.title} className='service-card' to={s.href}>
              <div className='service-icon'>{s.num}</div>
              <strong>{s.title}</strong>
              <span>{s.text}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className='section-head'><h2>KPI / бюджетные показатели</h2></div>
        <div className='dashboard-grid'>
          {kpis.slice(0, 4).map((k) => <article key={k.label} className='metric'><p>{k.label}</p><strong>{k.value}</strong></article>)}
        </div>
      </section>

      <section className='citizen-budget'>
        <div className='citizen-hero'>
          <div>
            <div className='eyebrow'>Для жителей Липецкой области</div>
            <h2>Бюджет для граждан</h2>
            <p>Объяснение бюджета простым языком: структура доходов и расходов, меры поддержки, жизненные ситуации, термины и визуализация.</p>
            <div className='hero-actions'>
              <Link className='primary-btn' to='/open-budget'>Выбрать жизненную ситуацию</Link>
              <Link className='ghost-btn' to='/open-budget'>PDF-презентация</Link>
            </div>
          </div>
          <div className='citizen-kpi-grid'>
            {kpis.slice(0, 4).map((k) => <article key={`citizen-${k.label}`} className='metric'><p>{k.label}</p><strong>{k.value}</strong></article>)}
          </div>
        </div>
        <div className='budget-story-grid'>
          <article className='rich-card'><h3>Доходы</h3><p>Источники формирования бюджета, динамика поступлений и структура налоговых доходов.</p></article>
          <article className='rich-card'><h3>Расходы</h3><p>Приоритеты финансирования: образование, здравоохранение, социальная поддержка и инфраструктура.</p></article>
        </div>
        <div className='scenario-grid'>
          {roles.map((r) => <Link key={`s-${r.title}`} to={r.href} className='service-card'><strong>{r.title}</strong><span>{r.text}</span></Link>)}
        </div>
      </section>

      <section>
        <div className='section-head'><h2>Документы и полезные разделы</h2></div>
        <div className='doc-link-grid'>
          {docs.map((d) => <Link key={d.title} to={d.href} className='doc-link-card'><strong>{d.title}</strong><span>{d.meta}</span></Link>)}
        </div>
      </section>
    </div>
  </Fade>
)
