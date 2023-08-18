import { useNavigate, useParams } from "react-router-dom";
import styles from "./index.module.css";
import zeromarketLogo from "/src/assets/zeromarketLogo.png";
import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosConfig";

const Review = ()=>{
    const userid=useParams().userId;
    const nav=useNavigate();

    const [mode,setMode]=useState("발주");
    const [lists,setLists]=useState([]);

    useEffect(()=>{
        axiosInstance.get(`review/${userid}/${mode}`)
        .then(res=>{
            console.log(res.data.reviewDtoList);
            setLists(res.data.reviewDtoList);
        })}
    ,[mode]);

    return (
        <div className={styles.wrapper}>
            <header className='mainheader'><img src={zeromarketLogo} onClick={
            ()=>{
                nav(`/zeromarket/${userid}`)
                }}/></header>
            <div className={styles.box}>
                <span className={styles.reviewbox}>
                    <div>실시간 고객의 소리</div>
                    <div className={styles.recontent}>
                        <div className={styles.bottombox}>
                            {lists.map((list)=>(
                                <div className={styles.msg}>{list.content}</div>
                            ))}
                        </div>

                    </div>
                    <div className={styles.btns}>
                        <button className={styles.btn} onClick={(e)=>{
                            setMode("발주");
                        }}>발주</button>
                        <button className={styles.btn} onClick={(e)=>{
                            setMode("서비스");
                        }}>서비스</button>
                        <button className={styles.btn} onClick={(e)=>{
                            setMode("환불/교환");
                        }}>환불/교환</button>
                        <button className={styles.btn} onClick={(e)=>{
                            setMode("문의");
                        }}>문의</button>
                    </div>
                </span>
                <span></span>
            </div>

        </div>
    )

};

export default Review;