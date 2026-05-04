import { useState } from 'react'
import { leadership } from '../data/leadership'
import { LeaderCard } from '../components/domain'
import { EmptyState, Fade, PageHero, SearchInput } from '../components/ui'

export const LeadershipPage = () => {
  const [q, setQ] = useState('')
  const filtered = leadership.filter((l) => l.name.toLowerCase().includes(q.toLowerCase()) || l.role.toLowerCase().includes(q.toLowerCase()))

  return <Fade><div className='space-y-4'><PageHero title='Руководство' description='Состав, контакты и графики личного приема.' /><SearchInput value={q} onChange={setQ} placeholder='Поиск по ФИО или должности' /><div className='grid gap-3 md:grid-cols-3'>{filtered.map((l) => <LeaderCard key={l.id} l={l} />)}</div>{!filtered.length && <EmptyState text='Ничего не найдено' />}</div></Fade>
}
