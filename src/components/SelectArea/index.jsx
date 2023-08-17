import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

import { signupInfo } from "../../state/userInfo";
import { useRecoilState } from "recoil";

import uptoggle from  "../../assets/icons/uptoggleicon.png";
import downtoggle from "../../assets/icons/downtoggleicon.png";


const arealists=[
  {Dong:"신사동", latitude:37.5235332, longitude:127.0230659},
  {Dong:"청담동", latitude:37.5233931 ,longitude:127.0479736 },
  {Dong:"논현동", latitude:37.5136787 ,longitude:127.0317124 },
  {Dong:"압구정동", latitude:37.5271478 ,longitude:127.0334517 },
  {Dong:"삼성동", latitude:37.5139750 ,longitude:127.0561274 },
];

const SelectArea = (props) => {

  //지역값 state
  const [areaname,setAreaname]=useState("지역 선택");
  //위도, 경도 값 바꿔주기
  const [signupinfo,setSigninfo]=useRecoilState(signupInfo);
  

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
              <img src={isDropdownView?downtoggle:uptoggle}/> 
          </div>
          {isDropdownView&&
          <ul className={styles.areacontainer}>
              {arealists.map((area,idx)=>(
                  <li key={idx} onClick={(e)=>{
                    e.preventDefault();
                    setAreaname(`서울특별시 강남구 ${area.Dong}`);
                    props.changeArea(area.Dong);
                    setDropdownView(false);
                    setSigninfo({
                      ...signupinfo,
                      latitude : area.latitude,
                      longitude : area.longitude,
                    })
                  }}
                    className={styles.arealist}>서울특별시 강남구 {area.Dong}</li>
              ))}    
          </ul>}
        </div>

        
    </div>
  )
};

export default SelectArea;