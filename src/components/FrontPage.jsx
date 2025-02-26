import styles from '../styles/FrontPage.module.css'
import Button from './Button.jsx'
import frontPicture from '../assets/shirt1.jpg'
import { Link } from 'react-router-dom'

const FrontPage = () => {
    return (
        <div className={styles.frontPage}>
          <div className={styles.frontContainer}>
            <div className={styles.frontIntro}>
              <h2 className={styles.frontTitle}>Welcome to Odin Shopping Cart</h2>
              <div className={styles.frontText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra mauris vel sem finibus, sit amet accumsan quam suscipit. Morbi luctus neque vel volutpat consectetur. Curabitur porttitor libero pretium lacus bibendum, ac sollicitudin magna viverra.</div>
              <Link to="/store">
                <Button label="Explore" />
              </Link>
            </div>
            <img src={frontPicture} alt={'picture of shirt'} width={300}/>
          </div>
            
        </div>
    )
}

export default FrontPage