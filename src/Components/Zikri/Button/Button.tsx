import styles from './style.module.css'


const Button = (props:any) => {
  const { variant, color, size, namaButton, full, disable, onClick} = props

  return (
    <>
    onClick={onClick}
    <div className={styles[`disable-${disable}`]}>
    <div className={[
      styles[`variant-${variant}`],
      styles['button-saya'],
      styles[`color-${color}`],
      // styles["disable-true"],
      styles[`full-${full}`],
      styles[`size-${size}`],
    ].join(" ")}>{namaButton}</div>
    </div>
    </>
  )
}

export default Button