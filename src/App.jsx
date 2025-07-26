
import { Outlet, useNavigate } from "react-router"
import Button from "./components/Button"
import Header from "./components/Header/Header"
import LogoutBtn from "./components/LogoutBtn"
import SearchBar from "./components/SearchBar"
import Signup from "./components/Signup"

import Home from "./pages/Home"


function App() {
  const navigate = useNavigate()
  const handleSignUp = () => {
    navigate('/login')
  }

  return (
    <>
    {/* <Header/> */}
    {/* <Home/> */}
    {/* <LogoutBtn/> */}
    
      {/* <SearchBar/> */}

      <button onClick={handleSignUp}>Click to SignUp</button>

      <Outlet/>
    
    </>
  )
}

export default App
