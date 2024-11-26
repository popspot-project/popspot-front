import axios from 'axios';
import testPopup1 from '../assets/images/testpopup1.png';
import testPopup2 from '../assets/images/testpopup2.png';
import testPopup3 from '../assets/images/testpopup3.png';
import testPopup4 from '../assets/images/testpopup4.png';
import testPopup5 from '../assets/images/testpopup5.png';
import testPopup6 from '../assets/images/testpopup6.png';
import testPopup7 from '../assets/images/testpopup7.png';
import testPopup8 from '../assets/images/testpopup8.png';
import testPopup9 from '../assets/images/testpopup9.png';

const BASE_URL = 'http://localhost:1125';  // 스프링부트 서버 주소 1125

// 더미 데이터 (API 연동 전 테스트용)
const dummyData = [
  {
    postid: 1,
    title: "2024 신년 팝업스토어",
    address: "서울 강남구 가로수길 12",
    startDate: "2024-12-01T00:00:00Z",
    endDate: "2024-12-10T00:00:00Z",
    publicUrl: "https://example.com/popup1",
    imageUrl: testPopup1
    },
    {
    postid: 2,
    title: "러블리 캐릭터 팝업",
    address: "서울 마포구 홍대로 23",
    startDate: "2024-12-11T00:00:00Z",
    endDate: "2024-12-15T00:00:00Z",
    publicUrl: "https://example.com/popup2",
    imageUrl: testPopup2
    },
    {
    postid: 3,
    title: "봄맞이 플라워 팝업",
    address: "서울 성동구 성수동 12-3",
    startDate: "2024-11-15T00:00:00Z",
    endDate: "2024-12-01T00:00:00Z",
    publicUrl: "https://example.com/popup3",
    imageUrl: testPopup3
    },
    {
    postid: 4,
    title: "성수 빈티지 마켓",
    address: "서울 성동구 성수동2가 123-45",
    startDate: "2024-11-20",
    endDate: "2024-11-27",
    publicUrl: "https://example.com/popup4",
    imageUrl: testPopup4
    },
    {
    postid: 5,
    title: "성수 청년 크리에이터",
    address: "서울 성동구 성수동1가 111-22",
    startDate: "2024-11-01",
    endDate: "2024-11-10",
    publicUrl: "https://example.com/popup5",
    imageUrl: testPopup5
    },
    {
    postid: 6,
    title: "성수동 골목 페스티벌",
    address: "서울 성동구 성수동2가 444-55",
    startDate: "2024-10-30",
    endDate: "2024-11-15",
    publicUrl: "https://example.com/popup6",
    imageUrl: testPopup6
    },
    {
    postid: 7,
    title: "성수 공방 플리마켓",
    address: "서울 성동구 성수동1가 777-88",
    startDate: "2024-11-25",
    endDate: "2024-12-25",
    publicUrl: "https://example.com/popup7",
    imageUrl: testPopup7
    },
    {
    postid: 8,
    title: "성수 디자이너 마켓",
    address: "서울 성동구 성수동2가 999-10",
    startDate: "2024-11-05",
    endDate: "2024-12-05",
    publicUrl: "https://example.com/popup8",
    imageUrl: testPopup8
    },
    {
      postid: 9,
      title: "성수 상상플래닛",
      address: "서울 성동구 성수역 3번출구",
      startDate: "2024-11-30",
      endDate: "2024-12-05",
      publicUrl: "https://example.com/popup9",
      imageUrl: testPopup9
      }
];

// axios 인스턴스 생성
const serviceapi = axios.create({
  baseURL: BASE_URL
});

// API 요청 실패시 사용할 더미 데이터 반환 함수
const getDummyResponse = (data) => ({
  status: 'success',
  message: '더미 데이터가 반환되었습니다.',
  data: data
});

// service/api.js
export const popupService = {
  getPopupList: async () => {
    // 백엔드 연동 전까지는 API 호출 주석처리
    // try {
    //   const response = await axios.get('/popspot/list');
    //   return response.data;
    // } catch (error) {
    //   console.log('API 호출 실패, 더미데이터 반환:', error);
    // }

    // 더미데이터 바로 반환
    return {
      status: 'success',
      message: '더미 데이터 조회 완료',
      data: dummyData
    };
  },


  // 필터링된 목록 조회
  getFilteredPopups: async (filteredPopup) => {
    try {
      const response = await serviceapi.get(`/popspot/list`, {
        params: { filter: filteredPopup }
      });
      return response.data;
    } catch (error) {
      console.error('팝업 목록 필터링 실패:', error);
      // 필터링된 더미 데이터 반환
      const now = new Date();
      let filteredData;
      
      switch(filteredPopup) {
        case 'upcoming':
          filteredData = dummyData.filter(popup => new Date(popup.startDate) > now);
          break;
        case 'ongoing':
          filteredData = dummyData.filter(popup => {
            const startDate = new Date(popup.startDate);
            const endDate = new Date(popup.endDate);
            return now >= startDate && now <= endDate;
          });
          break;
        case 'ended':
          filteredData = dummyData.filter(popup => new Date(popup.endDate) < now);
          break;
        default:
          filteredData = dummyData;
      }
      
      return getDummyResponse(filteredData);
    }
  },

  // 검색
  searchPopups: async (keyword) => {
    try {
      const response = await serviceapi.get('/popspot/list', {
        params: { search: keyword }
      });
      return response.data;
    } catch (error) {
      console.error('팝업 검색 실패:', error);
      // 검색된 더미 데이터 반환
      const searchResults = dummyData.filter(popup => 
        popup.title.toLowerCase().includes(keyword.toLowerCase()) ||
        popup.address.toLowerCase().includes(keyword.toLowerCase())
      );
      return getDummyResponse(searchResults);
    }
  }
};

export default serviceapi;