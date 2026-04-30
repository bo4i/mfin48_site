import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layout/AppLayout'
import { AboutPage, AppealsPage, BudgetPage, ContactsPage, DebtPage, DocumentsPage, ExecutionPage, HomePage, LeadershipPage, NewsPage, OpenBudgetPage, StructurePage } from './pages/pages'

export const App = () => (
  <Routes>
    <Route path='/' element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='leadership' element={<LeadershipPage />} />
      <Route path='structure' element={<StructurePage />} />
      <Route path='documents' element={<DocumentsPage />} />
      <Route path='budget' element={<BudgetPage />} />
      <Route path='budget/execution' element={<ExecutionPage />} />
      <Route path='budget/debt' element={<DebtPage />} />
      <Route path='open-budget' element={<OpenBudgetPage />} />
      <Route path='news' element={<NewsPage />} />
      <Route path='contacts' element={<ContactsPage />} />
      <Route path='appeals' element={<AppealsPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Route>
  </Routes>
)
