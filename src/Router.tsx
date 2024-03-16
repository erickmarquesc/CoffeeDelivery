import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Confirmation } from './pages/Confirmation'
import { ReactNode } from 'react'
import { useCart } from './contexts/ShoppingCartContext'

interface IPrivateRouteProps {
  children: ReactNode
}

export function Router() {

  const PrivateRoute = ({ children }: IPrivateRouteProps) => {

    const { ShoppingCartContextState } = useCart()

    const cartCounter = ShoppingCartContextState.length
    const isActiveRoute = cartCounter > 0 ? true : false

    return (
      isActiveRoute
        ? children
        : <Navigate to="/" /* state={{ from: props.location }} */ replace />
    )
  }

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        } />
        <Route path="/confirmation" element={
          <PrivateRoute>
            <Confirmation />
          </PrivateRoute>
        } />
      </Route>
    </Routes>
  )
}
