import styles from './style.module.css'

export const SignalIcon = (props) => {
    const {src, w, h} = props
  return (
    <div className={styles.icon}>
        <img src={src} width={w} height={h} />
    </div>
  )
}
