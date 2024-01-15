import { useState } from 'react';
import styles from './style.module.css'

const SignalBody = (props) => {
  const {size, weight, children} = props


  return (
    <div className="">
    <div className= {[
      styles.root,
      styles[`size-${size}`],
      styles[`weight-${weight}`]
      ].join(' ')}> 
      {children} 
    </div>
    </div>
  )
}

export default SignalBody ;