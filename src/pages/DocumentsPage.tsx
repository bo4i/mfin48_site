import { useState } from 'react'
import { documents } from '../data/documents'
import { DocumentTable } from '../components/domain'
import { Fade, PageHero, SearchInput } from '../components/ui'

export const DocumentsPage = () => {
  const [q, setQ] = useState('')
  const filtered = documents.filter((d) => d.title.toLowerCase().includes(q.toLowerCase()))

  return <Fade><div className='space-y-4'><PageHero title='Документы' description='Реестр НПА, приказов и методических материалов.' /><SearchInput value={q} onChange={setQ} placeholder='Поиск документа' /><DocumentTable items={filtered} /></div></Fade>
}
