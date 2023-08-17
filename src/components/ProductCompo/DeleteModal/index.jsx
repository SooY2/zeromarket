import styles from "./index.module.css";
import deleteicon from "../../../assets/icons/deleteicon.png";
import { useEffect,useState } from "react";
import axios from "axios";
import axiosInstance from "../../../../axiosConfig";
import { useParams } from "react-router-dom";

import { nowProductId } from "../../../state/product";
import { useRecoilValue } from "recoil";

const DeleteModal=({show})=>{
    const userid=useParams().userId;
    const productid=useRecoilValue(nowProductId);



    return (
        <div className={styles.wrapper}>
            
            <div className={styles.box}>
                <div className={styles.title}>상품을 삭제하시겠습니까?</div>
                <div className={styles.btnBox}>
                    <button onClick={(e)=>{
                        axiosInstance.delete(`product/${userid}/${productid}`)
                        .then(()=>{
                            show(false);
                        })
                    }}>예</button>
                    <button onClick={()=>{
                        show(false);
                    }}>아니요</button>
                </div>
            </div>
        </div>
    )
};

export default DeleteModal;