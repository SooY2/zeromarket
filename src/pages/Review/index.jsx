import { useNavigate, useParams } from "react-router-dom";
import styles from "./index.module.css";
import zeromarketLogo from "/src/assets/zeromarketLogo.png";
import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosConfig";


const re1=[
    {id:"jjaehyun0823",content:"좀 더 수량을 늘려 주셨으면 좋겠어요!"},
    {id:"wlsilver23",content:"다 좋은데 너무 빨리 재고가 없어져요ㅠㅠ"},
]
const re2=[
    {id:"gncieed",content:"싼 가격에 살 수 있어 좋네요^^"},
    {id:"vivawave",content:"집 근처에서 싼 가격에 살 수 있다는 게 좋네요"},
    {id:"odsod",content:"마감 시간 즈음에 갔는데도 남은 제품들이 많이 있던데 그것도 올려 주시면 좋을 거 같아요"},
    {id:"sksmswldms2",content:"매장 간 김에 다른 것도 사게 만드는 것이 사장님의 빅픽쳐인가요ㅎㅎ"},
    {id:"haemuki",content:"알바생분은 친절하지 않은 거 같아요,,"},
    {id:"shmond0729",content:"사장님이 너무 친절해요~"},
    {id:"tetesta38",content:"조금 늦게 갔는데 기다려 주셔서 감사했어요!"},
]
const re3=[
    {id:"momo00",content:"같은 가격, 다른 제품으로 교환이 가능할까요?"},
    {id:"youngdo",content:"환불은 아무때나 가서 하면 될까요?"},
    {id:"lyipd",content:"환불이 안된다는 점이 아쉽네요…"},
    {id:"yumyum64",content:"교환할 필요가 없이 좋네요~"},
]
const re4=[
    {id:"kwweep",content:"상품 종류를 늘려 주시면 좋을 거 같아요!"},
    {id:"semoddung",content:"운영 시간이 조금 더 늘어나면 좋을 거 같아요"},
    {id:"1703woojin",content:"구매 가능한 시간을 늘려 주시면 좋을 거 같아요"},
    {id:"bennybun",content:"사장님 연락처도 기재해 주시면 좋을 거 같아요"},
]

const Review = ()=>{
    const userid=useParams().userId;
    const nav=useNavigate();

    const [mode,setMode]=useState("발주");
    const [lists,setLists]=useState([]);
    const [sell,setsell]=useState([]);



    useEffect(()=>{
        // axiosInstance.get(`review/${userid}/${mode}`)
        // .then(res=>{
        //     console.log(res.data.reviewDtoList);
        //     setLists(res.data.reviewDtoList);
        // })
        if (mode==="발주"){
            setLists(re1);
        }else if(mode==="서비스"){
            setLists(re2);
        }else if(mode==="환불/교환"){
            setLists(re3);
        }else if(mode==="문의"){
            setLists(re4);
        }
        
    },[mode]);

    useEffect(()=>{
        axiosInstance.get(`review/${userid}/${mode}`)
        .then(res=>{
            console.log(res.data.sellDtoList);
            setsell(res.data.sellDtoList);
        })
    },[])

    return (
        <div className={styles.wrapper}>
            <header className='mainheader'><img src={zeromarketLogo} onClick={
            ()=>{
                nav(`/zeromarket/${userid}`)
                }}/></header>
            <div className={styles.box}>
                <span className={styles.reviewbox}>
                    <div>실시간 고객의 소리</div>
                    <div className={styles.recontent}>
                        <div className={styles.bottombox}>
                            {lists.map((list,idx)=>(
                                <div>
                                    <div>{list.id}</div>
                                    <div key={idx} className={styles.msg}>{list.content}</div>
                                </div>
                                
                            ))}
                        </div>

                    </div>
                    <div className={styles.btns}>
                        <button className={styles.btn} onClick={(e)=>{
                            setMode("발주");
                        }}>발주</button>
                        <button className={styles.btn} onClick={(e)=>{
                            setMode("서비스");
                        }}>서비스</button>
                        <button className={styles.btn} onClick={(e)=>{
                            setMode("환불/교환");
                        }}>환불/교환</button>
                        <button className={styles.btn} onClick={(e)=>{
                            setMode("문의");
                        }}>문의</button>
                    </div>
                </span>
                <span className={styles.right}>
                        <div>판매완료</div>
                        <div className={styles.sellbox}>
                            <div className={styles.boxbox}>
                                <ul>
                                    <li>NO.</li>
                                    <li>상품명</li>
                                    <li>판매완료개수</li>
                                    <li>방문시간</li>
                                    <li>카테고리</li>
                                </ul>
                                {sell.map((sel)=>(
                                    <ul>
                                        <li>{sel.id}</li>
                                        <li>{sel.name}</li>
                                        <li>{sel.amount}</li>
                                        <li>{sel.sellTime}</li>
                                        <li>{sel.category}</li>
                                    </ul>
                                ))}
                            </div>
                        </div>

                </span>
            </div>

        </div>
    )

};

export default Review;