import { useState } from 'react';
import { popupService } from '../service/api';

export const usePopupSearch = () => {
const [searchResults, setSearchResults] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const searchPopups = async (keyword) => {
try {
    setLoading(true);
    const response = await popupService.searchPopups(keyword);
    setSearchResults(response.data);
} catch (error) {
    setError('검색에 실패했습니다.');
} finally {
    setLoading(false);
}
};

return { searchResults, loading, error, searchPopups };
};
