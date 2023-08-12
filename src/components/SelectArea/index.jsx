import React, { useState } from "react";

import Select from "react-select";
import styles from "./index.module.css";

const options=[
    { value: '동작구', label: '동작구'},
    { value: 'ocean', label: 'Ocean'},
    { value: 'ocean', label: 'Ocean'},
]

const arealists=["신사동","청담동","논현동","압구정동","삼성동"];

const SelectArea = () => {

  //지역값 state
  const [areaname,setAreaname]=useState("지역 선택");
  //서버에 t

  const customStyles = {
    control: (provided) => ({
      ...provided,
      paddingLeft: "14px",
      width: "432px",
      height: "50px",
      borderRadius: "10px",
      border: "1px solid #4E92F9",
      fontSize:"16px",
    }),
    option: (provided) => ({
      ...provided,
      width: "432px",
      borderRadius: "5px",
      background: "#FFF",
      color: "#4A4A4A",
      fontSize:"16px"
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none"
    }),
    placeholder:(provided)=>({
        ...provided,
        fontSize:"13px",
    }),
    menu:(provided)=>({
      ...provided,
      borderRadius:"10px",
    })
    
  };

  const handleSelect = (selectedOption)=>{
    //onChange(selectedOption);
  }

  //react-select 안쓰고 구현 -> 디자인 더 완벽히 구현 가능 but 기능면에선 걍그
  const [isDropdownView, setDropdownView] = useState(false)

    const handleClickContainer = () => {
        setDropdownView(!isDropdownView)
    }

    const handleBlurContainer = () => {
        setTimeout(() => {
        setDropdownView(false)
        }, 200);
    }

  return (
    <div className={styles.wrapper}>
        <label>지역설정</label>
        <div className={styles.areaselectbox}>
          <div className={isDropdownView? styles.areabtndrop : styles.areabtn} 
            onBlur={handleBlurContainer} onClick={handleClickContainer}>
              <div>{areaname}</div>
              <img src={isDropdownView? "/src/assets/icons/downtoggleicon.png" : "/src/assets/icons/uptoggleicon.png"}/> 
          </div>
          {isDropdownView&&
          <ul className={styles.areacontainer}>
              {arealists.map((area,idx)=>(
                  <li key={idx} onClick={(e)=>{
                    e.preventDefault();
                    setAreaname(`서울특별시 강남구 ${area}`);
                    setDropdownView(false);  
                  }}
                    className={styles.arealist}>서울특별시 강남구 {area}</li>
              ))}    
          </ul>}
        </div>


        {/* <Select
          name={name}
            className={styles.select}
            options={options}
            styles={customStyles}
            placeholder="지역 설정"
            onChange={handleSelect}
        >
        </Select> */}
        <Select></Select>

        
    </div>
  )
};

export default SelectArea;