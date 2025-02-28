import styles from '../styles/CartItem.module.css'
import { useOutletContext } from 'react-router-dom'

const CartItem = ({name, image, price, quantity, id}) => {
    const {selectedList} = useOutletContext()
    const [selected, setSelected] = selectedList

    const handleAddQuantity = (id) => {
        let newSelected = selected.map(p => {
            if (p.id === id) {
                return {...p, quantity: p.quantity + 1}
            } else {
                return p
            }
        })
        setSelected([...newSelected])
    }

    const handleReduceQuantity = (id) => {
        if (selected.filter(p => p.id === id)[0].quantity === 0) {
            setSelected(selected.filter(p => p.id !== id))
            return
        }
        
        let newSelected = selected.map(p => {
            if (p.id === id) {
                return {...p, quantity: p.quantity - 1}
            } else {
                return p
            }
        })
        setSelected([...newSelected])
    }


    return (
        <div className={styles.cartItem}>
            <img className={styles.image} src={image} alt={name} />
            <div className={styles.name}>{name}</div>
            <div className={styles.groupContainer}>
                <div className={styles.subHeading}>Quantity</div>
                <div className={styles.quantityContainer}>
                    <button className={styles.button} onClick={() => handleAddQuantity(id)}>+</button>
                    <div>{quantity}</div>
                    <button className={styles.button} onClick={() => handleReduceQuantity(id)}>-</button>
                </div>
                
            </div>
            <div className={styles.groupContainer}>
                <div className={styles.subHeading}>Price</div>
                <div className={styles.price}>{'US$'}{price}</div>
            </div>
        </div>
    )
}

export default CartItem