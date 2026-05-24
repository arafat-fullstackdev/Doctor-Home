import MainNav from "./Nav/MainNav"
import { Nav } from "./Nav/Nav"
import Emergency from "./Pages/Emergency Care/Emergency"
import { Home } from "./Pages/Home/Home"
import { Login } from "./Pages/Login/Login"
function App() {


  return (
    <>
    <MainNav/>
    <Nav/>
     <Home/>
     <Emergency/>
     <Login/>
    </>
  )
}

export default App
