import React from "react";
import styled from "styled-components";


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
`;

function NoticeDetail({ isOpen, onClose, noticeData }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        {noticeData.logo && <ModalImage src={noticeData.logo} alt="팝업 로고" />}
        <h2>{noticeData.title}</h2>
        <p>주소: {noticeData.address}</p>
        <p>기간: {noticeData.startDate} ~ {noticeData.endDate}</p>
        <p>시간: {noticeData.startTime} ~ {noticeData.endTime}</p>
        <p>{noticeData.description}</p>
      </ModalContent>
    </ModalOverlay>
  );
}

export default NoticeDetail;
