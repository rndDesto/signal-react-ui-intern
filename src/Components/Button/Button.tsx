import styles from './style.module.css'


const SignalButton = (props:any) => {
  const { namaButton, warna , size, disable , full , variant} = props

  return (
    <>
    <div className={[
      styles['button-saya'],
      styles[`bg-${warna}`],
      styles[`ukuran-${size}`],
      styles[`disable-${disable}`],
      styles[`full-${full}`],
      styles[`variant-${variant}`]
    ].join(" ")}>{namaButton}
    </div>

  {/* <p className={[
  styles[`variant-${variant}`],
  styles[`warna-${warna}`]
  ].join(' ')}>aaa</p> */}
    </>
  )
}

export default SignalButton