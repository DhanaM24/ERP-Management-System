import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginUser = (email, password) =>
  api.post("/auth/login", { email, password });

export const getEmployees = (search = "") =>
  api.get("/employees", { params: search ? { search } : {} });

export const createEmployee = (employee) =>
  api.post("/employees", employee);

export const updateEmployee = (id, employee) =>
  api.put(`/employees/${id}`, employee);

export const deleteEmployee = (id) => api.delete(`/employees/${id}`);

export default api;
