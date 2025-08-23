const API_URL = 'http://localhost:5000/api/auth';

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || 'Login failed');
    }
    
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      // Return the user data along with the token
      return {
        token: data.token,
        user: data.user || { id: data.id, username: data.username, email: data.email }
      };
    }
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (username: string, email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || 'Registration failed');
    }
    
    const data = await response.json();
    // Return consistent format with login response
    return {
      token: data.token,
      user: data.user || { id: data.id, username: data.username, email: data.email }
    };
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    const response = await fetch(`${API_URL}/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (!response.ok) {
      localStorage.removeItem('token');
      return null;
    }
    
    const data = await response.json();
    // Ensure we always return a consistent user object
    if (data && (data.id || data.user)) {
      return data.user || data;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching current user:', error);
    localStorage.removeItem('token');
    return null;
  }
};