import styles from '../styles/cart.module.css'

const Cart = () => {
    return (
        <div className={styles.cart}>
            <h2 className={styles.cartItem}>Your cart is empty</h2>
            <div>Shop now</div>
        </div>
    )
}

export default Cart