import { useState, useMemo } from 'react';

export const usePopupPagination = (items, pagesize = 8) => {
    const [currentPage, setCurrentPage] = useState(1);

// 전체 페이지 수 계산 - items 길이나 페이지당 아이템 수가 변경될 때만 재계산
const totalPages = useMemo(() => {
    console.log('총 페이지 수 계산:', Math.ceil(items.length / pagesize));
    return Math.ceil(items.length / pagesize);
}, [items.length, pagesize]);

// 현재 페이지에 표시할 아이템들 - 현재 페이지, items, 페이지당 아이템 수가 변경될 때만 재계산
const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * pagesize;
    console.log('현재 페이지 아이템:', startIndex, startIndex + pagesize);
    return items.slice(startIndex, startIndex + pagesize);
}, [items, currentPage, pagesize]);

// 페이지 변경 함수
const handlePageChange = (pageNumber) => {
    console.log('페이지 변경 시도:', pageNumber);
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
};

const resetPage = () => {
    setCurrentPage(1);
};

return { currentPage, totalPages, currentItems, handlePageChange, resetPage };
};