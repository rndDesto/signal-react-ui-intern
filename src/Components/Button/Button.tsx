import styles from './style.module.css'

const SignalButton = (props:any) => {
  const { variant, color, size, namaButton, full, disable} = props

  return (
    <>
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

export default SignalButton