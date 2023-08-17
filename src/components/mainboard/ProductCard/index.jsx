/**mainboard의 상품카드 컴포넌트 */
import { useNavigate } from "react-router-dom";
import Timer from "../../ProductCompo/Timer";
import styles from "./index.module.css";

import { useEffect, useState } from "react";




const ProductCard=({data})=>{
    const nav = useNavigate();
    //할인율 구하기
    const calculateDiscountPercentage = (originalPrice, salePrice) => {
        const discount = originalPrice - salePrice;
        const discountPercentage = (discount / originalPrice) * 100;
        return Math.round(discountPercentage);
      };

      //타이머 시간
      const [timedate,setTimeDate]=useState("");
      const formatDatetime=(datetimeArray)=> {
        const [year, month, day, hours, minutes] = datetimeArray;
        const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        
        return `${formattedDate}T${formattedTime}`;
      }
      useEffect(()=>{
        setTimeDate(formatDatetime(data.endTime));
        console.log(timedate);
      },[])
      

    return(<div className={styles.wrapper} onClick={
        ()=>{
            console.log("클릭");
            nav(`./${data.productId}`);
        }
    }>
        <div className={styles.productImg}><img src={data.picture} /></div>
        <div className={styles.storename}>{data.storeName}</div>
        <div className={styles.content}>
            <div className={styles.productName}>{data.name}</div>
            <div className={styles.content2}>
                <div className={styles.stock}>
                    <span>남은재고:{data.stockQuantity}개</span>
                    <span><Timer timestring={timedate}/></span>
                    {/* <span>00:15:31</span> */}
                </div>
                <div className={styles.contentright}>
                    <div className={styles.originPrice}>
                        <span>{calculateDiscountPercentage(data.culPrice,data.salePrice)}%</span>
                        <span>{data.culPrice}원</span>
                    </div>
                    <div className={styles.totalPrice}>{data.salePrice}원</div>
                </div>
            </div>
        </div>
    </div>)
};

export default ProductCard;