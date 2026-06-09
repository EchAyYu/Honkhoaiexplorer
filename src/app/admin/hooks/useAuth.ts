import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (token && user.role === 'admin') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate('/admin/login');
    }
    setLoading(false);
  }, [navigate]);

  return { isAuthenticated, loading };
}