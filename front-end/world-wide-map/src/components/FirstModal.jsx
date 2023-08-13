import React from "react";
import minimap from "../assets/miniWorldMapImage.png";

export default function FirstModal() {
  return (
    <div>
      <p style={{fontWeight: "bold"}}>세계지도의 빨간 점은 조회수 Top 3 지역을 보여줍니다. </p>
      <p style={{fontWeight: "bold"}}>마우스를 올려 펼쳐보세요!</p>
      <img src={minimap} alt="" style={{borderRadius: "10px"}}/>
    </div>
  );
}
