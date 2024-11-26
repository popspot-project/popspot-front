import React, { useEffect } from 'react';  // useState 제거
import { Grid, Container } from '@mui/material';
import PopupCard from './PopupCard';
import styled from 'styled-components';
import PopupModal from './PopupModal'; 
import { usePopupModal } from '../../hooks/usePopupModal';
import { usePopupPagination } from '../../hooks/usePopupPagination';  
import Pagination from './Pagination';  

const GridContainer = styled(Container)`
    padding: 24px;
    `;

    const PopupGrid = styled(Grid)`
    max-width: 900px;
    margin: 0 auto !important;
`;

const PopupList = ({ displayedPopups, searchKeyword, activeFilter}) => {
    // 페이지네이션 hook 사용
    const {
        currentPage,
        totalPages,
        currentItems,
        handlePageChange,
        resetPage
    } = usePopupPagination(displayedPopups);

    // 모달 상태 관리
    const { 
        isOpen, 
        selectedData, 
        handleOpen, 
        handleClose, 
        handleOutsideClick 
    } = usePopupModal();

    // 검색어나 필터 변경시에만 페이지 리셋
    useEffect(() => {
        resetPage();
    }, [searchKeyword, activeFilter, resetPage]);

    const handleCardClick = (popup) => {
        handleOpen(popup);
    };

    return (
        <>    
            <GridContainer>
                <PopupGrid container spacing={3}>
                    {currentItems.length > 0 ? ( 
                        currentItems.map((popup, index) => (
                            <Grid item xs={12} sm={6} key={`popup-${popup.postid || index}`}>
                                <PopupCard 
                                    popup={popup} 
                                    onClick={() => handleCardClick(popup)}
                                />
                            </Grid>
                        ))
                    ) : (
                        <Grid item xs={12}>
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                {(searchKeyword || activeFilter) ? '검색 결과가 없습니다.' : '표시할 팝업이 없습니다.'}
                            </div>
                        </Grid>
                    )}
                </PopupGrid>

                {totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </GridContainer>
            <PopupModal 
                open={isOpen}
                onClose={handleClose}
                popup={selectedData}
                onOutsideClick={handleOutsideClick}
            />
        </>    
    );
};

export default PopupList;