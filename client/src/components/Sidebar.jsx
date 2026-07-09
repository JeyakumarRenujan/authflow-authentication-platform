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

        setTimeout(() => {
            navigate("/");
        }, 0);
    };



    const navStyle = (path) =>
        `
            flex
            items-center
            gap-4
            px-5
            py-3.5
            rounded-2xl
            font-semibold
            transition-all
            duration-300

            ${
                location.pathname === path
                    ?
                    `
                    text-white
                    bg-gradient-to-r
                    from-[#14B8A6]
                    via-[#6366F1]
                    to-[#A855F7]
                    shadow-lg
                    shadow-indigo-200
                    `
                    :
                    `
                    text-slate-600
                    hover:bg-white/60
                    hover:shadow-md
                    `
            }
        `;



    return (
        <aside
            className="
                w-72
                max-w-[85vw]
                h-screen
                overflow-y-auto

                bg-white/45
                backdrop-blur-2xl

                border-r
                border-white/70

                shadow-2xl

                p-7
            "
        >

            {/* Logo */}

            <h1
                className="
                    text-3xl
                    font-black
                    mb-12

                    bg-gradient-to-r
                    from-[#14B8A6]
                    via-[#6366F1]
                    to-[#A855F7]

                    bg-clip-text
                    text-transparent
                "
            >
                AuthFlow
            </h1>



            {/* Navigation */}

            <nav
                className="
                    flex
                    flex-col
                    min-h-[75vh]
                "
            >

                <div className="space-y-4">

                    <Link
                        className={navStyle("/dashboard")}
                        to="/dashboard"
                    >
                        <FiHome size={20} />

                        Dashboard
                    </Link>


                    <Link
                        className={navStyle("/profile")}
                        to="/profile"
                    >
                        <FiUser size={20} />

                        Profile
                    </Link>


                    <Link
                        className={navStyle("/settings")}
                        to="/settings"
                    >
                        <FiSettings size={20} />

                        Settings
                    </Link>


                    {user?.role === "admin" && (
                        <Link
                            className={navStyle("/users")}
                            to="/users"
                        >
                            <FiUsers size={20} />

                            Users
                        </Link>
                    )}

                </div>



                <button
                    onClick={handleLogout}
                    className="
                        flex
                        items-center
                        gap-4

                        px-5
                        py-3.5

                        mt-auto

                        w-full

                        rounded-2xl

                        text-red-500
                        font-semibold

                        hover:bg-red-50

                        transition
                    "
                >
                    <FiLogOut size={20} />

                    Logout
                </button>

            </nav>

        </aside>
    );
}


export default Sidebar;