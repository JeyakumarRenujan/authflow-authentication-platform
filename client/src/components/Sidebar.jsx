import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  FiHome,
  FiUser,
  FiSettings,
  FiUsers,
  FiLogOut,
} from "react-icons/fi";

import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const {
    user,
    logout,
  } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  const handleLogout = () => {
    logout();

    setTimeout(()=>{
        navigate("/");
    },0);

    
  };

  const navStyle = (path) =>
    `
      flex
      items-center
      gap-3
      px-4
      py-3
      rounded-lg
      transition

      ${
        location.pathname === path
          ? "bg-blue-600 text-white"
          : "text-slate-600 hover:bg-slate-100"
      }
    `;

  return (
    <aside
      className="
        w-64
        min-h-screen
        bg-white
        border-r
        border-slate-200
        p-6
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

      <nav className="space-y-3">
        <Link
          className={navStyle("/dashboard")}
          to="/dashboard"
        >
          <FiHome />

          Dashboard
        </Link>

        <Link
          className={navStyle("/profile")}
          to="/profile"
        >
          <FiUser />

          Profile
        </Link>

        <Link
          className={navStyle("/settings")}
          to="/settings"
        >
          <FiSettings />

          Settings
        </Link>

        {user?.role === "admin" && (
          <Link
            className={navStyle("/users")}
            to="/users"
          >
            <FiUsers />

            Users
          </Link>
        )}

        <button
          onClick={handleLogout}
          className="
            flex
            items-center
            gap-3
            px-4
            py-3
            text-red-500
            w-full
            mt-10
          "
        >
          <FiLogOut />

          Logout
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;