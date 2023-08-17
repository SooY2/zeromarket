import styles from "./index.module.css";
import zeromarketLogo from "/src/assets/zeromarketLogo.png";

import { useEffect, useState } from "react";
import Button from "../../components/Button";

import  {storeAddress,storeDetailAddress,bank,account,signupInfo} from "../../state/userInfo";
import { useRecoilValue } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../../axiosConfig";
const Myzero=()=>{
    const userid=useParams().userId;

    const address=useRecoilValue(storeAddress);
    const detailAddress=useRecoilValue(storeDetailAddress);
    const storebank=useRecoilValue(bank);
    const storeaccount = useRecoilValue(account);

    const nav=useNavigate();
    
    const [data,setData] = useState({
        // imgFile:null,
        // storename:"물고기 날다",
        // storeintroduce:"횟집인가?",
        // storeAddress:address,
        // storeDetailAddress:detailAddress,
        // storeBank:storebank,
        // storeAccount:storeaccount,

    })

    useEffect(()=>{
        axiosInstance.get(`/store/${userid}`)
        .then(res=>{
            console.log(res.data);
            setData({
                imgFile:null,
                storename:res.data.name,
                storeintroduce:res.data.explanation,
                storeAddress:res.data.address,
                storeDetailAddress:res.data.detailAddress,
                storeBank:res.data.bank,
                storeAccount:res.data.account,
            })
        })
        .catch(err=>console.lof(err))
    },[]);




    
    return (
        <div className={styles.wrapper}>
            <header className='mainheader'><img src={zeromarketLogo} onClick={
            ()=>{
                nav(`/zeromarket/${userid}`)
                }}/></header>
            <form className={styles.box}>
                <div className={styles.storeImg}>
                    <img src=""/>
                </div>
                <div className={styles.storeInfo}>
                    <span className={styles.span1}>
                        <input type="text" 
                            name="storename"
                            defaultValue={data.storename}
                            className={styles.storename}
                            disabled/>
                        <div className={styles.storeintroduceBox}>
                            <div className={styles.textareaPlace}>
                                {!data.storeintroduce&&"가게 설명을 입력해주세요"}
                            </div>
                            <textarea type="text"
                                name="storeintroduce"
                                defaultValue={data.storeintroduce} 
                                className={styles.storeintroduce}
                                disabled
                                />
                        </div>
                    </span>
                    <span className={styles.span2}>
                        <div className={styles.wrapper2}>
                            <div>가게주소</div>
                            <input className={styles.input} 
                                type="text"
                                defaultValue={data.storeAddress}
                                placeholder="주소"
                                disabled/>
                            <input className={styles.input} 
                                type="text"
                                defaultValue={data.storeDetailAddress}
                                placeholder="상세주소"
                                disabled
                                />
                            
                        </div>
                        <div className={styles.wrapper3}>
                            <label>계좌번호</label>                
                            <input className={styles.input} 
                                type="text"
                                placeholder="은행"
                                value={data.storeBank} />
                            <input className={styles.input} 
                                type="text"
                                placeholder="계좌번호"
                                value={data.storeAccount} />
                        </div>
                    </span>
                </div>
                <div className={styles.btncontainer}>
                    <Button type="submit" title="상품 등록하러 가기" onClick={()=>{
                        nav(`/registerZero/${userid}`);
                    }}/>
                    <Button type="submit" title="상세페이지 보러 가기"/>
                </div>
            </form>
            
        </div>
    )
}

export default Myzero;