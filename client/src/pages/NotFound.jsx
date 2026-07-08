import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function NotFound() {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        flex-col
        items-center
        justify-center
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
          duration: 0.6,
        }}
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          bg-white/45
          backdrop-blur-2xl
          border
          border-white/70
          rounded-[2rem]
          shadow-2xl
          px-16
          py-12
        "
      >
        <h1
          className="
            text-8xl
            font-black
            bg-gradient-to-r
            from-[#14B8A6]
            via-[#6366F1]
            to-[#A855F7]
            bg-clip-text
            text-transparent
          "
        >
          404
        </h1>

        <p
          className="
            mt-4
            text-slate-600
            font-semibold
          "
        >
          Page not found
        </p>

        <Link
          to="/"
          className="
            mt-8
            px-8
            py-3
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
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;