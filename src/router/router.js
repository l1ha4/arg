import DevPage from '../pages/DevPage'
import FavoritesPage from '../pages/FavoritesPage'
import InfoStartPage from '../pages/InfoStartPage'
import ModelPage from '../pages/ModelPage'
import PaymentPage from '../pages/PaymentPage'
import ProfileModelsPage from '../pages/ProfileModelsPage'
import PurchasesPage from '../pages/PurchasesPage'
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
  { path: '/profile-models', element: ProfileModelsPage, exact: true },
  { path: '/favorites', element: FavoritesPage, exact: true },
  { path: '/dev', element: DevPage, exact: true },
]
