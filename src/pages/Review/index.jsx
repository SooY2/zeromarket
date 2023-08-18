import { useNavigate, useParams } from "react-router-dom";
import styles from "./index.module.css";
import zeromarketLogo from "/src/assets/zeromarketLogo.png";

const Review = ()=>{
    const userid=useParams().userId;
    const nav=useNavigate();
    return (
        <div className={styles.wrapper}>
            <header className='mainheader'><img src={zeromarketLogo} onClick={
            ()=>{
                nav(`/zeromarket/${userid}`)
                }}/></header>
            <div className={styles.box}>

            </div>

        </div>
    )

};

export default Review;