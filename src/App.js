import './assets/scss/global.scss'
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  createHashRouter,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Root from './pages/Root'
import AboutPage from './pages/AboutPage'
import OfficePage from './pages/OfficePage'
import ServicePage from './pages/ServicePage'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'office', element: <OfficePage /> },
      { path: 'services', element: <ServicePage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
