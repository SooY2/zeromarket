import styles from "./index.module.css";


const LogORsignup =(props)=>{
    
    const btnstyle = props.active ? styles.btnActive:styles.btnNactive;
    
    return (
        <button type={props.type} className={btnstyle} onClick={props.onClick}>
            {props.title}
        </button>
    )
};

export default LogORsignup;