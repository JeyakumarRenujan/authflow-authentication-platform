import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav
        className="
          max-w-6xl
          mx-auto
          px-6
          py-6
          flex
          justify-between
          items-center
        "
      >
        <h1
          className="
            text-2xl
            font-bold
            text-blue-600
          "
        >
          AuthFlow
        </h1>

        <div className="space-x-4">
          <Link
            to="/login"
            className="
              text-slate-600
              font-medium
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
              bg-blue-600
              text-white
              px-5
              py-2
              rounded-lg
            "
          >
            Get Started
          </Link>
        </div>
      </nav>

      <section
        className="
          max-w-6xl
          mx-auto
          px-6
          h-[80vh]
          flex
          items-center
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2
            className="
              text-5xl
              font-bold
              leading-tight
            "
          >
            Secure Authentication Made Simple
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-slate-600
            "
          >
            A modern authentication and user management
            platform with JWT security, protected routes,
            and role based access.
          </p>

          <Link
            to="/register"
            className="
              inline-block
              mt-8
              bg-blue-600
              text-white
              px-8
              py-3
              rounded-lg
              font-medium
            "
          >
            Create Account
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;