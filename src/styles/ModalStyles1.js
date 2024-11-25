import styled from "styled-components";

// 모달 백그라운드
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); // 배경 반투명
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")}; /* 모달이 열리면 클릭 가능 */
`;

// 모달 컨텐츠 영역
export const ModalContent = styled.div`
  width: 50%;            // 모달 너비 설정
  min-width: 300px;      // 최소 너비 설정
  max-width: 80%;        // 최대 너비 설정
  height: 80%;          // 높이는 자동으로 설정
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: auto;        // 콘텐츠가 넘칠 경우 스크롤 가능
  overflow: hidden;      // 콘텐츠 넘침을 숨기도록 설정 (스크롤바 방지)
`;

