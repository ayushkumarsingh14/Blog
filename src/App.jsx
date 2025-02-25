import { useState } from 'react'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> {/* Replace 'Blog' with your repo name */}
      <Header />
      <Outlet />
      <Footer />
    </>
  )  
}

export default App