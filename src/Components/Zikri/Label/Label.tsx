
import SignalButton from '../../Button/Button'
import styles from './style.module.css'

const Label = (props) => {
  const {children, rounded, bg} = props

  // punya rounded
  // bisa ubah warna backgorund

  // konten bisa image
  // konten bisa ada button


  return (
    <div className={[
      styles.root,
      styles[`label-rounded-${rounded}`],
      styles[`label-bg-${bg}`]
      ].join(' ')}>
          {children}
    </div>
  )
}

// halo ini desto

export default Label