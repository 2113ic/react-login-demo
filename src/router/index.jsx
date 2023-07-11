import { createBrowserRouter } from 'react-router-dom'

import DefaultLayout from '@/layouts'
import SearchPage from '@/views/search'

import Login from '@/views/login'
import SignUp from '@/views/login/components/SignUp'
import SignIn from '@/views/login/components/SignIn'
import Reset from '@/views/login/components/Reset'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/login',
    element: <Login />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: 'signUp',
        element: <SignUp />,
      },
      {
        path: 'reset',
        element: <Reset />,
      },
    ],
  },
])

export default router
