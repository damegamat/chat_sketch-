import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom'
import { LinearProgress } from '@mui/material'

import { MainLayout } from 'layouts'

const Main = lazy(() => import('./pages/Main'))
const Chat = lazy(() => import('./pages/Chat'))

export const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<LinearProgress />}>
      <MainLayout>
        <Router>
          <Route path='/' element={<Main />} />
          <Route path='/chat/:id' element={<Chat />} />
        </Router>
      </MainLayout>
    </Suspense>
  </BrowserRouter>
)
