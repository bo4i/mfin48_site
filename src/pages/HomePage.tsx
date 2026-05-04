import { news } from '../data/news'
import { kpis } from '../data/budget'
import { NewsCard } from '../components/domain'
import { Button, Fade, KpiCard, PageHero, SectionHeader } from '../components/ui'

export const HomePage = () => (
  <Fade>
    <div className='space-y-6'>
      <PageHero title='Министерство финансов Липецкой области' description='Единый цифровой портал с сервисами, документами и бюджетной аналитикой.' />
      <SectionHeader title='Быстрые сервисы' />
      <div className='grid gap-3 md:grid-cols-3'>{['Документы', 'Открытый бюджет', 'Обращения'].map((s) => <Button key={s}>{s}</Button>)}</div>
      <SectionHeader title='Ключевые показатели' />
      <div className='grid gap-3 md:grid-cols-3'>{kpis.map((k) => <KpiCard key={k.label} {...k} />)}</div>
      <SectionHeader title='Новости' />
      <div className='grid gap-3 md:grid-cols-3'>{news.slice(0, 3).map((n) => <NewsCard key={n.id} n={n} />)}</div>
    </div>
  </Fade>
)
