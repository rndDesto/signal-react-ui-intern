import styles from './style.module.css'
const  Button = (props:any) => {
  // const handleButtonClick = () => {
  //   console.log('Button clicked');
  const { namaButton, onClick} = props
    // Tambahkan logika atau perubahan state di sini
  

    return (
      // <div className="Button" >
      //     <button className="Btn-Tel" onClick={handleButtonClick} >Bunga</button>
      //     <button className="Btn-me" >Bunga</button>
      //     <button className="Btn-you" >Bunga</button>
      // </div>

      <div onClick={onClick} className={[
        styles['Button-saya'],
      ].join(" ")}>{namaButton}</div>



      // <div onClick={onClick} className={[
      //   styles['button-saya'],
      //   /*styles['mantul-gan'],*/
      //   styles[`color-${warna}`],
      //   styles[`size-${size}`],
      //   styles[`full-${full}`],
      //   styles[`disabled-${disabled}`],
      //   styles[`variant-${variant}`],  
      // ].join(" ")}>{namaButton}</div>
      
    )
  }
  
  export default Button

  