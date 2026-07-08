import API from "./api";

// register user
export const register = async (userData) => {
  const response = await API.post(
    "/auth/register",
    userData
  );

  return response.data;
};

// login user
export const login = async (userData) => {
  const response = await API.post(
    "/auth/login",
    userData
  );

  return response.data;
};

// get logged user profile
export const getProfile = async () => {
  const response = await API.get(
    "/users/profile"
  );

  return response.data;
};

// admin - get all users
export const getUsers = async () => {
  const response = await API.get(
    "/users"
  );

  return response.data;
};

// admin - delete user
export const removeUser = async (id) => {
  const response = await API.delete(
    `/users/${id}`
  );

  return response.data;
};