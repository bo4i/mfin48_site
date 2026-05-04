import { BudgetChart, Fade, PageHero } from '../components/ui'

export const OpenBudgetPage = () => <Fade><div className='space-y-4'><PageHero title='Открытый бюджет' description='Бюджет для граждан и интерактивные KPI.' /><BudgetChart title='Сценарии для граждан' /></div></Fade>
