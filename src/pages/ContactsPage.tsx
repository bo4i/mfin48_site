import { contacts } from '../data/contacts'
import { Fade, KpiCard, PageHero } from '../components/ui'

export const ContactsPage = () => <Fade><div className='space-y-4'><PageHero title='Контакты' description='Адрес, реквизиты и форма обратной связи.' /><div className='grid gap-3 md:grid-cols-2'><KpiCard label='Адрес' value={contacts.address} /><KpiCard label='Телефон' value={contacts.phone} /><KpiCard label='Email' value={contacts.email} /><KpiCard label='Реквизиты' value={contacts.requisites} /></div><div className='h-48 rounded-2xl bg-slate-200 p-4'>Карта-заглушка</div></div></Fade>
