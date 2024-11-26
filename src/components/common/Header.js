import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import popspotLogo from '../../assets/images/popspotlogo.png';  // 이미지 import

const HeaderContainer = styled.div`
height: 60px;
display: flex;
align-items: center;
`;

const Logo = styled(Link)`
img {
    height: 30px;
}
`;

const Header = () => {
return (
    <HeaderContainer>
    <Logo to="/">
        <img src={popspotLogo} alt="POPSPOT" /> 
    </Logo>
    </HeaderContainer>
);
};

export default Header;