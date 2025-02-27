import styles from '../styles/CartItem.module.css'

const CartItem = ({name, image, price, quantity}) => {
    return (
        <div className={styles.cartItem}>
            <img className={styles.image} src={image} alt={name} />
            <div className={styles.name}>{name}</div>
            <div className={styles.groupContainer}>
                <div className={styles.subHeading}>Quantity</div>
                <div>{quantity}</div>
            </div>
            <div className={styles.groupContainer}>
                <div className={styles.subHeading}>Price</div>
                <div className={styles.price}>{'US$'}{price}</div>
            </div>
        </div>
    )
}

export default CartItem