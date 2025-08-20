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
import AuthProvider from './components/AuthProvider'
import Test from './components/Test'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute requireAuth={true} requireCompleteProfile={true}>
            <Home />
          </ProtectedRoute>
        )
      },
      {
        path: '/signup',
        element: (
          <ProtectedRoute requireAuth={false}>
            <Signup />
          </ProtectedRoute>
        )
      },
      {
        path: '/login',
        element: (
          <ProtectedRoute requireAuth={false}>
            <Login />
          </ProtectedRoute>
        )
      },
      {
        path: '/complete-profile',
        element: (
          <ProtectedRoute requireAuth={true} requireCompleteProfile={false}>
            <CompleteProfile />
          </ProtectedRoute>
        )
      },
      {
        path: '/test',
        element: (
          <ProtectedRoute requireAuth={true} requireCompleteProfile={true}>
            <Test />
          </ProtectedRoute>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <AuthProvider>
      </AuthProvider> */}
      <RouterProvider router={router} />

    </Provider>
  </StrictMode>,
)