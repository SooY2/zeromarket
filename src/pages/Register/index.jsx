import SelectStoreImg from "/src/components/RegisterStore/SelectStoreImg";
import RegisterStoreAddress from "../../components/RegisterStore/RegisterStoreAdress";
import styles from "./index.module.css";

import { useEffect, useState } from "react";
import RegisterBank from "../../components/RegisterStore/RegisterBank";
import Button from "../../components/Button";

import  {storeAddress,storeDetailAddress,bank,account} from "../../state/userInfo";
import { useRecoilValue } from "recoil";


const Register=()=>{

    const address=useRecoilValue(storeAddress);
    const detailAddress=useRecoilValue(storeDetailAddress);
    const storebank=useRecoilValue(bank);
    const storeaccount = useRecoilValue(account);
    
    const [data,setData] = useState({
        imgFile:null,
        storename:"",
        storeintroduce:"",
        storeAddress:address,
        storeDetailAddress:detailAddress,
        storeBank:storebank,
        storeAccount:storeaccount,

    })
    //가게 이미지 state 변경
    const changeImg=(img)=>{
        setData({
            ...data,
            imgFile:img,
            
        })
    }

    //가게 상호명과 설명 state 변경
    const changeStoreinfo=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value,
        })
    }

    //제출
    const submitRegister=(e)=>{
        e.preventDefault();
        console.log({
            imgFile:null,
            storename:data.storename,
            storeintroduce:data.storeintroduce,
            storeAddress:address,
            storeDetailAddress:detailAddress,
            storeBank:storebank,
            storeAccount:storeaccount,
    
        });
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.box} onSubmit={submitRegister}>
                <div className={styles.storeImg}>
                    <SelectStoreImg changeImg={changeImg}/>
                </div>
                <div className={styles.storeInfo}>
                    <span className={styles.span1}>
                        <input type="text" 
                            name="storename"
                            value={data.storename}
                            onChange={(e)=>{
                                e.preventDefault();
                                //인풋 state관리하는 함수
                                changeStoreinfo(e);                              
                            }}
                            className={styles.storename}
                            placeholder="가게 상호명을 입력해주세요" />
                        <div className={styles.storeintroduceBox}>
                            <div className={styles.textareaPlace}>
                                {!data.storeintroduce&&"가게 설명을 입력해주세요"}
                            </div>
                            <textarea type="text"
                                name="storeintroduce"
                                value={data.storeintroduce}
                                onChange={(e)=>{
                                    e.preventDefault();
                                    changeStoreinfo(e);
                                }} 
                                className={styles.storeintroduce}
                                />
                            
                        </div>
                    </span>
                    <span className={styles.span2}>
                        <RegisterStoreAddress/>
                        <RegisterBank/>
                    </span>
                </div>
                <div className={styles.btncontainer}>
                    <Button type="submit" title="가게 등록 완료하기"
                    onClick={submitRegister}
                    />
                </div>
            </form>
            
        </div>
    )
};

export default Register;