import { useRoutes } from 'react-router-dom'
import NotFound from '~/pages/NotFound'

import HomeLayout from '~/layouts/HomeLayout'
import Home from '~/pages/Home'
import Contact from '~/pages/Contact'
import Private from '~/pages/Private'
import Term from '~/pages/Term'
import About from '~/pages/About'

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      )
    },
    {
      path: '/contact',

      element: (
        <HomeLayout>
          <Contact />
        </HomeLayout>
      )
    },
    {
      path: '/private',

      element: (
        <HomeLayout>
          <Private />
        </HomeLayout>
      )
    },
    {
      path: '/term',

      element: (
        <HomeLayout>
          <Term />
        </HomeLayout>
      )
    },
    {
      path: '/about',

      element: (
        <HomeLayout>
          <About />
        </HomeLayout>
      )
    },

    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
