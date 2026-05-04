import { useState } from 'react'
import { news } from '../data/news'
import { NewsCard } from '../components/domain'
import { Fade, PageHero, SearchInput } from '../components/ui'

export const NewsPage = () => {
  const [q, setQ] = useState('')
  const filtered = news.filter((n) => n.title.toLowerCase().includes(q.toLowerCase()))

  return <Fade><div className='space-y-4'><PageHero title='Новости' description='Официальные новости и объявления министерства.' /><SearchInput value={q} onChange={setQ} /><div className='grid gap-3 md:grid-cols-3'>{filtered.map((n) => <NewsCard key={n.id} n={n} />)}</div></div></Fade>
}
