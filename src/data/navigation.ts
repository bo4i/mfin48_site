export type NavItem = { label: string; path: string }
export const navigation: NavItem[] = [
  { label: 'Главная', path: '/' },
  { label: 'О министерстве', path: '/about' },
  { label: 'Руководство', path: '/leadership' },
  { label: 'Структура', path: '/structure' },
  { label: 'Документы', path: '/documents' },
  { label: 'Бюджет', path: '/budget' },
  { label: 'Исполнение бюджета', path: '/budget/execution' },
  { label: 'Госдолг', path: '/budget/debt' },
  { label: 'Открытый бюджет', path: '/open-budget' },
  { label: 'Новости', path: '/news' },
  { label: 'Контакты', path: '/contacts' },
  { label: 'Обращения граждан', path: '/appeals' }
]
