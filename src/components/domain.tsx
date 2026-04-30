import { Card } from './ui'

export const NewsCard = ({ n }: { n: any }) => <Card><p className='text-xs text-slate-500'>{n.date} · {n.category}</p><h3 className='font-semibold'>{n.title}</h3><p className='text-sm'>{n.excerpt}</p></Card>
export const LeaderCard = ({ l }: { l: any }) => <Card><h3 className='font-semibold'>{l.name}</h3><p>{l.role}</p><p className='text-sm'>{l.contact}</p><p className='text-sm text-slate-600'>{l.hours}</p></Card>
export const StructureCard = ({ s }: { s: any }) => <Card><h3 className='font-semibold'>{s.name}</h3><p>{s.type}</p><p className='text-sm text-slate-600'>{s.direction}</p></Card>
export const DocumentTable = ({ items }: { items: any[] }) => <div className='overflow-auto rounded-2xl bg-white p-2 shadow-sm'><table className='w-full text-sm'><thead><tr className='text-left'><th>Название</th><th>Тип</th><th>Год</th><th>Статус</th><th>Формат</th></tr></thead><tbody>{items.map(d=><tr key={d.id} className='border-t'><td>{d.title}</td><td>{d.type}</td><td>{d.year}</td><td>{d.status}</td><td>{d.format}</td></tr>)}</tbody></table></div>
