import { kpis } from '../data/budget'
import { BudgetChart, Fade, KpiCard, PageHero } from '../components/ui'

export const BudgetPage = () => <Fade><div className='space-y-4'><PageHero title='Бюджет' description='Закон о бюджете и ключевые показатели.' /><div className='grid gap-3 md:grid-cols-3'>{kpis.map((k) => <KpiCard key={k.label} {...k} />)}</div><BudgetChart title='Инфографика доходов и расходов' /></div></Fade>
