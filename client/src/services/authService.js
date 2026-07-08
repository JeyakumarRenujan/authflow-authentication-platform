import API from "./api";

// register
export const register = async (userData) => {
  const response = await API.post(
    "/auth/register",
    userData
  );

  return response.data;
};

// login
export const login = async (userData) => {
  const response = await API.post(
    "/auth/login",
    userData
  );

  return response.data;
};

// get profile
export const getProfile = async () => {
  const response = await API.get(
    "/users/profile"
  );

  return response.data;
};