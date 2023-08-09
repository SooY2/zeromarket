import React, { useState } from "react";

import Select from "react-select";
import styles from "./index.module.css";

const options=[
    { value: '동작구', label: '동작구'},
    { value: 'ocean', label: 'Ocean'},
    { value: 'ocean', label: 'Ocean'},
]

const SelectArea = ({name,onChange}) => {

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
    onChange(selectedOption);
  }

  return (
    <div className={styles.wrapper}>
        <label>지역설정</label>
        <Select
          name={name}
            className={styles.select}
            options={options}
            styles={customStyles}
            placeholder="지역 설정"
            onChange={handleSelect}
        >
        </Select>

        
    </div>
  )
};

export default SelectArea;