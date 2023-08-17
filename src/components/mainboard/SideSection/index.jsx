import styles from "./index.module.css";
import banner from "../../../assets/banner.png";
import { recentProductlist } from "../../../state/product";
import { useRecoilValue } from "recoil";

import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SideSection=()=>{
    const nav=useNavigate();

    const recentlists=useRecoilValue(recentProductlist);
    const list=recentlists[0];

        //할인율 구하기
        const calculateDiscountPercentage = (originalPrice, salePrice) => {
            const discount = originalPrice - salePrice;
            const discountPercentage = (discount / originalPrice) * 100;
            return Math.round(discountPercentage);
          };

    return(
        <div className={styles.wrapper}>
            <div className={styles.recents}>
                {recentlists.map((list)=>(
                    <div className={styles.container} onClick={()=>{
                        nav(`./${list.productId}`);
                    }}>
                    <img src={list.picture}/>
                    <div className={styles.right}>
                        <div className={styles.name}>{list.name}</div>
                        <div>
                            <div className={styles.storename}>{list.storeName}</div>
                            <div className={styles.totalPrice}>{list.salePrice}원</div>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
            <img src={banner}/>
        </div>
    )
};

export default SideSection;