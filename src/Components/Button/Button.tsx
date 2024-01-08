import styles from './style.module.css'

const SignalButton = (props:any) => {
  const { namaButton, warna, size, full, disabled, variant} = props

  return (
    <div className={[
      styles['button-saya'],
      /*styles['mantul-gan'],*/
      styles[`color-${warna}`],
      styles[`size-${size}`],
      styles[`full-${full}`],
      styles[`disabled-${disabled}`],
      styles[`variant-${variant}`],  
    ].join(" ")}>{namaButton}</div>
  )
}

export default SignalButton