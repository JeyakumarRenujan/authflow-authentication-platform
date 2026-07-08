import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  login,
  register,
  getProfile,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const data = await getProfile();

        setUser(
          data.user
        );
      }
    } catch (error) {
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (form) => {
    const data = await register(form);

    localStorage.setItem(
      "token",
      data.token
    );

    setUser(
      data.user
    );
  };

  const loginUser = async (form) => {
    const data = await login(form);

    localStorage.setItem(
      "token",
      data.token
    );

    setUser(
      data.user
    );
  };

  const logout = () => {
    localStorage.removeItem(
      "token"
    );

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        registerUser,
        loginUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};