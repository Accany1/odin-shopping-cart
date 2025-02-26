import Header from './components/Header.jsx'
import Cards from './components/Cards.jsx'
import { Outlet } from 'react-router-dom'
import styles from './styles/App.module.css'

function App() {

  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default App