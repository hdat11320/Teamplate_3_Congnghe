const API_BASE_URL = '/api';

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: Record<string, unknown>; // Sử dụng Record để mô tả đối tượng
  headers?: Record<string, string>;
}

export const fetchAPI = async (endpoint: string, options: FetchOptions = {}) => {
  const { method = 'GET', body, headers = {} } = options;

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        "allowed_secrets": "c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f",
        'Content-Type': 'application/json',
        ...headers, // Kết hợp headers từ options
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};