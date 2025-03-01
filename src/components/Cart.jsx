import { useOutletContext } from 'react-router-dom'
import styles from '../styles/Cart.module.css'
import CartItem from './CartItem'
import Button from './Button'

const emptyCart = () => {
    return (
        <div className={styles.emptyCart}>
            <h2>Your cart is empty</h2>
            <div>Shop now</div>
        </div>
    )
}

const Cart = () => {
    const {selectedList} = useOutletContext()
    const [selected, setSelected] = selectedList

    return (
        <>
            {selected.length === 0 && emptyCart()}
            <div className={styles.cart}>
                {selected.length !== 0 && <h1 className={styles.cartTitle}>Your Cart</h1>}
                {selected.length !== 0 && selected.map((p) => {return <CartItem key={p.id} name={p.name} image={p.image} price={p.price} quantity={p.quantity} id={p.id}/>})}
                {selected.length !== 0 && <div className={styles.total}>Total: US${selected.reduce((acc, p) => acc + p.quantity * p.price, 0)}</div>}
                <div className={styles.buttonContainer}>
                    {selected.length !== 0 && <Button label={'Checkout'} type={'button'} onClick={() => {console.log('checkout')}}/>}
                </div>
            </div>
        </> 
    )
}

export default Cart