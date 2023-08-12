/**로그인, 회원가입 input components
 * props : label="" placeholder=""
 */

import styles from "./index.module.css";
import {useState} from "react"

const InputBox =(props)=>{
    return (
        <div className={styles.inputBox}>
            <div style={{display:"flex", position:"relative", width:"100%"}}>
                <label>{props.label}</label>
                <div style={{color:"red",fontSize:"12px",position:"absolute",left:"70px"}}>
                    {false&&`${props.label}가 올바르지 않습니다.`}</div>
            </div>
            <input type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} 
                onChange={props.onChange}></input>
                
        </div>
    )
};

export default InputBox;