import Korea from "../assets/flag/한국.png"
import USA from "../assets/flag/미국.png"
import Japan from "../assets/flag/일본.png"
import India from "../assets/flag/인도.png"
import France from "../assets/flag/프랑스.png"
import Germany from "../assets/flag/독일.png"
import UK from "../assets/flag/영국.png"
import Italia from "../assets/flag/이탈리아.png"
import Vietnam from "../assets/flag/베트남.png"
import Canada from "../assets/flag/캐나다.png"
import Russia from "../assets/flag/러시아.png"
import Brazil from "../assets/flag/브라질.png"
import Australia from "../assets/flag/호주.png"
import Mexico from "../assets/flag/멕시코.png"
import Spain from "../assets/flag/스페인.png"
import Indonesia from "../assets/flag/인도네시아.png"
import Nederland from "../assets/flag/네덜란드.png"
import Philippine from "../assets/flag/필리핀.png"

export const getCountryFlag = (country) => {

    // 각 국가에 해당하는 국기 이모티콘 코드 포인트를 정의
    const countryFlags = {
        대한민국: Korea, // 🇰🇷
        미국: USA, // 🇺🇸
        일본: Japan, // 🇯🇵
        인도: India, // 🇮🇳
        프랑스: France, // 🇫🇷
        독일: Germany, // 🇩🇪
        영국: UK, // 🇬🇧
        이탈리아: Italia, // 🇮🇹
        베트남: Vietnam, // 🇻🇳
        캐나다: Canada, // 🇨🇦
        러시아: Russia, // 🇷🇺
        브라질: Brazil, // 🇧🇷
        호주: Australia, // 🇦🇺
        멕시코: Mexico, // 🇲🇽
        스페인: Spain, // 🇪🇸
        인도네시아: Indonesia, // 🇮🇩
        네덜란드: Nederland, // 🇳🇱
        필리핀: Philippine, // 🇵🇭
    };

    return countryFlags[country] || "";
};
