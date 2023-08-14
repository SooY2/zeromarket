import styles from "./index.module.css";
import deleteicon from "../../../assets/icons/deleteicon.png";

const Modal=()=>{
    return (
        <div className={styles.wrapper}>
            <img src={deleteicon}/>
            <div className={styles.box}></div>
        </div>
    )
};

export default Modal;