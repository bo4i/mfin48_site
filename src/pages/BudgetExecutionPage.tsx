import { BudgetChart, Fade, PageHero } from '../components/ui'

export const BudgetExecutionPage = () => <Fade><div className='space-y-4'><PageHero title='Исполнение бюджета' description='Ежеквартальные отчеты и динамика исполнения.' /><BudgetChart title='Исполнение по кварталам' /></div></Fade>
