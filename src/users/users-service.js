import axios from "axios";

export const createUser = async () => {};

export const findAllUsers = async () => {
  const response = await axios.get("http://localhost:4000/users");
  return response.data;
};

export const deleteUser = async (uid) => {};

export const updateUser = async (uid, userUpdates) => {};
