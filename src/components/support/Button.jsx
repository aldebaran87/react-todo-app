import styles from './Button.module.css'

const Button = (props) => {

    const { children, title, disabled, onClick } = props
    return (
        <button onClick={onClick} disabled={disabled} title={title} className={styles.button}>{children}</button>

    )
}

export default Button