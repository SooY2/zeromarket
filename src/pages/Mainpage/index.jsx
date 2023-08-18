import styles from "./index.module.css";
import { useNavigate, useParams } from "react-router-dom";
import zeromarketLogo from "/src/assets/zeromarketLogo.png";
import searchicon from "/src/assets/icons/searchicon.png";
import marketicon from "/src/assets/icons/marketicon.png";

//상태관리
import {userDong, showCate} from "../../state/userInfo";
import { useRecoilState, useRecoilValue } from "recoil";
import { productlist,addresslist } from "../../state/product";


import axios from "axios";
import axiosInstance from "../../../axiosConfig";

// 컴포넌트
import KakaoMap from "../../components/mainboard/KakaoMap";
import Category from "../../components/mainboard/Category";
import Itemlists from "../../components/mainboard/Itemlists";
import SideSection from "../../components/mainboard/SideSection";
import { useEffect, useState } from "react";

const catelists=[
    //"전체",
    "식료품",
    "음식",
    "카페/베이커리",
    "생활용품",
    "패션의류/잡화",
    "문구/오피스",
    "뷰티",
    "반려동물",

]

const Mainpage=()=>{
    const usertown=localStorage.getItem('Dong');
    // const usertown=useRecoilValue(userDong);
    const usercate=useRecoilValue(showCate);
    const userid=useParams().userId;
    const nav=useNavigate();

    const [addresslists,setAddresslists]=useRecoilState(addresslist);
    const [itemlist,setItemlist]=useRecoilState(productlist);
    const [search,setSearch]=useState("");
    const [all,setall]=useState([]);

    //지도에 가게 불러오기
    useEffect(()=>{
        
            console.log(usertown,usercate);
        
        axiosInstance.post(`/main/${userid}/list`,{category:usercate,address:usertown})
        .then(res=>{
            // console.log(res);
            // console.log(res.data.prodctList);
            //console.log(res.data.storeList);
            setAddresslists(res.data.storeList);
            setItemlist(res.data.prodctList);
        })
        .catch(err=>console.log(err));
        
        
    

    },[usercate]);




    return (<div className={styles.wrapper}>
        <header className={styles.header}>
            <img src={zeromarketLogo} onClick={()=>[
                nav(`/zeromarket/${userid}`)
            ]}/>
            <form className={styles.searchbar} onSubmit={(e)=>{
                e.preventDefault();
                // console.log(userDong,search)
                axiosInstance.post(`/main/${userid}/search`,{address:usertown,name:search})
                .then(res=>{
                    setItemlist(res.data);
                })
                .catch(err=>console.log(err));
            }}>
                <img src={searchicon}/>
                <input type="text" name="seachcontent" value={search} onChange={(e)=>{
                    e.preventDefault();
                    setSearch(e.target.value);
                }}></input>
            </form>
            <button className={styles.gomyzero} onClick={()=>{
                nav(`/myzero/${userid}`);
            }}>
                <img src={marketicon}/> 내 재로마켓 보기</button>
        </header>
        <div className={styles.mainboard}>
            <span className={styles.mainleft}>
                {/* 어서오세요~~부분 */}
                <div className={styles.welcome}>
                    <span>어서오세요!</span>
                    <span> 현재 보고계신 곳은 </span>
                    <span style={{fontSize:"24px"}}> {usertown} </span>
                    <span>입니다</span></div>
                {/* 카테고리 네비게이션 바 */}
                <Category/>
                {/* 지도 */}
                <div className={styles.mapcontainer}>
                    <KakaoMap />
                </div>
                {/* 상품 리스트 */}
                <Itemlists/>

            </span>
            <span className={styles.mainright}>
                <div>최근 본 재로</div>
                <SideSection></SideSection>
            </span>
        </div>
    </div>)
};

export default Mainpage;