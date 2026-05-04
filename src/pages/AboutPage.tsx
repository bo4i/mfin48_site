import { aboutFacts } from '../data/content'
import { Card, Fade, PageHero, SectionHeader } from '../components/ui'

export const AboutPage = () => <Fade><div className='space-y-6'><PageHero title='О министерстве' description='Функции, полномочия и официальные сведения о деятельности министерства.' /><SectionHeader title='Основные направления работы' /><div className='grid gap-4 md:grid-cols-3'>{aboutFacts.map((f) => <Card key={f}><p className='text-slate-700'>{f}</p></Card>)}</div></div></Fade>
