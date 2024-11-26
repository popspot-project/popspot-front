import React, { useState } from 'react';
import styled from 'styled-components';
import media from '../../styles/media'; 

const SearchContainer = styled.div`
display: flex;  
gap: 10px;     // 버튼과의 간격
margin-bottom: 20px;

${media.max.mobile} {
    margin-bottom: 10px;
}
`;

const SearchInput = styled.input`
flex: 1; 
padding: 12px;
border: 1px solid #eee;
border-radius: 4px;
font-size: 14px;

&:focus {
    outline: none;
    border-color: #007bff;
}

${media.max.mobile} {
    padding: 10px;
}
`;

const SearchButton = styled.button`
    padding: 0 20px;
    background: #ffe66d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    
    &:hover {
        background: #ff6b6b;
    }

    &:disabled {
        background: #cccccc;
        cursor: not-allowed;
    }
    `;


const SearchBar = ({ onSearch }) => {
const [keyword, setKeyword] = useState('');

const validateLength = (value) => {
    if (value.length < 2) {
    return '검색어는 2자 이상 입력해주세요.';
    }
    if (value.length > 30) {
    return '검색어는 30자 이하로 입력해주세요.';
    }
    return '';
};

const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage = validateLength(keyword);
    if (errorMessage) {
        alert(errorMessage);  // alert로 에러 메시지 표시
        return;
    }
    if (onSearch) {  // onSearch 존재 여부 체크 추가
        onSearch(keyword);
    }
    // 검색 로직
    console.log('검색어:', keyword);
    };


return (
<form onSubmit={handleSubmit}>
<SearchContainer>
    <SearchInput 
    type="text" 
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
    placeholder="팝업을 검색하세요"
    />
    <SearchButton type="submit">
    검색
    </SearchButton>
</SearchContainer>
</form>
);
};

export default SearchBar;