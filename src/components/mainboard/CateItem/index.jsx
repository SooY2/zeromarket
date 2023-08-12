import styles from "./index.module.css";

import { showCate } from "../../../state/userInfo";
import { useRecoilState } from "recoil";

const CateItems=({idx,icon,catename,})=>{
    const [cate,setCate]=useRecoilState(showCate);
    const handleCate=()=>{
        setCate(idx);
        //상세보기로 nav.
    }
    return (
        <button className={styles.wrapper} onClick={handleCate}>
            <div id={idx} className={styles.imgBox}><img src={icon}/></div>
            <div id={idx} className={styles.text}>{catename}</div>
        </button>
    )
};

export default CateItems;