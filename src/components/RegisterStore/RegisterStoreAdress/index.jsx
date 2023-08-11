import styles from "./index.module.css";
import DaumPostcode from "react-daum-postcode";

const RegisterStoreAddress=()=>{

    //상세주소검색
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";
    
        if (data.addressType === "R") {
          if (data.bname !== "") {
            extraAddress += data.bname;
          }
          if (data.buildingName !== "") {
            extraAddress +=
              extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
          }
          fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
    
        console.log(fullAddress);
      };
    
    

    return (<div className={styles.wrapper}>
        <div>가게주소 등록하기</div>
        <button>
            <div></div>
            {false&&<DaumPostcode/>}
            
        </button>
        <input className={styles.input} 
            type="text"
            placeholder="상세주소를 입력해주세요"
            value="" />
        <input className={styles.input} 
            type="text"
            placeholder="상세주소를 입력해주세요"
            value="" />
    </div>)
}

export default RegisterStoreAddress;