import { useEffect, useState } from "react";
import Modal from "../Modal";
import DeleteModal from "../DeleteModal";
import styles from "./index.module.css";
import Productlist from "../Productlist";
import axios from "axios";
import axiosInstance from "../../../../axiosConfig";
import { useParams } from "react-router-dom";

import { nowProductId } from "../../../state/product";
import { useRecoilValue } from "recoil";
// const datas=[
//     {
//         productId:123,
//         name: "크루아상",
//         picture: "",
//         category: "음식",
//         stockQuantity: 10,
//         endTime: "2023-08-17T08:37:36",
//         salePrice: 2000,
//         culPrice: 4000
//     }
// ]

const Productlists=()=>{
    const [datas,setDatas]= useState([]);
    const userid=useParams().userId;
    const productid=useRecoilValue(nowProductId);

    //모달
    const [modal,setModal]=useState(false);
    const [deletemodal,setDeleteModal]=useState(false);

    useEffect(()=>{
        //서버 호출해서 상품 리스트 가져오기
        axiosInstance.get(`/product/${userid}`)
        .then(res=>{
            console.log(res);
            setDatas(res.data);
        })
        .catch(err=>console.log(err));
    },[modal,deletemodal]);
    return (
        <div className={styles.wrapper}>
            {modal&&<Modal show={setModal}/>}
            {deletemodal&&<DeleteModal show={setDeleteModal}/>}
            <div className={styles.box}>
                <ul className={styles.header}>
                    {/* <li>번호</li> */}
                    <li>상품사진</li>
                    <li>상품명</li>
                    <li>카테고리</li>
                    <li>재고 수량</li>
                    <li>마감일시</li>
                    <li>판매가</li>
                    <li>정상가</li>
                </ul>
                <div>
                {datas.map((data)=>(
                     <Productlist key={data.id} product={data}/>
                ))}</div>
            </div>
            <div className={styles.storage}>
                <button  onClick={(e)=>{
                    e.preventDefault();
                    setModal(true);
                }}>판매량 저장</button>
                <button onClick={(e)=>{
                    e.preventDefault();
                    setDeleteModal(true);
                }}>삭제</button>
            </div>
        </div>
    )

};

export default Productlists;