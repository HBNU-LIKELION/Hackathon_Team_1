const coordsToInfoTopLeft = [
  {coords: "223,257,235,268", alt: "미국"},
  {coords: "1010,286,1019,295", alt: "일본"},
  {coords: "810,355,818,362", alt: "인도"},
  {coords: "566,237,575,245", alt: "프랑스"},
  {coords: "169,159,181,170", alt: "캐나다"},
  {coords: "881,114,893,124", alt: "러시아"},
  {coords: "597,221,604,228", alt: "독일"},
  {coords: "554,209,563,218", alt: "영국"},
  {coords: "602,262,611,271", alt: "이탈리아"},
  {coords: "402,460,414,471", alt: "브라질"},
  {coords: "976,288,985,295", alt: "대한민국"},
  {coords: "916,376,923,383", alt: "베트남"},
  {coords: "993,515,1004,526", alt: "호주"},
  {coords: "225,341,236,351", alt: "멕시코"},
  {coords: "552,271,562,280", alt: "스페인"},
  {coords: "930,430,939,438", alt: "인도네시아"},
  {coords: "577,213,585,221", alt: "네덜란드"},
  {coords: "958,375,969,385", alt: "필리핀"},
];

export const coordsData = coordsToInfoTopLeft.map(({coords}) => {
  const [x1, y1, x2, y2] = coords.split(",").map(Number);
  const centerX = (x1 + x2) / 2;
  const centerY = (y1 + y2) / 2;
  const left = `${centerX - 5}px`; // 10x10 크기 중심 좌표로 변환
  const top = `${centerY - 5}px`; // 10x10 크기 중심 좌표로 변환
  return {top, left};
});