import styles from './style.module.css'

const Button = () => {
  return (
    <div className={[
      styles['button-content'],
      styles['button-border']
    ].join(" ")}>signal button</div>
  )
}

export default Button