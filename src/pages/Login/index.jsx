import styles from "./index.module.css";

// import {Link} from "react-router-dom";

import InputBox from "../../../src/components/InputBox";
import Button from "../../../src/components/Button";
import LogORsignup from "../../../src/components/LoginORsignup";
import SelectArea from "../../../src/components/SelectArea";
import { useEffect, useState,useRef, useCallback } from "react";
import ExSelectArea from "../../components/ExSelectArea";

import axios from "axios";

const Login=()=>{

    const [mode,setMode]=useState("LOGIN");
    const [active,setActive]=useState(true);
    const [login,setLogin]=useState(true);

    let content=<></>;


    const changeMode=(_mode)=>{
        setMode(_mode);
        setActive(!active);
        setLogin(!login);
    }

    


    //회원가입 시 필요한 state
    const [selectValue,setSelectValue]=useState("");

    const handleSelectArea=(value)=>{
        setSelectValue(value);
    }

    //로그인
    const submitlogin=(e)=>{
        e.preventDefault();
    }

    const [id,setId]=useState("");
    const [pw,setPw]=useState("");

    
    if(mode==="LOGIN"){
        content=<div className={styles.wrapper}>
        <form className={styles.box} onSubmit={submitlogin}>
            <div className={styles.boxbox}>
                <InputBox type="text" label="아이디" name="ID" value={id} placeholder="아이디를 입력하세요" onChange={e=>{e.preventDefault();setId(e.target.value)}}/>
                <InputBox type="password" label="비밀번호" name="PW" value={pw} placeholder="비밀번호를 입력하세요" onChange={e=>{e.preventDefault();setPw(e.target.value)}}/>
                <div className={styles.btnbox}>
                    <Button type="submit" title="로그인하기" onClick={submitlogin}></Button>
                </div>
            </div>
        </form>
    </div>
    }else if(mode==="SIGNUP"){
        content=<div className={styles.wrapper}>
        <form className={styles.boxSign} onSubmit={e=>{
            e.preventDefault();
            //Post요청
            console.log(e.target.signId.value,e.target.signPw.value,e.target.signCheckPw.value,selectValue.value);
            if(e.target.signPw.value!==e.target.signCheckPw) alert("비밀번호가 일치하지 않습니다.")
        }}>
            <div className={styles.boxbox}>
                <InputBox name="signId" label="아이디 입력" placeholder="아이디를 입력하세요" />
                <InputBox name="signPw" label="비밀번호 입력" placeholder="비밀번호를 입력하세요" />
                <InputBox name="signCheckPw" type="password" label="비밀번호 확인" placeholder="비밀번호를 한 번 더 입력하세요"/>
                <SelectArea name="selectArea" onChange={handleSelectArea}></SelectArea>
                {/* <ExSelectArea/> */}
                <div className={styles.btnbox}>
                    <Button title="회원가입 하기"></Button>
                </div>
            </div>
        </form>
    </div>
    }
    

    return (
        <div className={styles.login}>
            
            <div className={styles.tmp}>
                <img src="./src/assets/zeromarketLogo.png"/>
                <div>재고를 재로하다</div>
            </div>
            <div className={styles.seletbox}>
                    <LogORsignup title="로그인" active={active} onClick={(e)=>{changeMode("LOGIN")}} ></LogORsignup>
                    <LogORsignup title="회원가입" active={!active} onClick={(e)=>{changeMode("SIGNUP")}}></LogORsignup>
                
            </div>
           {content}
        </div>
    )
};

export default Login;