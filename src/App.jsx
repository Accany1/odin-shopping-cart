import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
import styles from './styles/App.module.css'
import { useEffect, useState } from 'react'

function App() {
  const [items, setItems] = useState([])
  const [selected, setSelected] = useState([])
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (response.status >= 400) {
                throw new Error("server error");
            }
            return response.json();})
        .then(data => setItems(data))
  }, [])


  return (
    <>
        <Header selected={selected}/>
        <Outlet context={{itemList:[items, setItems], selectedList:[selected, setSelected],productSelect:[product, setProduct]}}/>
    </>
  )
}

export default App