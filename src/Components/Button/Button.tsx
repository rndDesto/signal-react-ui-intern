import styles from './style.module.css'

const SignalButton = (props:any) => {
  const { namaButton, warna } = props

  return (
    <div className={[
      styles['button-saya'],
      styles['mantul-gan'],
      styles[`bg-${warna}`],
    ].join(" ")}>{namaButton}</div>
  )
}

export default SignalButton