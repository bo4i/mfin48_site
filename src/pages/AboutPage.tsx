import { Fade, PageHero } from '../components/ui'

export const AboutPage = () => (
  <Fade>
    <div className='space-y-4'>
      <PageHero title='О министерстве' description='Полномочия, функции и нормативные основы деятельности.' />
      <p>Министерство формирует и реализует финансовую и бюджетную политику региона.</p>
    </div>
  </Fade>
)
