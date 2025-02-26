import styles from '../styles/FrontPage.module.css'

const FrontPage = () => {
    return (
        <div className="front-page">
          <div className={styles.frontIntro}>
            <h2>Welcome to SomeThings</h2>
            <div>Here you can buy some things</div>
            <button>Shop now</button>
          </div>
        </div>
    )
}

export default FrontPage