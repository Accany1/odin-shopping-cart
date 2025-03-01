import Card from './Card.jsx'
import style from '../styles/Store.module.css'
import { Link, useOutletContext } from 'react-router-dom'

const Store = () => {
    const {itemList} = useOutletContext()
    const [items] = itemList

    return (
        <div className={style.store}>
            {items.map((p) => {return <Card key={p.id} name={p.title} image={p.image} price={p.price} className id={p.id} />})}
        </div>
    )
}

export default Store