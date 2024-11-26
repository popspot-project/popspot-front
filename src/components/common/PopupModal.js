import React from 'react';
import { 
    Dialog, 
    DialogContent, 
    DialogTitle, 
    IconButton,
    } from '@mui/material';
    import CloseIcon from '@mui/icons-material/Close';
    import styled from 'styled-components';

    const StyledDialog = styled(Dialog)`
    .MuiDialog-paper {
        max-width: 800px;
        width: 90%;
        margin: 20px;
        border-radius: 8px;
    }
    `;

    const ModalHeader = styled(DialogTitle)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    `;

    const CloseButton = styled(IconButton)`
    padding: 8px;
    `;

    const ContentWrapper = styled(DialogContent)`
    padding: 24px;
    min-height: 500px;  // 모달 기본 높이 설정
    `;

    const PopupModal = ({ open, onClose, popup, onOutsideClick }) => {
    return (
        <StyledDialog
        open={open}
        onClose={onClose}
        onClick={onOutsideClick}
        maxWidth="md"
        fullWidth
        >
        <ModalHeader>
            <CloseButton onClick={onClose} aria-label="close">
            <CloseIcon />
            </CloseButton>
        </ModalHeader>
        <ContentWrapper>
            {/* 여기에 모달 내용물 넣기 */}
        </ContentWrapper>
        </StyledDialog>
    );
};

export default PopupModal;