/**mainboard의 상품카드 컴포넌트 */
import Timer from "../../ProductCompo/Timer";
import styles from "./index.module.css";

import { useEffect, useState } from "react";


const data={
    name: "string",
    picture: "string",
    category: "string",
    stockQuantity: 0,
    endTime: "2023-08-17T04:38:14.848Z",
    salePrice: 0,
    culPrice: 0
}

const ProductCard=(props)=>{
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
      },[])
      

    return(<div className={styles.wrapper}>
        <div className={styles.productImg}><img src="https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/article/__icsFiles/artimage/2018/05/29/c_km601/wholebread540.jpg" /></div>
        <div className={styles.storename}>{data.storename}</div>
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