import miniCardImage from "../assets/miniCardImage.png";

export default function SecondModal() {
  return (
    <div>
      <p style={{fontWeight: "bold"}}>각 나라의 기사들은 지도 아래에서 확인하실 수 있습니다!</p>
      <p style={{fontWeight: "bold"}}>Chat gpt 가 요약해주는 세계 각국의 소식을 접해보세요.</p>
      <img src={miniCardImage} alt="" style={{borderRadius: "10px"}}/>
    </div>
  );
}
