import styles from './style.module.css';
const  SignalChips = (props:any) => {
 
  const { onClick, data, img} = props;
  console.log(img)
    return (
    <div className='flex space-x-2'>
    <button disabled={data.isDisabled} onClick={onClick} className={[
      styles['button'],
      styles['Chips-saya'],
      data.isSelected && styles['keywords-active'],
    ].join(" ")}>
      {img!==" " &&<img src={img} className='w-5'/>}
      {data.name}</button>   
    </div> 
    
  );
};
      
export default SignalChips;