import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { addNotice, updateNotice } from '../utils/api';  // api.js에서 함수 불러오기
import PropTypes from "prop-types";

const Textarea = styled.textarea`
  width: 80%;        // 너비를 부모 요소에 맞추어 확장
  height: 100px;      // 높이를 100px로 설정
  resize: none;   // 사용자가 크기 조정 가능하게 설정 (수직 방향만 가능)
  padding: 8px;       // 내부 여백을 추가하여 가독성 향상
  border: 1px solid #ccc;  // 테두리 스타일
  border-radius: 4px; // 테두리의 둥근 모서리
`;

const InputContainer = styled.div`
  display: flex;         // 가로로 배치되도록 설정
  align-items: center;   // 세로 중앙 정렬
  gap: 10px;             // 입력 필드들 간의 간격 설정
`;

// const InputLabel = styled.label`
//   margin-right: 10px;    // 레이블과 입력 필드 간의 간격 설정
// `;

// 기간과 시간을 한 줄에 나열하기 위한 상위 컨테이너
const InputWrapper = styled.div`
  display: flex;         // 가로로 배치되도록 설정
  gap: 20px;             // 각 InputContainer 사이의 간격
`;

function NoticeForm({ existingData, onSubmit, onClose }) {  // existingData가 props로 전달되는 경우 예시
  // props로 onSubmit과 onClose를 받음
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    publicUrl: "",
    image: "",
  });

  // 수정 시 기존 데이터 불러오기
  useEffect(() => {
    if (existingData) {
      setFormData(existingData);
    }
  }, [existingData]);

  // 입력값 변경 시 상태 업데이트
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 이미지 파일 선택 시 상태 업데이트
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       image: file,
  //     }));
  //   }
  // };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size < 20 * 1024 * 1024) {  // 20MB 이하만 허용
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
    } else {
      alert("20MB 이하의 이미지만 업로드 가능합니다.");
    }
  };

  // 폼 제출 시 처리
  // const handleSubmit = async () => {
  //   const dataToSave = { ...formData };

  //   const formDataToSend = new FormData();
  //   for (const key in dataToSave) {
  //     formDataToSend.append(key, dataToSave[key]);
  //   }

  //   // 이미지 파일이 있을 경우 추가
  //   if (formData.image) {
  //     formDataToSend.append("image", formData.image);
  //   }

  //   try {
  //     const response = await fetch("your-api-endpoint", {
  //       method: "POST",
  //       body: formDataToSend,
  //     });

  //     if (!response.ok) {
  //       throw new Error("데이터 전송 실패");
  //     }
  //     const result = await response.json();
  //     console.log("서버 응답:", result);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // 폼 제출 시 처리
  const handleSubmit = async () => {
    try {
      if (isEditMode && existingData.postid) {
        const result = await updateNotice(existingData.postid, formData);
        console.log("공지사항 수정 성공", result);
      } else {
        const result = await addNotice(formData);
        console.log("공지사항 추가 성공", result);
      }
      onSubmit(formData);  // 성공적으로 데이터를 제출 후 부모 컴포넌트로 전달
      onClose();  // 모달 닫기
    } catch (error) {
      console.error("공지사항 저장 실패:", error);
    }
  };

  return(
    <form>
      <h1>{existingData ? "팝업스토어 정보 수정" : "팝업스토어 정보 추가"}</h1>
      <div>
        <label>이름 : </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>장소 : </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <InputWrapper>
        <InputContainer>
          {/* <InputLabel htmlFor="startDate">기간 :</InputLabel> */}
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
          <span>~</span>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
      </InputContainer>
      <InputContainer>
          {/* <InputLabel htmlFor="startTime">시간 : </InputLabel> */}
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
          />
        <span>~</span>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
          />
        </InputContainer>
      </InputWrapper>
      <div>
        <label>웹사이트 : </label>
        <input
          type="text"
          name="publicUrl"
          value={formData.publicUrl}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>이미지 업로드 : </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div>
        <label>설명 : </label>
        <Textarea
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          maxLength={500} // 최대 글자 수 제한
        />
      </div>
      {/* <div>
        <label>인스타그램 : </label>
        <input
          type="text"
          name="instagram"
          value={formData.instagram}
          onChange={handleChange}
        />
      </div> */}
      {/* <div>
        <label>트위터 : </label>
        <input
          type="text"
          name="twitter"
          value={formData.twitter}
          onChange={handleChange}
        />
      </div> */}
      {/* <div>
        <label>상위노출 : </label>
        <select
          name="topyn"
          value={formData.topyn}
          onChange={handleChange}
        >
          <option value={"Y"}>Y</option>
          <option value={"N"}>N</option>
        </select>
      </div> */}
      {/* {preview && (
        <div>
          <p>이미지 미리보기:</p>
          <img src={preview} alt="Preview" style={{ width: "200px", height: "auto" }} />
        </div>
      )} */}
      <button type="button" onClick={handleSubmit}>
        {existingData ? "수정" : "저장"}
      </button>
    </form>
  );
}

export default NoticeForm;

