import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
margin: 40px 0;
`;

const PageButton = styled.button`
padding: 8px 12px;
border: 1px solid #eee;
border-radius: 4px;
background: ${props => props.isActive ? '#FFE66D' : 'white'};
color: ${props => props.isActive ? '#333' : '#666'};
cursor: pointer;

&:hover {
    background: ${props => props.isActive ? '#FFE66D' : '#f8f9fa'};
}

&:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(startPage + 4, totalPages);

    if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
    }

    return pageNumbers;
};

return (
    <PaginationContainer>
    <PageButton 
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        title="첫 페이지로"
    >
        {'<<'}
    </PageButton>
    <PageButton 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        title="이전 페이지"
    >
        {'<'}
    </PageButton>
    
    {getPageNumbers().map(number => (
        <PageButton
        key={number}
        isActive={currentPage === number}
        onClick={() => onPageChange(number)}
        >
        {number}
        </PageButton>
    ))}

    <PageButton 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        title="다음 페이지"
    >
        {'>'}
    </PageButton>
    <PageButton 
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        title="마지막 페이지로"
    >
        {'>>'}
    </PageButton>
    </PaginationContainer>
);
};

export default Pagination;