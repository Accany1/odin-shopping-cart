import styles from '../styles/Button.module.css'

const Button = ({ label='Button', type='button' ,onClick = () => {}}) => {
    return (
        <button className={styles[type]} onClick={onClick}>{label}</button>
    )
}

export default Button