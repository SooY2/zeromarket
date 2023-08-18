import CreateProduct from "../../components/ProductCompo/CreateProduct";
import Productlists from "../../components/ProductCompo/Productlists";
import styles from "./index.module.css";

import zeromarketLogo from "/src/assets/zeromarketLogo.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { productlist } from "../../state/product";
import { useRecoilState } from "recoil";

import axiosInstance from "../../../axiosConfig";

const Product=()=>{
    const nav = useNavigate();
    const userid=useParams().userId;

    const [data,setData]=useRecoilState(productlist);

    useEffect(()=>{
        //서버 호출해서 상품 리스트 가져오기
        axiosInstance.get(`/product/${userid}`)
        .then(res=>{
            console.log(res);
            setData(res.data);
        })
        .catch(err=>console.log(err));
    },[]);

    return(<div className={styles.wrapper}>
        <header className='mainheader'><img src={zeromarketLogo} onClick={
          ()=>{
            nav(`/zeromarket/${userid}`)
            }}/></header>
        <div className={styles.box}>
            <span className={styles.leftSection}>
                <CreateProduct/>
            </span>
            <span className={styles.rightSection}>
                <Productlists />
            </span>

        </div>
    </div>)
};

export default Product;