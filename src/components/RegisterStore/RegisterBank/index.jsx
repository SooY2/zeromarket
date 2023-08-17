import styles from "./index.module.css";
import { useState } from "react";
import Select from "react-select";

import { account,bank } from "../../../state/userInfo";
import { useRecoilState, useRecoilValue } from "recoil";

const banklist=[
    { value: '우리', label: '우리은행'},
    { value: '신한', label: '신한은행'},
    { value: '국민', label: '국민은행'},
]

const RegisterBank=({onChange})=>{
  const [storeaccount,setStoreaccount] = useRecoilState(account);
  const [storeBank,setStoreBank] = useRecoilState(bank);
    //select 안쓰고
    // const [isDropdownView, setDropdownView] = useState(false)

    // const handleClickContainer = () => {
    //     setDropdownView(!isDropdownView)
    // }

    // const handleBlurContainer = () => {
    //     setTimeout(() => {
    //     setDropdownView(false)
    //     }, 200);
    // }

    //select 써서 구현
    const customStyles = {
        control: (provided) => ({
          ...provided,
          paddingLeft:"154px",
          paddingRight:"18px",
          width: "100%",
          height: "50px",
          borderRadius: "15px",
          border: "0.7px solid #4E92F9",
          backgroundColor:"#EDF4FF",
          fontSize:"16px",
          boxSizing:"border-box",
        }),
        option: (provided) => ({
          ...provided,
          width: "100%",
          borderRadius: "5px",
          background: "#FFF",
          color: "#4A4A4A",
          fontSize:"16px",
        alignItems:"center",
        display:"felx",
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: "none"
        }),
        placeholder:(provided)=>({
            ...provided,
            fontSize:"16px",
            display:"flex",
        }),
        menu:(provided)=>({
          ...provided,
          width:"100%",
          borderRadius:"10px",
          display:"flex",
          flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }),
        singleValue:(provided)=>({
            ...provided,
            fontSize:"16px",
            display:"flex",
            justifyContent: "start",
            alignItems: "center",
        })
        
    };
        const handleSelect = (selectedOption)=>{
            setStoreBank(selectedOption.label);
            //console.log(selectedOption.value,storeaccount);
          }
        

    return (<div className={styles.wrapper}>
        <label>계좌번호 등록하기</label>

        {/* <div className={styles.bankbtn} onBlur={handleBlurContainer} onClick={handleClickContainer}>
            <div>은행 선택</div>
            <img src={isDropdownView? "/src/assets/icons/downtoggleicon.png" : "/src/assets/icons/uptoggleicon.png"}/> 
        </div>
        {isDropdownView&&
        <ul>
            {banklist.map((bank,idx)=>(
                <li key={idx} onClick={()=>{console.log(bank);}}>{bank}</li>
            ))}    
        </ul>} */}
        
        {/* select라이브러리 이용 */}
        <Select
            className={styles.select}
            options={banklist}
            styles={customStyles}
            placeholder="은행 선택"
            onChange={handleSelect}
            labelIcon={false}
            
        >
        </Select>

        <input className={styles.input} 
            type="accountNumber"
            placeholder="계좌번호를 입력해주세요"
            value={storeaccount}
            maxLength={19}
            onChange={e=>{
              e.preventDefault();
              setStoreaccount(e.target.value);
            }} />
    </div>)
};

export default RegisterBank;