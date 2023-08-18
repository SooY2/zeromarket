import styles from "./index.module.css";

import { showCate } from "../../../state/userInfo";
import { useRecoilState } from "recoil";

const catelists=[
    //"전체",
    "식료품",
    "음식",
    "카페/베이커리",
    "생활용품",
    "패션의류/잡화",
    "문구/오피스",
    "뷰티",
    "반려동물"

]

const CateItems=({idx,icon,catename})=>{
    const [cate,setCate]=useRecoilState(showCate);
    const handleCate=(e)=>{
        setCate(catelists[idx]);
        console.log(catelists[idx]);
    }
    return (
        <button className={styles.wrapper} onClick={handleCate}>
            <div id={idx} className={styles.imgBox}><img src={icon}/></div>
            <div id={idx} className={styles.text}>{catename}</div>
        </button>
    )
};

export default CateItems;