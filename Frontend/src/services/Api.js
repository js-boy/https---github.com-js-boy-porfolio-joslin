import axios from 'axios';
import { logError } from '../common/utilities/errorLogger';

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
        logError('API Error:', error);
        throw error;
    }
};