import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const {
    user,
    logout,
  } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <div
      className="
        w-64
        bg-white
        border-r
        border-slate-200
        p-6
        hidden
        md:block
      "
    >
      <h1
        className="
          text-2xl
          font-bold
          text-blue-600
          mb-10
        "
      >
        AuthFlow
      </h1>

      <nav className="space-y-4">
        <Link
          to="/dashboard"
          className="block text-slate-700"
        >
          Dashboard
        </Link>

        <Link
          to="/profile"
          className="block text-slate-700"
        >
          Profile
        </Link>

        <Link
          to="/settings"
          className="block text-slate-700"
        >
          Settings
        </Link>

        {user?.role === "admin" && (
          <Link
            to="/users"
            className="block text-slate-700"
          >
            Users
          </Link>
        )}

        <button
          onClick={handleLogout}
          className="
            text-red-500
            mt-10
          "
        >
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;