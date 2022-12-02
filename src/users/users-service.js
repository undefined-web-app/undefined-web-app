import axios from "axios";
const BASE_URL = "http://localhost:4000";
const api = axios.create({ withCredentials: true });

export const createUser = async () => {};

export const findAllUsers = async () => {
  const response = await api.get(`${BASE_URL}/users`);
  return response.data;
};

export const register = async (user) => {
  const response = await api.post(`${BASE_URL}/register`, user);
  return response.data;
};

export const login = async (user) => {
  const response = await api.post(`${BASE_URL}/login`, user);
  console.log(response.data);
  return response.data;
};

export const profile = async () => {
  const response = await api.post(`${BASE_URL}/profile`);

  return response.data;
};

export const logout = async () => {
  const response = await api.post(`${BASE_URL}/logout`);
  return response.data;
};

export const deleteUser = async (uid) => {
  const response = await api.delete(`${BASE_URL}/users/${uid}`);
  return response.data;
};

export const updateUser = async (userUpdates) => {
  const response = await api.put(
    `${BASE_URL}/users/${userUpdates._id}`,
    userUpdates
  );
  return response.data;
};

export const addLike = async (uid, username) => {
  const response = await api.put(
      `${BASE_URL}/users/likes/${uid}`,
      username
  );
  return response.data;
};

export const findUserByUsername = async (username) => {
  const response = await api.get(`${BASE_URL}/profile/${username}`);
  const user = response.data;
  return user;
};
