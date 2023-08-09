import SelectStoreImg from "/src/components/RegisterStore/SelectStoreImg";
import RegisterStoreAddress from "../../components/RegisterStore/RegisterStoreAdress";
import styles from "./index.module.css";

import { useCallback, useEffect, useState } from "react";

const Register=()=>{

    const [data,setData] = useState({
        imgFile:null,
        storename:"",
        storeintroduce:"",


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

    return (
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <div className={styles.storeImg}>
                    <SelectStoreImg changeImg={changeImg}/>
                </div>
                <div className={styles.storeInfo}>
                    <span>
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
                                {true&&"가게 설명을 입력해주세요"}
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
                    <span>
                        <RegisterStoreAddress/>
                        <div>
                            계좌번호 등록하기
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Register;