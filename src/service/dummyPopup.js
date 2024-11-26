import axios from 'axios';
import testPopup1 from '../assets/images/testpopup1.png';
import testPopup2 from '../assets/images/testpopup2.png';
import testPopup3 from '../assets/images/testpopup3.png';
import testPopup4 from '../assets/images/testpopup4.png';
import testPopup5 from '../assets/images/testpopup5.png';
import testPopup6 from '../assets/images/testpopup6.png';
import testPopup7 from '../assets/images/testpopup7.png';
import testPopup8 from '../assets/images/testpopup8.png';

const BASE_URL = 'http://localhost:8080';

export const dummyPopup = [
{
    postid: 1,
    title: "2024 신년 팝업스토어",
    address: "서울 강남구 가로수길 12",
    description: "2024년 새해 기념 팝업스토어입니다.",
    startDate: "2024-01-01T00:00:00Z",
    endDate: "2024-02-01T00:00:00Z",
    publicUrl: "https://example.com/popup1",
    imageUrl: testPopup1
    },
    {
    postid: 2,
    title: "러블리 캐릭터 팝업",
    address: "서울 마포구 홍대로 23",
    description: "인기 캐릭터와 함께하는 팝업스토어",
    startDate: "2024-02-01T00:00:00Z",
    endDate: "2024-03-01T00:00:00Z",
    publicUrl: "https://example.com/popup2",
    imageUrl: testPopup2
    },
    {
    postid: 3,
    title: "봄맞이 플라워 팝업",
    address: "서울 성동구 성수동 12-3",
    description: "봄을 맞아 준비한 플라워 브랜드 팝업",
    startDate: "2024-03-15T00:00:00Z",
    endDate: "2024-04-15T00:00:00Z",
    publicUrl: "https://example.com/popup3",
    imageUrl: testPopup3
    },
    {
    postid: 4,
    title: "성수 빈티지 마켓",
    address: "서울 성동구 성수동2가 123-45",
    description: "빈티지 의류 및 소품 판매",
    startDate: "2024-02-10",
    endDate: "2024-03-10",
    publicUrl: "https://example.com/popup4",
    imageUrl: testPopup4
    },
    {
    postid: 5,
    title: "성수 청년 크리에이터",
    address: "서울 성동구 성수동1가 111-22",
    description: "청년 예술가들의 작품 전시",
    startDate: "2024-03-01",
    endDate: "2024-04-01",
    publicUrl: "https://example.com/popup5",
    imageUrl: testPopup5
    },
    {
    postid: 6,
    title: "성수동 골목 페스티벌",
    address: "서울 성동구 성수동2가 444-55",
    description: "성수동 골목 상권 활성화 프로젝트",
    startDate: "2024-02-15",
    endDate: "2024-03-15",
    publicUrl: "https://example.com/popup6",
    imageUrl: testPopup6
    },
    {
    postid: 7,
    title: "성수 공방 플리마켓",
    address: "서울 성동구 성수동1가 777-88",
    description: "로컬 공방 작품 전시 및 판매",
    startDate: "2024-01-25",
    endDate: "2024-02-25",
    publicUrl: "https://example.com/popup7",
    imageUrl: testPopup7
    },
    {
    postid: 8,
    title: "성수 디자이너 마켓",
    address: "서울 성동구 성수동2가 999-10",
    description: "신진 디자이너 브랜드 팝업스토어",
    startDate: "2024-02-05",
    endDate: "2024-03-05",
    publicUrl: "https://example.com/popup8",
    imageUrl: testPopup8
    }
];

export const popupService = {
getPopupList: async () => {
    try {
    const response = await axios.get(`${BASE_URL}/popspot/list`);
    return response.data;
    } catch (error) {
    console.log('API 호출 실패, 더미데이터 반환:', error);
    // API 호출 실패시 더미데이터 반환
    return {
        status: 'success',
        message: '더미 데이터 조회 완료',
        data: dummyPopup
    };
    }
}
};

export default dummyPopup;