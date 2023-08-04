
const getData = async () => {
  try {
    const response = await fetch('http://223.130.139.67:8000/Issue/?format=json')
      .then((res) => console.log(res))
    const jsonData = await response.json();
    return jsonData[0]?.title || '';
  }
  catch (error) {
    console.error('Error fetching data:', error);
    return '';
  }
};

export { getData };
