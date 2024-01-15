import styles from './style.module.css'


const SignalButton = (props:any) => {
  const { variant, color, size, namaButton, full, disable, onClick} = props

  console.log("props = ", props)

  return (
    <>
    <div onPointerCancel={onClick} className={styles[`disable-${disable}`]}>
      <div  onClick={onClick} className={[
        styles[`variant-${variant || '1'}`],
        styles[`signal-button`],
        styles[`color-${color || 'primary'}`],
        styles[`disable-${disable || 'false'}`],
        styles[`full-${full || 'false'}`],
        styles[`size-${size || 'medium'}`],
        ].join(" ")}>{namaButton}
      </div>
    </div>
    </>
  )
}




export default SignalButton


