import { debt } from '../data/budget'
import { BudgetChart, Fade, KpiCard, PageHero } from '../components/ui'

export const BudgetDebtPage = () => <Fade><div className='space-y-4'><PageHero title='Государственный долг' description='Структура долга и документы долговой политики.' /><div className='grid gap-3 md:grid-cols-2'>{debt.map((k) => <KpiCard key={k.label} {...k} />)}</div><BudgetChart title='Структура государственного долга' /></div></Fade>
