import DevPage from '../pages/DevPage'
import InfoStartPage from '../pages/InfoStartPage'
import ProductPage from '../pages/ProductPage'

export const publicRoutes = [
  { path: '/', element: InfoStartPage, exact: true },
  // { path: '/product/:id', element: ProductPage, exact: true },
  { path: '/product', element: ProductPage, exact: true },
  { path: '/dev', element: DevPage, exact: true },
]
