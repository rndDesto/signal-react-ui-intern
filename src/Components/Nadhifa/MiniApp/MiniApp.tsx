import styles from './style.module.css';
const MiniAppRS = (props:any) => {
    const { color,  children} = props;

  

  return (
    <div
        className={[
            styles.root,
            styles[`color-${color}`],
        ].join(' ')}
        >
        {children}
        {/* <img className="w-10 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/2907/2907776.png"alt="" /> */}
    </div> 

    );
}
export default MiniAppRS;