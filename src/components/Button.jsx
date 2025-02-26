import styles from '../styles/Button.module.css'

const Button = ({ label='Button', type='button' }) => {
    return (
        <button className={styles[type]}>{label}</button>
    )
}

export default Button