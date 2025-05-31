import './styles/App.css'
import './styles/reset.css'
import AppRouter from './AppRouter.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <AppRouter />
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
