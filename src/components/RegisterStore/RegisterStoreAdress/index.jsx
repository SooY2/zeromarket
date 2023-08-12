import { useState } from "react";
import styles from "./index.module.css";
import DaumPostcode from "react-daum-postcode";

//상태관리
import { storeAddress,storeDetailAddress } from "../../../state/userInfo";
import { useRecoilState } from "recoil";


const RegisterStoreAddress=()=>{
    const [modal,setmodal]=useState(false);//모달띄울지 말지
    //주소 state
    const [address,setAddress]=useRecoilState(storeAddress);
    const [detailAddress,setDetailAddress]=useRecoilState(storeDetailAddress);
    //상세주소검색
    const handleComplete = (data) => {
        let fullAddress = data.address;//기본 주소
        let extraAddress = "";
        
        if (data.addressType === "R") {//R:도로명, J:지번
          if (data.bname !== "") {//bname: 법정동/법정리 이름
            extraAddress += data.bname;
          }
          if (data.buildingName !== "") {//buildingName: 건물명
            extraAddress +=
              extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
          }
          fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
    
        setAddress(fullAddress);
        setmodal(false);
      };
    
    

    return (<div className={styles.wrapper}>
        <div>가게주소 등록하기</div>
        {modal&&
            <DaumPostcode className={styles.areamodal}
            onComplete={handleComplete}
            autoClose={false}/>}
        <button className={styles.searchbtn} onClick={(e)=>{
            e.preventDefault();
            setmodal(true);
        }}>
            <div>주소 찾기</div>
            <img src="/src/assets/icons/searchicon.png"/>    
        </button>
        <input className={styles.input} 
            type="text"
            placeholder="상세주소를 입력해주세요"
            defaultValue={address}
            disabled/>
        <input className={styles.input} 
            type="text"
            placeholder="상세주소를 입력해주세요"
            value={detailAddress}
            onChange={(e)=>{
              e.preventDefault();
              setDetailAddress(e.target.value);
            }} />
          
    </div>)
}

export default RegisterStoreAddress;