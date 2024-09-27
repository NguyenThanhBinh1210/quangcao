import { useRoutes } from 'react-router-dom'
import NotFound from '~/pages/NotFound'
import Home from '~/pages/Home'
import HomeLayout from '~/layouts/HomeLayout'
import Products from '~/pages/Products'
import Service from '~/pages/Service'
import News from '~/pages/News'
import Contact from '~/pages/Contact'
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
      path: '/product',
      element: (
        <HomeLayout>
          <Products />
        </HomeLayout>
      )
    },
    {
      path: '/services',
      element: (
        <HomeLayout>
          <Service />
        </HomeLayout>
      )
    },
    {
      path: '/news',
      element: (
        <HomeLayout>
          <News />
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
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
