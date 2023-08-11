const getNewsData = async () => {
  try {
    const response = await fetch('http://223.130.139.67:8000/Issue/?format=json');
    const newsData = await response.json();
    return newsData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // 오류 발생 시 빈 배열을 반환되게 설정
  }
};

export { getNewsData };
