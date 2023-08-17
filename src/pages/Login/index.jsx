import styles from "./index.module.css";

// import {Link} from "react-router-dom";

import InputBox from "../../../src/components/InputBox";
import Button from "../../../src/components/Button";
import LogORsignup from "../../../src/components/LoginORsignup";
import SelectArea from "../../../src/components/SelectArea";
import { useEffect, useState,useRef, useCallback } from "react";
import ExSelectArea from "../../components/ExSelectArea";

import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

import { userDong,coordinates } from "../../state/userInfo";
import { useRecoilState } from "recoil";
import axiosInstance from "../../../axiosConfig";

import zeromarketLogo from "/src/assets/zeromarketLogo.png";

const Login=()=>{
    const [id,setId]=useState("");
    const [pw,setPw]=useState("");

    const nav=useNavigate();
    const [dong,setDong]=useRecoilState(userDong);
    const [coor,setCoor]=useRecoilState(coordinates);

    //로그인
    const submitlogin=(e)=>{
        e.preventDefault();
        console.log(id,pw);
        axiosInstance.post(`/user/${id}/${pw}`)
        .then(res=>{
            console.log(res.data);
            setDong(res.data.nickname);
            setCoor({
                x:res.data.latitude,
                y:res.data.longitude,
            });
            nav(`/zeromarket/${res.data.userId}`);
        })
        .catch(err=>{
            if(err.response.status===404){
                alert("아이디와 비밀번호를 확인해주세요");
            }
        })
        
    }

 

    return (
        <div className={styles.login}>
            
            <div className={styles.tmp}>
                <img src={zeromarketLogo/}/>
                <div>재고를 재로하다</div>
            </div>
            <div className={styles.seletbox}>
                    <LogORsignup title="로그인"></LogORsignup>
                    
                    
            </div>
            <div className={styles.wrapper}>
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
            <div className={styles.gosignup}>아직 회원이 아니신가요?</div>
            <Link to="/signup">회원가입 하러가기 ></Link>
            
        </div>
    )
};

export default Login;