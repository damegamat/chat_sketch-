import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

import { MainLayout } from 'layouts'

const Main = lazy(() => import('./pages/Main'))

export const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<CircularProgress />}>
      <MainLayout>
        <Router>
          <Route path='/' element={<Main />} />
        </Router>
      </MainLayout>
    </Suspense>
  </BrowserRouter>
)
