import { useState } from 'react';

export const usePopupFilter = () => {
const [activeFilter, setFilter] = useState('all');

const getPopupStatus = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // 시간을 00:00:00으로 설정하여 비교
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    now.setHours(0, 0, 0, 0);

    if (start > now) return 'upcoming';
    if (end < now) return 'ended';
    return 'ongoing';
};

const filterPopups = (popups) => {
    if (!popups) return [];
    if (activeFilter === 'all') return popups;
    
    return popups.filter(popup => {
    const status = getPopupStatus(popup.startDate, popup.endDate);
    return status === activeFilter;
    });
};

return {
    activeFilter,
    setFilter,
    getPopupStatus,
    filterPopups
};
};
