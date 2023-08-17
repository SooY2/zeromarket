import styles from "./index.module.css";
import { useNavigate, useParams } from "react-router-dom";
import zeromarketLogo from "/src/assets/zeromarketLogo.png";
import searchicon from "/src/assets/icons/searchicon.png";
import marketicon from "/src/assets/icons/marketicon.png";

//상태관리
import {userDong, showCate} from "../../state/userInfo";
import { useRecoilValue } from "recoil";

import axios from "axios";
import axiosInstance from "../../../axiosConfig";

// 컴포넌트
import KakaoMap from "../../components/mainboard/KakaoMap";
import Category from "../../components/mainboard/Category";
import Itemlists from "../../components/mainboard/Itemlists";
import SideSection from "../../components/mainboard/SideSection";
import { useEffect, useState } from "react";

const Mainpage=()=>{
    const usertown=useRecoilValue(userDong);
    const usercate=useRecoilValue(showCate);
    const userid=useParams().userId;
    const nav=useNavigate();

    const [addresslist,setAddresslists]=useState([
        {address:"",
        name:"",},
    ]);

    //지도에 가게 불러오기
    useEffect(()=>{
        console.log(usertown,usercate);
        axiosInstance.post(`/main/list`,{category:usercate,address:usertown})
        .then(res=>{
            console.log(res);
            console.log(res.data.prodctList);
            console.log(res.data.storeList);
            setAddresslists(res.data.storeList);
        })
        .catch(err=>console.log(err));
    },[usercate]);

    return (<div className={styles.wrapper}>
        <header className={styles.header}>
            <img src={zeromarketLogo}/>
            <div className={styles.searchbar}>
                <img src={searchicon}/>
                <input></input>
            </div>
            <button className={styles.gomyzero} onClick={()=>{
                nav(`/myzero/${userid}`);
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
                    <KakaoMap addresslists={addresslist}/>
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