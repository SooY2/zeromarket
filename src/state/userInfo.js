import {atom} from "recoil";

//회원가입 시 필요한 state들
export const signupInfo = atom({
    key:"signupInfo",
    default:{
        signupId:"",
        signupPw:"",
        signupArea:"",
    },
});


export const storeAddress = atom({
    key:"storeAddress",
    default:"",
});

export const storeDetailAddress = atom({
    key:"storeDetailAddress",
    default:"",
})

export const account = atom({
    key:"account",
    default:"",
})
export const bank = atom({
    key:"bank",
    default:"",
})

// 로그인 response로 받아오는 userId, 위도,경도 , 동이름
export const userDong = atom({
    key:"userDong",
    default:"논현동",
})

export const coordinates = atom({
    key:"coordinates",
    default:{x:37.5136787,y:127.0317124},//(37.5136787, 127.0317124)논현
})

//user가 보고있는 현재 카테고리
export const showCate = atom({
    key:"showCate",
    default:0,
})