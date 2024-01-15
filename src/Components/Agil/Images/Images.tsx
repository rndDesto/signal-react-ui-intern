import styles from './style.module.css'

export const Images = (props) => {
    const {src, w, h} = props
  return (
    <div className="flex">
        <img src={src}  />
    </div>
  )
}
