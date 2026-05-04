import { Link } from 'react-router-dom'
import { Fade } from '../components/ui'
import { kpis } from '../data/budget'
import { news } from '../data/news'

const scenarios = [
  { title: 'Граждане', text: 'Льготы, инициативное бюджетирование, обращения, открытые данные и «Бюджет для граждан».', href: '/open-budget' },
  { title: 'Организации', text: 'Нормативные документы, отчетность, методические материалы и реестр публикаций.', href: '/documents' },
  { title: 'Муниципалитеты', text: 'Межбюджетные трансферты, мониторинг исполнения, соглашения и аналитические отчеты.', href: '/budget' },
  { title: 'Получатели бюджетных средств', text: 'Работа с лимитами, кассовым исполнением, регламентами и сервисами сопровождения.', href: '/budget/execution' }
]

const quickServices = [
  { title: 'Реестр документов', text: 'НПА, приказы, письма, архив и фильтрация по категориям.', href: '/documents' },
  { title: 'Исполнение бюджета', text: 'Квартальные отчеты, динамика и контроль ключевых показателей.', href: '/budget/execution' },
  { title: 'Бюджет для граждан', text: 'Объяснение бюджета простым языком, инфографика и презентации.', href: '/open-budget' },
  { title: 'Открытый бюджет', text: 'Документы, наборы данных, паспортные карточки и публикации.', href: '/open-budget' }
]

const docs = [
  { title: 'Закон об областном бюджете', meta: 'PDF / DOCX / XLSX', href: '/budget' },
  { title: 'Бюджет для граждан', meta: 'HTML / PDF', href: '/open-budget' },
  { title: 'Открытые данные', meta: 'CSV / JSON / XLSX', href: '/open-budget' },
  { title: 'Методические материалы', meta: 'Письма / рекомендации', href: '/documents' }
]

export const HomePage = () => (
  <Fade>
    <div className='space-y-6 home-rich'>
      <form className='search-hero' role='search'>
        <input placeholder='Поиск по документам, новостям, контактам, данным и разделам сайта' />
        <button type='submit' className='primary-btn'>Найти</button>
      </form>

      <div className='hero-grid'>
        <section className='hero-main'>
          <p className='hero-kicker'>МИНИСТЕРСТВО ФИНАНСОВ ЛИПЕЦКОЙ ОБЛАСТИ</p>
          <h1>Открытое управление общественными финансами</h1>
          <p className='hero-text'>Главные сценарии вынесены на первый экран: вход в электронный бюджет, документы, бюджет для граждан, аналитика и новости.</p>
          <div className='hero-actions'>
            <div className='webbudget-login'>
              <button className='primary-btn' type='button'>Вход в «Электронный бюджет»</button>
              <div className='webbudget-login-menu'>
                <a href='#'><strong>Личный кабинет</strong><span>Доступ для сотрудников и ответственных исполнителей.</span></a>
                <a href='#'><strong>Инструкции</strong><span>Регламенты, шаблоны и руководства пользователей.</span></a>
              </div>
            </div>
            <Link className='ghost-btn' to='/open-budget'>Бюджет для граждан</Link>
            <Link className='ghost-btn' to='/news'>Новости и публикации</Link>
          </div>
        </section>
        <section>
          <div className='section-head'><h2>Новости</h2><Link to='/news'>Все новости</Link></div>
          <div className='space-y-3'>
            {news.slice(0, 3).map((n) => (
              <article key={n.id} className='news-row'>
                <p className='news-meta'>{n.date} · {n.category}</p>
                <h3>{n.title}</h3>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section>
        <div className='section-head'><h2>Клиентские сценарии</h2></div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {scenarios.map((s) => <Link key={s.title} className='rich-card' to={s.href}><h3>{s.title}</h3><p>{s.text}</p></Link>)}
        </div>
      </section>

      <section>
        <div className='section-head'><h2>Быстрые сервисы</h2></div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {quickServices.map((s) => <Link key={s.title} className='rich-card' to={s.href}><h3>{s.title}</h3><p>{s.text}</p></Link>)}
        </div>
      </section>

      <section>
        <div className='section-head'><h2>KPI / бюджетные показатели</h2></div>
        <div className='grid gap-4 md:grid-cols-3'>
          {kpis.map((k) => <article key={k.label} className='rich-card'><p>{k.label}</p><strong>{k.value}</strong></article>)}
        </div>
      </section>

      <div className='grid gap-6 lg:grid-cols-2'>
        <section>
          <div className='section-head'><h2>Бюджет для граждан</h2></div>
          <p className='text-slate-600'>Пояснения простым языком: структура доходов и расходов, меры поддержки, жизненные ситуации, термины и визуализация.</p>
          <Link to='/open-budget' className='mini-btn mt-4'>Открыть раздел</Link>
        </section>
        <section>
          <div className='section-head'><h2>Открытый бюджет</h2></div>
          <p className='text-slate-600'>Публикация документов, наборов открытых данных, общественное участие и контроль актуальности материалов.</p>
          <Link to='/open-budget' className='mini-btn mt-4'>Перейти</Link>
        </section>
      </div>

      <section>
        <div className='section-head'><h2>Документы и полезные разделы</h2></div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {docs.map((d) => <Link key={d.title} to={d.href} className='rich-card'><h3>{d.title}</h3><p>{d.meta}</p></Link>)}
        </div>
      </section>
    </div>
  </Fade>
)
