import { useOutletContext } from "react-router-dom"
import styles from '../styles/Product.module.css'

const ProductInfo = ({items,product, setItems, selected, addQuantity, reduceQuantity, addToCart}) => {
    if (product === null) {
        return (
            <div>Loading...</div>
        )
    }

    let quantity

    if (selected.filter(p => p.id === product)[0] === undefined) {
        quantity = 0
    } else {
        quantity = selected.filter(p => p.id === product)[0].quantity
    }

    return (
        <div className={styles.productInfo}>
            <button className={styles.button}>Back</button>
            <div className={styles.infoContainer}>
                <img src={items.filter(p => p.id === product)[0].image} alt={items.filter(p => p.id === product)[0].title} className={styles.image} />   
                    <div className={styles.descriptionContainer}>
                        <h1 className={styles.title}>{items.filter(p => p.id === product)[0].title}</h1>
                        <div className={styles.description}>{items.filter(p => p.id === product)[0].description}</div>
                        <div className={styles.priceQuantity}>
                            <div className={styles.quantityContainer}>
                                <button className={styles.quantityButton} onClick={addQuantity}>+</button>
                                <div>{quantity}</div>
                                <button className={styles.quantityButton} onClick={reduceQuantity}>-</button>
                            </div>
                            <div className={styles.c}>US${items.filter(p => p.id === product)[0].price}</div>
                        </div> 
                        <button className={styles.addButton} onClick={addToCart}>Add to Cart</button>
                    </div> 
            </div>
        </div>
    )
}

const Product = () => {
    const {productSelect, itemList, selectedList} = useOutletContext()
    const [product, setProduct] = productSelect
    const [items, setItems] = itemList
    const [selected, setSelected] = selectedList

    const addToCart = (id) => {
        const name = items.filter(p => p.id === id)[0].title
        const image = items.filter(p => p.id === id)[0].image
        const price = items.filter(p => p.id === id)[0].price

        const found = selected.some(p => p.id === id)
        if (found) {
          let newSelected = selected.map(p => {
            if (p.id === id) {
              return {...p, id, quantity: p.quantity + 1, name, image, price}
            } else {
              return p
            }
          })
          setSelected([...newSelected])
        } else {
          setSelected([...selected, {id, quantity: 1, name, image, price}])
        }     
    }

    const handleAddQuantity = (id) => {
        if (selected.filter(p => p.id === id).length === 0) {
            let newSelected = items.filter(p => p.id === id)
            setSelected([...selected, {id:newSelected[0].id, quantity: 1, name: newSelected[0].title, image: newSelected[0].image, price: newSelected[0].price}])
            return
        }

        let newSelected = selected.map(p => {
            if (p.id === id) {
                return {...p, quantity: p.quantity + 1}
            } else {
                return p
            }
        })
        setSelected([...newSelected])
    }

    // setSelected([...selected, {id, quantity: 1, name, image, price}])

    const handleReduceQuantity = (id) => {
        if (selected.filter(p => p.id === id)[0].quantity === 0) {
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
        <div>
            <ProductInfo items={items} product={product} setItems={setItems} selected={selected} addQuantity={() => handleAddQuantity(product)} reduceQuantity={() => handleReduceQuantity(product)} addToCart={() => addToCart(product)}/>
        </div>
    )
}

export default Product