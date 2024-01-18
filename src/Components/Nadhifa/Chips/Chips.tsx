import styles from './style.module.css';
const  SignalChips = (props:any) => {
 
  const { onClick, data, img} = props
    return (
      
      <button disabled={data.isDisabled} onClick={onClick} className={[
        styles['button'],
        styles['Chips-saya'],
        data.isSelected && styles['keywords-active'],
      ].join(" ")}>
        <img src = {img}  className='w-2'/>
        {data.name}</button>
       
        )
    }
      
  export default SignalChips