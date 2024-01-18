
<<<<<<< HEAD

=======
>>>>>>> 8b14b931e73a871e48b2defcbe66320ecc8a755a
import styles from './style.module.css'

const Label = (props:any) => {
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

export default Label