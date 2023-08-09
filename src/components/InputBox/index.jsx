/**로그인, 회원가입 input components
 * props : label="" placeholder=""
 */

import styles from "./index.module.css";
import {useState} from "react"

const InputBox =({type,label,name,placeholder})=>{

    const [content,setContent] = useState("");

    return (
        <div className={styles.inputBox}>
            <div style={{display:"flex", position:"relative", width:"100%"}}>
                <label>{label}</label>
                <div style={{color:"red",fontSize:"12px",position:"absolute",left:"70px"}}>
                    {false&&`${label}가 올바르지 않습니다.`}</div>
            </div>
            <input type={type} name={name} placeholder={placeholder} value={content} 
                onChange={e=>{
                    e.preventDefault();
                    setContent(e.target.value);
                }}></input>
                
        </div>
    )
};

export default InputBox;