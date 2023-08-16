import modalVideo from "../assets/modalVideo.mp4"

export default function FirstModal() {
  return (
    <div>
      <p style={{fontWeight: "bold"}}>빨간점의 크기는  뉴스 조회수를 나타냅니다. </p>
      <p style={{fontWeight: "bold"}}>마우스를 올려 확인해보세요!</p>
      <br/>
      <video src={modalVideo} style={{borderRadius: "10px",width:"584px",height:"337px"}} muted loop autoplay playsinline></video>
    </div>
  );
}
