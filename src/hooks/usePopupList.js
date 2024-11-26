import { useState, useEffect } from 'react';
import { popupService } from '../service/api';

export const usePopupList = () => {
const [popups, setPopups] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const fetchPopups = async () => {
    try {
    setLoading(true);
    const response = await popupService.getPopupList();
    setPopups(response.data);
    } catch (error) {
    setError('팝업 목록을 불러오는데 실패했습니다.');
    } finally {
    setLoading(false);
    }
};

useEffect(() => {
    fetchPopups();
}, []);

return { popups, loading, error, refetch: fetchPopups };
};