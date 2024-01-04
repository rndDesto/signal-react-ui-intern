import styles from './style.module.css'

const Button = () => {
  return (
    <div className={[
      styles['button-saya'],
      
    ].join(" ")}>Button</div>
  )
}

export default Button