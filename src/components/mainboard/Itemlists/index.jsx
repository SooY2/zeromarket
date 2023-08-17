import ProductCard from "../ProductCard";
import styles from "./index.module.css";
import nonItem from "../../../assets/noneItem.png";
import { useEffect,useState } from "react";

import { productlist } from "../../../state/product";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";


const Itemlists=()=>{
    const lists=useRecoilValue(productlist);
    useEffect(()=>{
        console.log(lists);
    },[lists]);

    const nav=useNavigate();

    
    return (
        <div className={styles.wrapper}>
            
            {
            lists.length===0? <div className={styles.box}>
                    <img className={styles.img} src={nonItem}/>
                    <div className={styles.arrow_box}>우측 상단의 "내 재로마켓 보기" 에서 상품을 추가하세요</div>
                </div>
                :<div className={styles.grid}>
               {lists.map((list,idx)=>(
                <ProductCard className={styles.item} key={idx} data={list} />
            ))}</div>  }
            
        </div>
    )
};



export default Itemlists;