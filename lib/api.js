import axios from 'axios';

// ตรวจสอบ API URL - ต้องไม่มี trailing slash
const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://flask-todo-app-alh8.onrender.com/api';

console.log('✅ API_URL loaded from env:', API_URL);

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

// Interceptor สำหรับ debug error
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('❌ API Error:', error.response || error);
    return Promise.reject(error);
  }
);

export const todoAPI = {
  getTodos: async () => {
    const res = await api.get('/todos');
    return res.data;
  },
  createTodo: async (todo) => {
    const res = await api.post('/todos', todo);
    return res.data;
  },
  updateTodo: async (id, data) => {
    const res = await api.put(`/todos/${id}`, data);
    return res.data;
  },
  deleteTodo: async (id) => {
    const res = await api.delete(`/todos/${id}`);
    return res.data;
  },
  healthCheck: async () => {
    const res = await api.get('/health');
    return res.data;
  },
};

export default api;
