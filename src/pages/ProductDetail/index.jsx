import { useEffect,useState } from "react";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../axiosConfig";
import Timer from "../../components/ProductCompo/Timer";
import KakaoMap from "../../components/mainboard/KakaoMap";



const ProductDetail=()=>{
    const userid=useParams().userId;
    const productid=useParams().productId;
    const [data,setData]=useState({});
    const [timedate,setTimeDate]=useState("");
    const [storename,setStorename]=useState("");
    const [storeaddress,setStoreadd]=useState("");

    const formatDatetime=(datetimeArray)=> {
        const [year, month, day, hours, minutes] = datetimeArray;
        const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        
        return `${formattedDate}T${formattedTime}`;
      }

    useEffect(()=>{
        axiosInstance.get(`/product/${userid}/${productid}`)
        .then(res=>{
            console.log(res.data);
            setData(res.data);
            setTimeDate(formatDatetime(res.data.endTime));
        })
    },[]);


    //할인율 구하기
    const calculateDiscountPercentage = (originalPrice, salePrice) => {
        const discount = originalPrice - salePrice;
        const discountPercentage = (discount / originalPrice) * 100;
        return Math.round(discountPercentage);
      };
    

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span>어서오세요!</span>
                <span>{data.storeName}</span>
                <span>입니다</span> 
            </div>
            <div className={styles.content}>
                  <div className={styles.content1}>
                    <div className={styles.content1Left}>
                        <label>{storename} > {data.category}</label>
                        <img src={data.picture}></img>
                    </div>
                    <div className={styles.content1Right}>
                        <div>
                            <div className={styles.stock}>남은재고:{data.stockQuantity}개</div>
                            <div className={styles.timer}><Timer timestring={timedate}/></div>
                        </div>
                        <div className={styles.name}>{data.name}</div>
                        <div className={styles.contentright}>
                            <div className={styles.originPrice}>
                                <span>{calculateDiscountPercentage(data.culPrice,data.salePrice)}%</span>
                                <span>{data.culPrice}원</span>
                            </div>
                            <div className={styles.totalPrice}>{data.salePrice}원</div>
                        </div>
                        <button className={styles.btn}>예약현황</button>
                    </div>
                  </div>
                  
                  <div className={styles.content2}>
                    <div>가게 주소 : {data.address}</div>
                    <div className={styles.map}>
                        <KakaoMap addr={data.address}/>
                    </div>
                    
                  </div>
            </div>
            

        </div>
    )
};

export default ProductDetail;