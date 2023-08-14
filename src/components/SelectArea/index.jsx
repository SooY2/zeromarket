import React, { useEffect, useState } from "react";


import styles from "./index.module.css";


const arealists=["신사동","청담동","논현동","압구정동","삼성동"];

const SelectArea = (props) => {

  //지역값 state
  const [areaname,setAreaname]=useState("지역 선택");
  //서버에 t
  

  //react-select 안쓰고 구현 -> 디자인 더 완벽히 구현 가능 but 기능면에선 걍그
  const [isDropdownView, setDropdownView] = useState(false)

    const handleClickContainer = () => {
        setDropdownView(!isDropdownView);    }

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
                    props.changeArea(area);
                    setDropdownView(false);  
                  }}
                    className={styles.arealist}>서울특별시 강남구 {area}</li>
              ))}    
          </ul>}
        </div>

        
    </div>
  )
};

export default SelectArea;