import styled from "styled-components";

//메인페이지 전체
export const Container = styled.div`
  padding: 20px;
  width: 50%;
  height: 100%;
  background-color: #ddd224;
  margin: 0 auto; /* 수평 가운데 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
`;

export const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

export const NoticeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 레이아웃 */
  gap: 20px;
`;

export const NoticeCard = styled.div`
  position: relative; 
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const NoticeButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  color :#465d21;

  &:hover {
    background-color: #f765m2;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

//추가, 수정 전체 모달
export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 40%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 10000; /* 배경보다 위 */
`;

//... 버튼
export const MenuButton = styled.button`
  position: absolute;  /* 절대 위치 지정 */
  top: 10px;  /* 위에서 10px 떨어지게 */
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  color: #333;
`;

//...버튼 바로 밑에 수정, 삭제 묶음
export const MenuOptions = styled.div`
  position: absolute;
  top: 30px;  /* MenuButton 바로 밑에 배치 */
  right: 0;
  background-color: purple;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 5px;
  min-width: 100px;  /* 버튼의 최소 너비 설정 */
`;

//...버튼 바로 밑에 수정, 삭제 버튼
export const MenuOption = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  
  &:hover {
    background-color: pink;
  }
`;