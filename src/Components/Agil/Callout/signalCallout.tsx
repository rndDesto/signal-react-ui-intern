import { useEffect, useState } from 'react';
import styles from './style.module.css';

const SignalCallout = (props:any) => {
  const { color, onClose, children, openCallout} = props;

  console.log("props = ", onClose)
  
  const [isOpen,setIsOpen] = useState(openCallout)

  useEffect(() => {setIsOpen(openCallout)},[isOpen]
)

  return (
  <div>
    {openCallout && 
      <div
        className={[
          styles.root,
          styles[`color-${color}`],
        ].join(' ')}
         >
        {children}
        {onClose && <img  className="w-4 cursor-pointer" onClick={onClose} src="https://cdn-icons-png.flaticon.com/128/3917/3917759.png" alt="" />}
       
      </div>
      }
    </div>
  );
};

export default SignalCallout;
