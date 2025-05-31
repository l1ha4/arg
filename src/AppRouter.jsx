import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from './router/router'

export default function AppRouter() {
  return (
    <>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path + 'c'}
            exact={route.exact}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
    </>
  )
}
