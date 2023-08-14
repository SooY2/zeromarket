import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import zeromarketLogo from "/src/assets/zeromarketLogo.png";
import searchicon from "/src/assets/icons/searchicon.png";
import marketicon from "/src/assets/icons/marketicon.png";

//상태관리
import {userDong} from "../../state/userInfo";
import { useRecoilValue } from "recoil";

// 컴포넌트
import KakaoMap from "../../components/mainboard/KakaoMap";
import Category from "../../components/mainboard/Category";
import Itemlists from "../../components/mainboard/Itemlists";
import SideSection from "../../components/mainboard/SideSection";

const Mainpage=()=>{
    const usertown=useRecoilValue(userDong);
    const nav=useNavigate();

    return (<div className={styles.wrapper}>
        <header className={styles.header}>
            <img src={zeromarketLogo}/>
            <div className={styles.searchbar}>
                <img src={searchicon}/>
                <input></input>
            </div>
            <button className={styles.gomyzero} onClick={()=>{
                nav("/myzero/1")
            }}>
                <img src={marketicon}/> 내 재로마켓 보기</button>
        </header>
        <div className={styles.mainboard}>
            <span className={styles.mainleft}>
                {/* 어서오세요~~부분 */}
                <div className={styles.welcome}>
                    <span>어서오세요! 수연님,</span>
                    <span> 현재 보고계신 곳은 </span>
                    <span style={{fontSize:"24px"}}> {usertown} </span>
                    <span>입니다</span></div>
                {/* 카테고리 네비게이션 바 */}
                <Category/>
                {/* 지도 */}
                <div className={styles.mapcontainer}>
                    <KakaoMap/>
                </div>
                {/* 상품 리스트 */}
                <Itemlists/>
            </span>
            <span className={styles.mainright}>
                <div>최근 본 재료</div>
                <SideSection></SideSection>
            </span>
        </div>
    </div>)
};

export default Mainpage;