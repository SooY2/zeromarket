import styles from "./index.module.css";
import banner from "../../../assets/banner.png";

const SideSection=()=>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.recents}>

            </div>
            <img src={banner}/>
        </div>
    )
};

export default SideSection;