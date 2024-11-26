import { useState, useCallback } from 'react';

export const usePopupModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const handleOpen = useCallback((data) => {
        console.log('모달 열기:', data); // 디버깅용
        setSelectedData(data);
        setIsOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
        setSelectedData(null);
    }, []);

    const handleOutsideClick = useCallback((event) => {
        if (event.target === event.currentTarget) {
        handleClose();
        }
    }, [handleClose]);

    return {
        isOpen,
        selectedData,
        handleOpen,
        handleClose,
        handleOutsideClick
    };
};