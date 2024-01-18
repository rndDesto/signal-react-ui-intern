import styles from './style.module.css'

const SignalCard = (props:any) => {
    const {children,background,fontColor,borderColor,borderSize,rounded,variant,space,shadow} = props

  return (

  <div className= {styles.root}>
   <div className= {[
    styles[`background-${background || "white"}`],
    styles[`fontColor-${fontColor|| "black"}`],
    styles[`borderColor-${borderColor}`],
    styles[`borderSize-${borderSize}`],
    styles[`rounded-${rounded}`],
    styles[`variant-${variant}`],
    styles[`space-${space}`],
    styles[`shadow-${shadow}`]
  ].join(' ')}
  >
    {children}
   </div>
  </div>
  )
};

export default SignalCard;
