import { useState } from 'react';
import styles from './style.module.css'
const  SignalChips = (props:any) => {
 
  const { namaChips, img, keywords, onClick, mantul} = props
  // const [isActive, setIsActive] = useState(false);

  // const handleButtonClick = () => {
  //   setIsActive(!isActive); // Toggle state saat tombol diklik
  //   onClick(); // Panggil fungsi onClick dari props (jika ada)
  // };  
  
console.log(mantul)
    return (
   

      <button onClick = {onClick} className={[
        styles['Chips-saya'],
        mantul.isSelected && styles[`keywords-active`]  
      ].join(" ")}>
        <img src = {img}  className='w-2'/>
        {mantul.name}</button>
        )
    }
      
  export default SignalChips 
