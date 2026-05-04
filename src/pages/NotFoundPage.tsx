import { Link } from 'react-router-dom'
import { Fade, PageHero } from '../components/ui'

export const NotFoundPage = () => <Fade><div className='space-y-4'><PageHero title='Страница не найдена' description='Проверьте адрес или вернитесь на главную страницу.' /><Link className='text-blue-700 underline' to='/'>Перейти на главную</Link></div></Fade>
