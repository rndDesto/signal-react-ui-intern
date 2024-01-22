import styles from './style.module.css'

const BodyRS = (props:any) => {
    const { onClick, jam} = props;
    
      return (
      <div className='flex space-x-2'>
      <button disabled={jam.isDisabled} onClick={onClick} className={[
        styles['button'],
        styles['Body-saya'],
        jam.isSelected && styles['keywords-active'],
      ].join(" ")}>
        {jam.name}</button>   
      </div>
  )
}

export default BodyRS ;