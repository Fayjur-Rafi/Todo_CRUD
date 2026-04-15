import axios from "axios";

const API = "http://localhost:3000/todos";

export const getTodos = () => axios.get(API);

export const createTodo = (data) => axios.post(API, data);

export const deleteTodo = (id) => axios.delete(`${API}/${id}`);

export const updateTodo = (id, data) => axios.put(`${API}/${id}`, data);

export const toggleTodo = (id, completed) => axios.patch(`${API}/${id}/toggle`, { completed });
