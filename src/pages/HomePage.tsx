import { Link } from 'react-router-dom'
import { budgetBlocks, quickServices } from '../data/content'
import { kpis } from '../data/budget'
import { news } from '../data/news'
import { NewsCard } from '../components/domain'
import { Card, Fade, KpiCard, PageHero, SectionHeader } from '../components/ui'

export const HomePage = () => <Fade><div className='space-y-8'><PageHero title='Министерство финансов Липецкой области' description='Прозрачное управление общественными финансами: от закона о бюджете до открытой аналитики исполнения.' /><SectionHeader title='Быстрые сервисы' subtitle='Ключевые цифровые разделы портала' /><div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>{quickServices.map((s) => <Link key={s.href} to={s.href}><Card><h3 className='font-bold'>{s.title}</h3><p className='text-sm text-slate-600'>{s.description}</p></Card></Link>)}</div><SectionHeader title='KPI финансовой системы' /><div className='grid gap-4 md:grid-cols-3'>{kpis.map((k) => <KpiCard key={k.label} {...k} />)}</div><SectionHeader title='Бюджетные блоки' /><div className='grid gap-4 md:grid-cols-3'>{budgetBlocks.map((b) => <Card key={b.title}><h3 className='font-bold'>{b.title}</h3><p className='text-sm text-slate-600'>{b.text}</p></Card>)}</div><SectionHeader title='Новости' /><div className='grid gap-4 md:grid-cols-3'>{news.slice(0, 3).map((n) => <NewsCard key={n.id} n={n} />)}</div></div></Fade>
