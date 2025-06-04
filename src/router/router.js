import DevPage from '../pages/DevPage'
import InfoStartPage from '../pages/InfoStartPage'
import ModelPage from '../pages/ModelPage'
import PaymentPage from '../pages/PaymentPage'
import PurchasesPage from '../pages/PURCHASESPage'
import SearchPage from '../pages/SearchPage'
import ShopPage from '../pages/ShopPage'

export const publicRoutes = [
  { path: '/', element: InfoStartPage, exact: true },
  // { path: '/product/:id', element: ProductPage, exact: true },
  { path: '/product', element: ModelPage, exact: true },
  { path: '/shop', element: ShopPage, exact: true },
  { path: '/purchases', element: PurchasesPage, exact: true },
  { path: '/payment', element: PaymentPage, exact: true },
  { path: '/search', element: SearchPage, exact: true },
  { path: '/dev', element: DevPage, exact: true },
]
