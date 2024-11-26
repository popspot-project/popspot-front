import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const LayoutWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #e1e1e1;
    `;

    const Container = styled.div`
    width: 900px;
    background-color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-shadow: none;
    `;

    const MainContent = styled.main`
    flex: 1;
    width: 100%;
    padding: 24px 40px;
    `;

    const Layout = ({ children }) => {
    return (
        <LayoutWrapper>
        <Container>
            <Header />
            <MainContent> <Outlet /></MainContent>
            <Footer />
        </Container>
        </LayoutWrapper>
    );
};

export default Layout;