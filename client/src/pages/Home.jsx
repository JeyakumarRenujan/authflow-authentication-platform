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
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-[#CCFBF1]
        via-[#EEF2FF]
        to-[#F3E8FF]
      "
    >
      {/* Background Decorations */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="
          absolute
          top-20
          left-20
          w-72
          h-72
          bg-[#14B8A6]/25
          rounded-full
          blur-3xl
        "
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="
          absolute
          bottom-10
          right-20
          w-96
          h-96
          bg-[#A855F7]/25
          rounded-full
          blur-3xl
        "
      />

      {/* Navbar */}

      <nav
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          py-7
          flex
          justify-between
          items-center
        "
      >
        <div
          className="
            text-3xl
            font-extrabold
            bg-gradient-to-r
            from-[#14B8A6]
            via-[#6366F1]
            to-[#A855F7]
            bg-clip-text
            text-transparent
          "
        >
          AuthFlow
        </div>

        <div className="flex items-center gap-5">
          <Link
            to="/login"
            className="
              font-semibold
              text-slate-700
              hover:text-[#6366F1]
              transition
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
              px-6
              py-3
              rounded-2xl
              text-white
              font-semibold
              bg-gradient-to-r
              from-[#14B8A6]
              via-[#6366F1]
              to-[#A855F7]
              shadow-xl
              shadow-indigo-200
              hover:-translate-y-1
              transition
            "
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}

      <section
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          grid
          md:grid-cols-2
          gap-16
          items-center
          min-h-[80vh]
        "
      >
        {/* Left */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div
            className="
              inline-flex
              items-center
              mb-8
              px-5
              py-3
              rounded-full
              bg-white/50
              backdrop-blur-xl
              shadow-lg
              text-[#14B8A6]
              font-semibold
            "
          >
            Secure User Management
          </div>

          <h1
            className="
              text-6xl
              md:text-7xl
              font-black
              leading-tight
              bg-gradient-to-r
              from-[#14B8A6]
              via-[#6366F1]
              to-[#A855F7]
              bg-clip-text
              text-transparent
              drop-shadow-sm
            "
          >
            Authentication
            <br />
            made simple.
          </h1>

          <p
            className="
              mt-8
              text-lg
              leading-relaxed
              max-w-xl
              text-slate-600
            "
          >
            A complete authentication platform with JWT security,
            role based access control and modern user management.
          </p>

          <div className="flex gap-5 mt-10">
            <Link
              to="/register"
              className="
                px-8
                py-4
                rounded-2xl
                text-white
                font-bold
                bg-gradient-to-r
                from-[#14B8A6]
                via-[#6366F1]
                to-[#A855F7]
                shadow-xl
                shadow-indigo-200
                hover:scale-105
                transition
              "
            >
              Create Account
            </Link>

            <Link
              to="/login"
              className="
                px-8
                py-4
                rounded-2xl
                bg-white/50
                backdrop-blur-xl
                border
                border-white
                font-bold
                shadow-lg
                hover:bg-white
                transition
              "
            >
              Sign In
            </Link>
          </div>
        </motion.div>

        {/* Right Glass Card */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            bg-white/45
            backdrop-blur-2xl
            rounded-[2rem]
            border
            border-white/70
            shadow-2xl
            p-10
          "
        >
          <div className="space-y-8">
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
        items-center
        gap-6
        border-b
        last:border-none
        border-white/50
        pb-7
      "
    >
      <div
        className="
          w-16
          h-16
          flex
          items-center
          justify-center
          rounded-2xl
          bg-white/70
          text-3xl
          text-[#14B8A6]
          shadow-lg
        "
      >
        {icon}
      </div>

      <div>
        <h3
          className="
            text-lg
            font-bold
            text-slate-900
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-sm
            text-slate-500
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default Home;