// 팝업목록페이지 (메인)
// http://localhost:3000/main
import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/common/SearchBar';
import Filter from '../components/common/Filter';
import PopupList from '../components/common/PopupList';
import Banner from '../components/common/Banner';
import { usePopupSearch } from '../hooks/usePopupSearch';
import { usePopupFilter } from '../hooks/usePopupFilter';
import { usePopupList } from '../hooks/usePopupList'; 

const MainContainer = styled.div`
    width: 100%;
    `;

    const SearchFilterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
    `;

    const MainPage = () => {
        const { activeFilter, setFilter, filterPopups } = usePopupFilter();
        const { searchResults, searchPopups } = usePopupSearch();
        const { popups } = usePopupList();  // 추가: 전체 팝업 목록 가져오기
        const [searchKeyword, setSearchKeyword] = useState('');
        
    // 수정된 로직
    let filteredPopups = popups || [];
    
    // 검색어가 있을 때만 검색 결과 적용
    if (searchKeyword && searchResults) {
        filteredPopups = searchResults;
    }

    // 필터 적용 (전체 선택 시는 필터링 하지 않음)
    if (activeFilter && activeFilter !== 'all') {
        filteredPopups = filterPopups(filteredPopups);
    }

    const handleSearch = async (keyword) => {
        setSearchKeyword(keyword);
        if (keyword) {
            await searchPopups(keyword);
        }
    };
        return (
            <MainContainer>
                <Banner />
                <SearchFilterContainer>
                    <Filter 
                        activeFilter={activeFilter} 
                        onFilterChange={setFilter} 
                    />
                    <SearchBar 
                        onSearch={handleSearch} 
                    />
                </SearchFilterContainer>
                <PopupList
                    displayedPopups={filteredPopups|| []}  // undefined 방지  
                    searchKeyword={searchKeyword}
                    activeFilter={activeFilter}
                />
            </MainContainer>
        );
    };
    
    export default MainPage;