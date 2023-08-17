import styles from "./Signup.module.css";

import InputBox from "../../../src/components/InputBox";
import Button from "../../../src/components/Button";
import LogORsignup from "../../../src/components/LoginORsignup";
import SelectArea from "../../../src/components/SelectArea";
import { useEffect, useState,useRef, useCallback } from "react";
import { Link,useNavigate } from "react-router-dom";

//상태관리
import { signupInfo, } from "../../state/userInfo";
import { useRecoilState } from "recoil";
const Signup=()=>{

    const nav = useNavigate();
    //아이디,비밀번호
    const [state,setState]=useState({
        Id:"",
        Pw:"",
        selectArea:"",
    });
    const [signinfo,setsigninfo]=useRecoilState(signupInfo);

    const [checkPw,setCheckpw]=useState("");

    const handleinput=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }

    const handleSelectArea=(e)=>{
        setState({...state,
        selectArea:e})
    };

    const submitSignup=e=>{
        e.preventDefault();
        console.log(state,checkPw);
        if(state.Pw!==checkPw) alert("비밀번호가 일치하지 않습니다.");
        else{
            //navite -> state전달
            setsigninfo({
                ...signinfo,
                signupId:state.Id,
                signupPw:state.Pw,
                signupArea:state.selectArea,
            });
            nav("register")
            
        }
        
    }

    return (
        <div className={styles.signup}>
            <div className={styles.tmp}>
                <img src="./src/assets/zeromarketLogo.png"/>
                <div>재고를 재로하다</div>
            </div>
            <div className={styles.seletbox}>
                <LogORsignup title="회원가입"></LogORsignup>    
            </div>
            <div className={styles.wrapper}>
                <form className={styles.boxSign} onSubmit={submitSignup}>
                    <div className={styles.boxbox}>
                        <InputBox name="Id" label="아이디" placeholder="아이디를 입력하세요"
                            value={state.id} onChange={handleinput}/>
                        <InputBox name="Pw" label="비밀번호" placeholder="비밀번호를 입력하세요"
                            value={state.pw} onChange={handleinput} />
                        <InputBox name="signCheckPw" type="password" label="비밀번호 확인" placeholder="비밀번호를 한 번 더 입력하세요"
                            value={checkPw} onChange={(e)=>setCheckpw(e.target.value)}/>
                        <SelectArea name="selectArea" changeArea={handleSelectArea}></SelectArea>
                        <div className={styles.btnbox}>
                            <Button title="회원가입 하기" onClick={submitSignup}></Button>
                        </div>
                    </div>
                </form>
            </div>
            <Link to="/">{`< 로그인 하러가기`}</Link>
        </div>
    )

};

export default Signup;