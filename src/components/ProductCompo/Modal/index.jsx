import styles from "./index.module.css";
import deleteicon from "../../../assets/icons/deleteicon.png";
import { useEffect,useState } from "react";
import axios from "axios";
import axiosInstance from "../../../../axiosConfig";
import { useParams } from "react-router-dom";

import { nowProductId } from "../../../state/product";
import { useRecoilValue } from "recoil";

const Modal=({show})=>{
    const userid=useParams().userId;
    const productid=useRecoilValue(nowProductId);
    const [sell,setSell]=useState(0);

    //detailproductdata
    const [data,setData]=useState({});
    useEffect(()=>{
        axiosInstance.get(`/product/${userid}/${productid}`)
        .then(res=>{
            console.log(res.data);
            setData(res.data);//디테일 상품의 정보들
        })
        .catch(err=>console.log(err));
    },[]);
    return (
        <div className={styles.wrapper}>
            <img src={deleteicon} onClick={(e)=>{
                show(false);
            }}/>
            <div className={styles.box}>
                <div className={styles.title}>재고 수량을 수정해주세요</div>
                <div className={styles.table}>
                    <ul>
                        <li>상품사진</li>
                        <li>상품명</li>
                        <li>카테고리</li>
                        <li>판매수량</li>
                    </ul>
                    <ul>
                        <li>{data.picture}</li>
                        <li>{data.name}</li>
                        <li>{data.category}</li>
                        <li><input type="number" className={styles.input} value={sell}
                            onChange={(e)=>{
                                e.preventDefault();
                                if(sell<data.stockQuantity){
                                    setSell(e.target.value);
                                }
    
                            }}/>개</li>
                    </ul>
                </div>
                <div className={styles.btnBox}>
                    <button onClick={(e)=>{
                        axiosInstance.post(`/sell/${userid}/${productid}`,{
                            name:data.name,
                            category:data.category,
                            amount:sell,
                            picture:data.picture,
                        })
                        .then(res=>{
                                show(false);
                            
                        })
                        .catch(err=>console.log(err));
                    }}>저장하기</button>
                    <button>전체 판매 완료하기</button>
                </div>
            </div>
        </div>
    )
};

export default Modal;