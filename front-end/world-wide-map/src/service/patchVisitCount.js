import React, {useState} from "react";

export default function PatchVisitCount() {
  const [visitCount, setVisitCount] = useState(0);
  const handleUpdateVisitCount = async (countryId) => {
    try {
      const url = `http://223.130.139.67:8000/Issue/${countryId}/`;
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({visit_count: visitCount + 1}),
      });
  
      //TODO : then,catch로 변경
      if (!response.ok) {
        return ;
      }
      
      const jsonData = await response.json();
      console.log("방문 횟수 업데이트 성공:", jsonData);
      setVisitCount(visitCount + 1);
      
    } catch (error) {
      console.error("방문 횟수 업데이트 중 오류가 발생했습니다:", error);
    }
  };
  
  
  return (
    <div>
      
      <input
        type="number"
        value={visitCount}
        onChange={(e) => setVisitCount(e.target.value)}
      />
      <button onClick= {() => handleUpdateVisitCount(2)}>방문 횟수 업데이트</button>
    </div>
  );
}
