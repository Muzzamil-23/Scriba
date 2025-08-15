import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Signup from './components/Signup'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import CompleteProfile from './components/CompleteProfile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute authentication>
            <Home/>
          </ProtectedRoute>
        )
      },
      {
        path: '/signup',
        element: (
          <ProtectedRoute authentication={false}>
            <Signup/>
          </ProtectedRoute>
        )
      },
      {
        path: '/login',
        element: (
          <ProtectedRoute authentication={false}>
            <Login/>
          </ProtectedRoute>
        )
      },
      {
        path: '/complete-profile',
        element: (
          <ProtectedRoute authentication>
            <CompleteProfile/>
          </ProtectedRoute>
        )
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
