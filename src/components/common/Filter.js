import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
display: flex;
gap: 10px;
margin-bottom: 20px;
`;

    const FilterButton = styled.button`
    padding: 8px 16px;
    border: 1px solid;
    border-color: ${props => props.isActive ? props.activeColor : '#eee'};  // 활성화 상태에 따른 테두리 색상
    border-radius: 20px;
    background: white;  // 배경색은 항상 흰색
    color: #333;  // 텍스트 색상은 항상 동일
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;

    &:hover {
        border-color: ${props => props.activeColor};  // hover 시 해당 색상의 테두리
        background: #f8f9fa;  // hover 시 배경색 살짝 변경
    }
    `;

    const FILTER_OPTIONS = [
    { id: 'all', label: '전체', color: '#666666' },
    { id: 'upcoming', label: '진행예정', color: '#FFE66D' },
    { id: 'ongoing', label: '진행중', color: '#00CED1' },
    { id: 'ended', label: '종료', color: '#FF8C94' }
    ];

const Filter = ({ activeFilter, onFilterChange }) => {
return (
<FilterContainer>
    {FILTER_OPTIONS.map(filter => (
    <FilterButton
        key={filter.id}
        isActive={activeFilter === filter.id}
        activeColor={filter.color}
        onClick={() => onFilterChange(filter.id)}
    >
        {filter.label}
    </FilterButton>
    ))}
</FilterContainer>
);
};

export default Filter;