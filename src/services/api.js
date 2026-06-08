// src/services/api.js
const API_BASE_URL = 'http://localhost:5000/api';

// Helper lấy token từ localStorage
const getToken = () => localStorage.getItem('token');

// Helper xử lý response
const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Something went wrong');
    }
    return response.json();
};

// Tours API
export const tourAPI = {
    getAll: async (params = {}) => {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${API_BASE_URL}/tours${query ? `?${query}` : ''}`);
        return handleResponse(response);
    },

    getBySlug: async (slug) => {
        const response = await fetch(`${API_BASE_URL}/tours/${slug}`);
        return handleResponse(response);
    }
};

// Bookings API
export const bookingAPI = {
    create: async (bookingData) => {
        const response = await fetch(`${API_BASE_URL}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
        });
        return handleResponse(response);
    },

    trackByEmail: async (email) => {
        const response = await fetch(`${API_BASE_URL}/bookings/track/${email}`);
        return handleResponse(response);
    }
};

// Contact API
export const contactAPI = {
    submit: async (contactData) => {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactData)
        });
        return handleResponse(response);
    }
};

// Blogs API
export const blogAPI = {
    getAll: async (params = {}) => {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${API_BASE_URL}/blogs${query ? `?${query}` : ''}`);
        return handleResponse(response);
    },

    getBySlug: async (slug) => {
        const response = await fetch(`${API_BASE_URL}/blogs/${slug}`);
        return handleResponse(response);
    },

    getCategories: async () => {
        const response = await fetch(`${API_BASE_URL}/blogs/categories`);
        return handleResponse(response);
    }
};

// Testimonials API
export const testimonialAPI = {
    getAll: async (params = {}) => {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${API_BASE_URL}/testimonials${query ? `?${query}` : ''}`);
        return handleResponse(response);
    },

    submit: async (data) => {
        const response = await fetch(`${API_BASE_URL}/testimonials`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return handleResponse(response);
    }
};

// Auth API
export const authAPI = {
    login: async (credentials) => {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
        const data = await handleResponse(response);
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
        }
        return data;
    },

    register: async (userData) => {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        const data = await handleResponse(response);
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
        }
        return data;
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    getCurrentUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    getToken: () => localStorage.getItem('token')
};