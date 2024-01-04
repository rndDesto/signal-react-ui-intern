import styles from './style.module.css'

const Button = () => {
  return (
    <>
    <div className={[
      styles['button-saya'],
      styles['mantul-gan']
    ].join(" ")}>Signal Button</div>

    <div className={[
      styles['button-saya'],
      styles['mantul-gan']
    ].join(" ")}>Signal Button</div>

    </>
  )
}

export default Button