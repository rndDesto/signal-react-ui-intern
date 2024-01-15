import { useEffect } from 'react';
import styles from './style.module.css';
const  SignalChips = (props:any) => {
 
  const { onClick, mantul} = props


  useEffect(() => {
  console.log("chips = ",mantul)

  }, [onClick]);
  
    return (
   

      <button onClick={onClick} className={[
        styles['Chips-saya'],
        mantul.isSelected && styles[`keywords-active`]  
      ].join(" ")}>
        {/* <img src = {img}  className='w-2'/> */}
        {mantul.name}</button>
        )
    }
      
  export default SignalChips 

