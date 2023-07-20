import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import { PATH } from './contants/contants'

const isAuthenticated = true // sẽ được lấy ra từ localstorage

const ProtectedRoute = () => {
  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.LOGIN} />
}

const RejectedRoute = () => {
  return !isAuthenticated ? <Outlet /> : <Navigate to={PATH.PRODUCT} />
}

export default function useRouteElements() {
  const routeElement = useRoutes([
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <ProductList />
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: PATH.LOGIN,
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: PATH.REGISTER,
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])
  return routeElement
}
