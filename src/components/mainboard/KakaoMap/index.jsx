import { useEffect } from "react";

//상태관리로 user의 위도, 경도 받아오기
import { coordinates } from "../../../state/userInfo";
import { useRecoilValue } from "recoil";

import styles from "./index.module.css";
const {kakao} = window;

import { addresslist } from "../../../state/product";

const KakaoMap=({addr})=> {
    const addresslists=useRecoilValue(addresslist);
    useEffect(()=>{
        console.log(addresslists);
    },[])
     const userCoor = useRecoilValue(coordinates);
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(userCoor.x, userCoor.y),
            level:5
        };
        const map = new kakao.maps.Map(container,options);
        
        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();

        addresslists.forEach((add) => {
            geocoder.addressSearch(add.address, function (result, status) {
              if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      
                // 커스텀 오버레이 스타일 설정
                const content =`<div style="
                position: relative;
                width: auto;
                padding: 10px;
                margin: 30px;
                left: 0;
                -webkit-border-radius: 50px;
                -moz-border-radius: 50px;
                border-radius: 1000px;
                background-color: #FFF;
                color: #4E92F9;
                font-size: 16px;
                font-weigth:500;
              ">
                ${add.name}
                <div style="
                position: absolute;
                top: 100%;
                left: 50%;
                width: 0;
                height: 0;
                margin-left: -10px;
                border: solid transparent;
                border-color: transparent;
                border-top-color: #FFF;
                border-width: 10px;
                pointer-events: none;
                content: ' ';
                "></div>
              </div>`;
                const overlay = new kakao.maps.CustomOverlay({
                  position: coords,
                  content: content,
                  xAnchor: 0.5,
                  yAnchor: 1,
                });
      
                overlay.setMap(map);
              }
            });
          });

          if(addr) {
            //주소로 좌표를 검색합니다
            geocoder.addressSearch(addr, function(result, status) {
      
            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {
      
                 var addcoor = new kakao.maps.LatLng(result[0].y, result[0].x);
      
            //     // 결과값으로 받은 위치를 마커로 표시합니다
            //     var marker = new kakao.maps.Marker({
            //         map: map,
            //         position: coords
            //     });
      
            //     // 인포윈도우로 장소에 대한 설명을 표시합니다
            //     var infowindow = new kakao.maps.InfoWindow({
            //         content: `<div style="width:150px;text-align:center;padding:6px 0;">${name}</div>`
            //     });
            //     infowindow.open(map, marker);
      
            //     // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      
                 map.setCenter(addcoor);
             } 
             });    
          }
        
    },[addresslists]);

    
   
    return (
        <div id="map" style={{
            width:"100%",
            height:"200px"
        }}></div>
    )
}

export default KakaoMap;