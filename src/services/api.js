const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function
const getToken = () => localStorage.getItem('token');

// API calls
export const api = {
    // Tours
    getTours: async (params = {}) => {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${API_URL}/tours${query ? `?${query}` : ''}`);
        return response.json();
    },

    getTourBySlug: async (slug) => {
        const response = await fetch(`${API_URL}/tours/${slug}`);
        return response.json();
    },

    // Bookings
    createBooking: async (bookingData) => {
        const response = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
        });
        return response.json();
    },

    // Contact
    submitContact: async (contactData) => {
        const response = await fetch(`${API_URL}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactData)
        });
        return response.json();
    },

    // Blogs
    getBlogs: async (params = {}) => {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${API_URL}/blogs${query ? `?${query}` : ''}`);
        return response.json();
    },

    getBlogBySlug: async (slug) => {
        const response = await fetch(`${API_URL}/blogs/${slug}`);
        return response.json();
    },

    // Testimonials
    getTestimonials: async (params = {}) => {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${API_URL}/testimonials${query ? `?${query}` : ''}`);
        return response.json();
    },

    submitTestimonial: async (testimonialData) => {
        const response = await fetch(`${API_URL}/testimonials`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(testimonialData)
        });
        return response.json();
    },

    // Auth
    login: async (credentials) => {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
        }
        return data;
    },

    register: async (userData) => {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
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

    // Upload
    uploadImage: async (file) => {
        const formData = new FormData();
        formData.append('image', file);
        const response = await fetch(`${API_URL}/upload/single`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${getToken()}` },
            body: formData
        });
        return response.json();
    }
};