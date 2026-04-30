import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export const Button = ({ children }: { children: ReactNode }) => <button className='rounded-xl bg-blue-700 px-4 py-2 text-white'>{children}</button>
export const Card = ({ children }: { children: ReactNode }) => <div className='rounded-2xl bg-white p-4 shadow-sm'>{children}</div>
export const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => <div><h2 className='text-2xl font-bold'>{title}</h2>{subtitle && <p className='text-slate-600'>{subtitle}</p>}</div>
export const PageHero = ({ title, description }: { title: string; description: string }) => <section className='rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 p-6 text-white'><h1 className='text-3xl font-bold'>{title}</h1><p className='mt-2'>{description}</p></section>
export const SearchInput = ({ value, onChange, placeholder='Поиск' }: { value: string; onChange: (v: string)=>void; placeholder?: string }) => <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} className='w-full rounded-xl border p-2' />
export const FilterPill = ({ active, label, onClick }: { active: boolean; label: string; onClick: ()=>void }) => <button onClick={onClick} className={`rounded-full px-3 py-1 text-sm ${active ? 'bg-blue-700 text-white' : 'bg-slate-200'}`}>{label}</button>
export const KpiCard = ({ label, value }: { label: string; value: string }) => <Card><p className='text-slate-500'>{label}</p><p className='text-xl font-bold'>{value}</p></Card>
export const BudgetChart = ({ title }: { title: string }) => <Card><p className='font-semibold'>{title}</p><div className='mt-2 h-36 rounded bg-slate-100' /></Card>
export const EmptyState = ({ text }: { text: string }) => <Card><p className='text-slate-500'>{text}</p></Card>
export const Fade = ({ children }: { children: ReactNode }) => <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.25}}>{children}</motion.div>
