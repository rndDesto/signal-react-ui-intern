import { useEffect, useState } from 'react';
import styles from './style.module.css'

const SignalSnackBar = (props:any) => {
const{  color, sticky, position,  children} = props;
console.log("props = ", sticky)

    return ( 
        <div className={[
            styles.root,
            styles[`color-${color || 'primary'}`],
            // styles[`open-${open || 'show'}`],
            // styles[`Signal-Snackbar`],
            styles[`sticky-${sticky || 'true'}`],
            styles[`position-${position || 'topStart'}`],
            ].join(" ")}>{children}
        </div>  
    )
}
export default SignalSnackBar;