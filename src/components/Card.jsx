import styles from '../styles/Card.module.css'
import Button from './Button'
import { useOutletContext } from 'react-router-dom'

function Card({name, image, price, id}) {
    const {selectedList} = useOutletContext()
    const [selected, setSelected] = selectedList

    const addToCart = (id,name,image,price) => {
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
      

    let newName
    if (name.length > 50) {
        newName = name.substring(0, 50) + '...'
    } else {
        newName = name
    }

    return (
      <div className={styles.card}>
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.name}>{newName}</div>
        <div className={styles.priceContainer}>
          <div className={styles.price}>{'US$'}{price}</div>
          <Button label={'Add to Cart'} type={'add'} onClick={() => addToCart(id,name,image,price)}/>
        </div>
        
      </div>
    )
  }
  
  export default Card