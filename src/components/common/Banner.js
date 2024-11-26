import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
    width: 100%;
    height: 400px;
    background: #f8f9fa;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    `;

    const BannerContent = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 0 20px;
    `;

    const Title = styled.h2`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 16px;
    `;

    const Description = styled.p`
    font-size: 18px;
    color: #666;
    `;

    const MainBanner = () => {
    return (
        <BannerContainer>
        <BannerContent>
            <Title>팝업</Title>
            <Description>팝팝팝</Description>
        </BannerContent>
        </BannerContainer>
    );
    };

    export default MainBanner;
