import { useState } from 'react';
import styles from './style.module.css'
const  SignalChips = (props:any) => {
 
  const { namaChips, img, keywords, onClick, mantul} = props
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive); // Toggle state saat tombol diklik
    onClick(); // Panggil fungsi onClick dari props (jika ada)
  };  
  
console.log(mantul)
    return (
   

      <button onClick = {handleButtonClick} className={[
        styles['Chips-saya'],
        mantul.isSelected && styles[`keywords-active`]  
      ].join(" ")}>
        {/* <img src = {img}  className='w-2'/> */}
        {mantul.name}</button>
        )
    }
      
  export default SignalChips 


      // <div onClick={onClick} className={[
      //   styles['button-saya'],
      //   /*styles['mantul-gan'],*/
      //   styles[`color-${warna}`],
      //   styles[`size-${size}`],
      //   styles[`full-${full}`],
      //   styles[`disabled-${disabled}`],
      //   styles[`variant-${variant}`],  
      // ].join(" ")}>{namaButton}</div>
      
    


// import styles from './style.module.css'


// const Chips = (props) => {
//   const {children, rounded, bg} = props

//   // punya rounded
//   // bisa ubah warna backgorund

//   // konten bisa image
//   // konten bisa ada button


//   return (
//     <div className={[
//       styles.root,
//       styles[`Chips-rounded-${rounded}`],
//       styles[`Chips-bg-${bg}`]
//       ].join(' ')}>
//           {children}
//     </div>
//   )
// }
// export default Chips

// const SignalChips = (props:any) => {
//   const { namaChips, onClick} = props

//   return (
//     <div onClick={onClick} className={[
//       styles['Chips-saya'],
//     ].join(" ")}>{namaChips}</div>
//   )
// }

//  export default SignalChips





// import styles from './style.module.css'

// const SignalButton = (props:any) => {
//   const { namaButton, warna, size, full, disabled, variant, onClick} = props

//   return (
//     <div onClick={onClick} className={[
//       styles['button-saya'],
//       /*styles['mantul-gan'],*/
//       styles[`color-${warna}`],
//       styles[`size-${size}`],
//       styles[`full-${full}`],
//       styles[`disabled-${disabled}`],
//       styles[`variant-${variant}`],  
//     ].join(" ")}>{namaButton}</div>
//   )
// }

// export default SignalButton