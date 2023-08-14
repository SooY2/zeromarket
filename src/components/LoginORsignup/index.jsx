import styles from "./index.module.css";


const LogORsignup =(props)=>{
    
    return (
        <button type={props.type} className={styles.btnActive} onClick={props.onClick}>
            {props.title}
        </button>
    )
};

export default LogORsignup;