import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FiShield,
  FiLock,
  FiUsers,
} from "react-icons/fi";

function Home() {
  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-50
        via-white
        to-blue-50
      "
    >
      {/* Navbar */}

      <nav
        className="
          max-w-7xl
          mx-auto
          px-6
          py-6
          flex
          items-center
          justify-between
        "
      >
        <div
          className="
            text-2xl
            font-bold
            text-blue-600
          "
        >
          AuthFlow
        </div>

        <div className="flex gap-4 items-center">
          <Link
            to="/login"
            className="
              text-slate-600
              hover:text-blue-600
              font-medium
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-5
              py-2.5
              rounded-xl
              shadow-sm
              transition
            "
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          md:grid-cols-2
          gap-12
          items-center
          min-h-[80vh]
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <span
            className="
              inline-block
              mb-5
              px-4
              py-2
              rounded-full
              bg-blue-100
              text-blue-600
              font-medium
            "
          >
            Secure User Management
          </span>

          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              leading-tight
              text-slate-900
            "
          >
            Authentication
            <br />
            made simple.
          </h1>

          <p
            className="
              mt-6
              text-lg
              text-slate-600
              leading-relaxed
            "
          >
            A complete authentication platform with JWT security,
            role based access control and modern user management.
          </p>

          <div
            className="
              flex
              gap-4
              mt-8
            "
          >
            <Link
              to="/register"
              className="
                bg-blue-600
                text-white
                px-7
                py-3
                rounded-xl
                font-medium
                shadow-md
                hover:bg-blue-700
              "
            >
              Create Account
            </Link>

            <Link
              to="/login"
              className="
                px-7
                py-3
                rounded-xl
                font-medium
                border
                border-slate-300
                hover:bg-white
              "
            >
              Sign In
            </Link>
          </div>
        </motion.div>

        {/* Right Card */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            bg-white/70
            backdrop-blur
            rounded-3xl
            shadow-xl
            border
            border-white
            p-8
          "
        >
          <div className="space-y-6">
            <Feature
              icon={<FiShield />}
              title="JWT Protection"
              text="Secure API access using token based authentication."
            />

            <Feature
              icon={<FiLock />}
              title="Password Security"
              text="Encrypted passwords using bcrypt hashing."
            />

            <Feature
              icon={<FiUsers />}
              title="Role Management"
              text="Admin and user permission handling."
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}) {
  return (
    <div
      className="
        flex
        gap-5
        items-start
      "
    >
      <div
        className="
          text-blue-600
          bg-blue-100
          p-3
          rounded-xl
          text-xl
        "
      >
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        <p
          className="
            text-slate-500
            text-sm
            mt-1
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default Home;