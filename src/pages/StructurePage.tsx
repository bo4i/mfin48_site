import { useMemo, useState } from 'react'
import { structure } from '../data/structure'
import { StructureCard } from '../components/domain'
import { Fade, FilterPill, PageHero, SearchInput } from '../components/ui'

export const StructurePage = () => {
  const [q, setQ] = useState('')
  const [type, setType] = useState('Все')
  const types = ['Все', ...new Set(structure.map((s) => s.type))]
  const filtered = useMemo(() => structure.filter((s) => (type === 'Все' || s.type === type) && s.name.toLowerCase().includes(q.toLowerCase())), [q, type])

  return <Fade><div className='space-y-4'><PageHero title='Структура' description='Подразделения и направления деятельности.' /><SearchInput value={q} onChange={setQ} placeholder='Поиск подразделения' /><div className='flex gap-2'>{types.map((t) => <FilterPill key={t} label={t} active={t === type} onClick={() => setType(t)} />)}</div><div className='grid gap-3 md:grid-cols-3'>{filtered.map((s) => <StructureCard key={s.id} s={s} />)}</div></div></Fade>
}
