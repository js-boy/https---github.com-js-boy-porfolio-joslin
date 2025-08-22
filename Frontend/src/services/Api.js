import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchPorfolioMessage = async () => {
    try {
        const response = await api.get('/api/active-sections');
        return response.data;
    } catch (error) {
        // Log error to error reporting service
        logError('API Error:', error);
        throw error;
    }
};