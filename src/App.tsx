import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { AboutPage } from './pages/AboutPage'
import { AppealsPage } from './pages/AppealsPage'
import { BudgetDebtPage } from './pages/BudgetDebtPage'
import { BudgetExecutionPage } from './pages/BudgetExecutionPage'
import { BudgetPage } from './pages/BudgetPage'
import { ContactsPage } from './pages/ContactsPage'
import { DocumentsPage } from './pages/DocumentsPage'
import { HomePage } from './pages/HomePage'
import { LeadershipPage } from './pages/LeadershipPage'
import { NewsPage } from './pages/NewsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { OpenBudgetPage } from './pages/OpenBudgetPage'
import { StructurePage } from './pages/StructurePage'

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='leadership' element={<LeadershipPage />} />
        <Route path='structure' element={<StructurePage />} />
        <Route path='documents' element={<DocumentsPage />} />
        <Route path='budget' element={<BudgetPage />} />
        <Route path='budget/execution' element={<BudgetExecutionPage />} />
        <Route path='budget/debt' element={<BudgetDebtPage />} />
        <Route path='open-budget' element={<OpenBudgetPage />} />
        <Route path='news' element={<NewsPage />} />
        <Route path='contacts' element={<ContactsPage />} />
        <Route path='appeals' element={<AppealsPage />} />
        <Route path='404' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
