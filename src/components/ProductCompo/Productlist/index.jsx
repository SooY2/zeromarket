import styles from "./index.module.css";
import { nowProductId } from "../../../state/product";
import { useRecoilState } from "recoil";

const Productlist=({product})=>{
    //백엔드에서 받아온 마감시간 타입 가공 배열->0000-00-00T00:00->0000-00-00/00:00
    const dateTimeArray = product.endTime;
    const dateString = dateTimeArray.slice(0, 3).join("-");
    const timeString = dateTimeArray.slice(3).map(num => num.toString().padStart(2, "0")).join(":");
    const dateTimeString = `${dateString}T${timeString}`;
    const [datePart, timePart] = dateTimeString.split("T");

    //현재 보고 있는 productid 값
    const [productid,setProductid]=useRecoilState(nowProductId);

    // console.log("Date:", datePart); // "2023-08-17"
    // console.log("Time:", timePart); // "08:37:36"

    const active= (product.id===productid)?styles.wrapper2:"";
    return (
        <ul className={`${styles.wrapper} ${active} `}  onClick={(e)=>{
            e.preventDefault();
            // console.log(product.id);
            setProductid(product.id);

        }}>
            {/* <li>번호</li> */}
            <img src={product.picture} alt="상품 사진"/>
            <li>{product.name}</li>
            <li>{product.category}</li>
            <li>{(product.stockQuantity<=0)?"판매완료":product.stockQuantity}</li>
            <li>{datePart}<br/>{timePart}</li>
            <li>{product.salePrice}</li>
            <li>{product.culPrice}</li>
        </ul>
    )
};

export default Productlist;