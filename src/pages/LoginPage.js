//Login페이지
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import popspologo from '../assets/images/popspotlogo.png';

const LoginWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: calc(100vh - 200px); // 헤더와 푸터 고려
`;

const LoginContainer = styled.div`
width: 100%;
max-width: 320px;
padding: 40px 20px;
background: white;
border-radius: 4px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
width: 120px;
height: auto;
margin-bottom: 32px;
`;

const LoginForm = styled.form`
display: flex;
flex-direction: column;
gap: 16px;
`;

const InputGroup = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`;

const Input = styled.input`
width: 100%;
padding: 12px;
border: 1px solid #ddd;
border-radius: 4px;
font-size: 14px;

&:focus {
    outline: none;
    border-color: #FFE66D;
}

&::placeholder {
    color: #999;
}
`;

const LoginButton = styled.button`
width: 100%;
padding: 12px;
background: #FFE66D;
color: #333;
border: none;
border-radius: 4px;
font-size: 14px;
font-weight: 600;
cursor: pointer;
margin-top: 8px;

&:hover {
    background: #FFD700;
}

&:disabled {
    background: #ccc;
    cursor: not-allowed;
}
`;

const ErrorMessage = styled.p`
color: #ff6b6b;
font-size: 12px;
margin: 4px 0 0;
`;

const LoginPage = () => {
const navigate = useNavigate();
const [formData, setFormData] = useState({
    id: '',
    password: ''
});
const [errors, setErrors] = useState({});

const validateForm = () => {
    const newErrors = {};
    
    // ID 검증
    if (!formData.id) {
    newErrors.id = '아이디를 입력해주세요.';
    }
    if (formData.id.includes(' ')) {
    newErrors.id = '공백은 불가합니다.';
    }

    // 비밀번호 검증
    if (!formData.password) {
    newErrors.password = '비밀번호를 입력해주세요.';
    } else if (formData.password.length < 8 || formData.password.length > 20) {
    newErrors.password = '최소 8자 이상, 최대 20자 이하입니다.';
    } else if (formData.password.includes(' ')) {
    newErrors.password = '공백은 불가합니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
    ...prev,
    [name]: value
    }));
    // 입력 시 해당 필드의 에러 메시지 제거
    if (errors[name]) {
    setErrors(prev => ({
        ...prev,
        [name]: ''
    }));
    }
};

const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
    return;
    }

    try {
    // TODO: 실제 로그인 로직 구현
    console.log('로그인 시도:', formData);
    navigate('/'); // 로그인 성공 시 메인 페이지로 이동
    } catch (error) {
    setErrors({
        login: '비밀번호가 일치하지 않습니다. 다시 시도해 주세요.'
    });
    }
};

return (
    <LoginWrapper>
    <LoginContainer>
        <Logo src={popspologo} alt="POPSPOT" />
        <LoginForm onSubmit={handleSubmit}>
        <InputGroup>
            <Input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="아이디"
            />
            {errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}
        </InputGroup>
        
        <InputGroup>
            <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호"
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputGroup>

        {errors.login && <ErrorMessage>{errors.login}</ErrorMessage>}
        
        <LoginButton type="submit">
            로그인
        </LoginButton>
        </LoginForm>
    </LoginContainer>
    </LoginWrapper>
);
};

export default LoginPage;