export const getCountryFlag = (country) => {

    // 각 국가에 해당하는 국기 이모티콘 코드 포인트를 정의
    const countryFlags = {
        대한민국: "\uD83C\uDDF0\uD83C\uDDF7", // 🇰🇷
        미국: "\uD83C\uDDFA\uD83C\uDDF8", // 🇺🇸
        일본: "\uD83C\uDDEF\uD83C\uDDF5", // 🇯🇵
        인도: "\uD83C\uDDEE\uD83C\uDDF3", // 🇮🇳
        프랑스: "\uD83C\uDDEB\uD83C\uDDF7", // 🇫🇷
        독일: "\uD83C\uDDE9\uD83C\uDDEA", // 🇩🇪
        영국: "\uD83C\uDDEC\uD83C\uDDE7", // 🇬🇧
        이탈리아: "\uD83C\uDDEE\uD83C\uDDF9", // 🇮🇹
        베트남: "\uD83C\uDDFB\uD83C\uDDF3", // 🇻🇳
        캐나다: "\uD83C\uDDE8\uD83C\uDDE6", // 🇨🇦
        러시아: "\uD83C\uDDF7\uD83C\uDDFA", // 🇷🇺
        브라질: "\uD83C\uDDE7\uD83C\uDDF7", // 🇧🇷
        호주: "\uD83C\uDDE6\uD83C\uDDFA", // 🇦🇺
        멕시코: "\uD83C\uDDF2\uD83C\uDDFD", // 🇲🇽
        스페인: "\uD83C\uDDEA\uD83C\uDDF8", // 🇪🇸
        인도네시아: "\uD83C\uDDEE\uD83C\uDDE9", // 🇮🇩
        네덜란드: "\uD83C\uDDF3\uD83C\uDDF1", // 🇳🇱
        필리핀: "\uD83C\uDDF5\uD83C\uDDED", // 🇵🇭
    };

    return countryFlags[country] || "";
};
