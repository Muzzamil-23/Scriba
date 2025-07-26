import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Test from './components/Test'
import Signup from './components/Signup'
import Login from './components/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/test',
        element: <Test/>
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
