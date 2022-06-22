import React, { useEffect, useState } from 'react';

const MapContainer = (props:any) => {
    const { kakao } = window;
    const latitude= 37.45161592955936;
    const longitude = 126.65354774270169

    const KakaoMap = () => {
        let container = document.getElementById('map');
        let options = {
          center: new kakao.maps.LatLng(37.45161592955936, 126.65354774270169),
          level: 3
        };
        let map = new kakao.maps.Map(container, options);
        map.setDraggable(false);
        let markerPosition  = new kakao.maps.LatLng(latitude, longitude);
        let marker= new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map)
    }

    useEffect(() => {
        KakaoMap()
      }, [])

    return (
        <div id='map' className='map-box'></div>
    );
}

export default MapContainer; 