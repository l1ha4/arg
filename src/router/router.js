import InfoStartPage from '../pages/InfoStartPage'
import PORSCHE911 from '../pages/PORSCHE911'

export const publicRoutes = [
  { path: '/', element: InfoStartPage, exact: true },
  { path: '/test', element: PORSCHE911, exact: true },
]
