import styles from './style.module.css'

export const Images = (props:any) => {
    const {src, w, h} = props
  return (
    <div className={styles.images}>
        <img src={src} width={w} height={h} />
    </div>
  )
}
