import React, {useState} from "react";

export default function PatchVisitCount(newsData) {

  // 현재 visit_count의 상태가 반영되게 설정
  const [visitCount, setVisitCount] = useState(newsData.visit_count);

  const handleUpdateVisitCount = async () => {
    try {
      const url = `http://223.130.139.67:8000/Issue/${newsData.id}/`;
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({visit_count: visitCount + 1}),
      });
  
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
      {handleUpdateVisitCount};
    </div>
  );
}
