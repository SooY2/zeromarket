import { useEffect } from "react";

//상태관리로 user의 위도, 경도 받아오기
import { coordinates } from "../../../state/userInfo";
import { useRecoilValue } from "recoil";

const {kakao} = window;

const KakaoMap=()=> {
    const userCoor = useRecoilValue(coordinates);
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(userCoor.x, userCoor.y),
            level:3
        };
        const map = new kakao.maps.Map(container,options);
    },[])
   
    return (
        <div id="map" style={{
            width:"100%",
            height:"200px"
        }}></div>
    )
}

export default KakaoMap;