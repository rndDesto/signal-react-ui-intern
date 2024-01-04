import styles from './style.module.css'


const Button = (props:any) => {
  return (
    <div className={styles['signal-button']}>Button {props.title}</div>
  )
}

export default Button