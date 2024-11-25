import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // React Router DOM을 사용하여 라우팅 처리
import img from "../assets/팝업로고.png";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 50%;
  background-color: white;
  border-bottom: 1px solid #e9ecef;
  margin: 0 auto; /* 수평 가운데 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
`;

const Logo = styled.img`
  height: 80px;
  cursor: pointer;
`;

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/"); // "/" 경로로 이동
  };

  return (
    <HeaderContainer>
      <Logo src={img} alt="팝업 로고" onClick={handleLogoClick} />
    </HeaderContainer>
  );
}

export default Header;
