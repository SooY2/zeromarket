import styles from "./index.module.css";


import { useEffect, useState } from "react";
import Button from "../../components/Button";

import  {storeAddress,storeDetailAddress,bank,account,signupInfo} from "../../state/userInfo";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
const Myzero=()=>{
    const address=useRecoilValue(storeAddress);
    const detailAddress=useRecoilValue(storeDetailAddress);
    const storebank=useRecoilValue(bank);
    const storeaccount = useRecoilValue(account);

    const nav=useNavigate();
    
    const [data,setData] = useState({
        imgFile:null,
        storename:"물고기 날다",
        storeintroduce:"횟집인가?",
        storeAddress:address,
        storeDetailAddress:detailAddress,
        storeBank:storebank,
        storeAccount:storeaccount,

    })




    
    return (
        <div className={styles.wrapper}>
            <form className={styles.box}>
                <div className={styles.storeImg}>
                    <img src="https://ganpandirect.com/sign_picture/20210719025642_1_0.jpg"/>
                </div>
                <div className={styles.storeInfo}>
                    <span className={styles.span1}>
                        <input type="text" 
                            name="storename"
                            defaultValue={data.storename}
                            className={styles.storename}
                            disabled/>
                        <div className={styles.storeintroduceBox}>
                            <div className={styles.textareaPlace}>
                                {!data.storeintroduce&&"가게 설명을 입력해주세요"}
                            </div>
                            <textarea type="text"
                                name="storeintroduce"
                                defaultValue={data.storeintroduce} 
                                className={styles.storeintroduce}
                                disabled
                                />
                        </div>
                    </span>
                    <span className={styles.span2}>
                        <div className={styles.wrapper2}>
                            <div>가게주소</div>
                            <input className={styles.input} 
                                type="text"
                                defaultValue={address}
                                placeholder="주소"
                                disabled/>
                            <input className={styles.input} 
                                type="text"
                                defaultValue={detailAddress}
                                placeholder="상세주소"
                                disabled
                                />
                            
                        </div>
                        <div className={styles.wrapper3}>
                            <label>계좌번호</label>                
                            <input className={styles.input} 
                                type="text"
                                placeholder="은행"
                                value={storeaccount} />
                            <input className={styles.input} 
                                type="text"
                                placeholder="계좌번호"
                                value={storeaccount} />
                        </div>
                    </span>
                </div>
                <div className={styles.btncontainer}>
                    <Button type="submit" title="상품 등록하러 가기" onClick={()=>{
                        nav("/registerZero/1");
                    }}/>
                    <Button type="submit" title="상세페이지 보러 가기"/>
                </div>
            </form>
            
        </div>
    )
}

export default Myzero;