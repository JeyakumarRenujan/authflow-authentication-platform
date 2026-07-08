import { motion } from "framer-motion";

function Button({
  children,
  type = "submit",
  onClick,
  loading = false,
  className = "",
}) {
  return (
    <motion.button
      whileTap={{
        scale: 0.97,
      }}
      whileHover={{
        scale: 1.02,
      }}
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`
        w-full
        py-3.5
        rounded-2xl
        text-white
        font-bold
        bg-gradient-to-r
        from-[#14B8A6]
        via-[#6366F1]
        to-[#A855F7]
        shadow-xl
        shadow-indigo-200
        hover:opacity-95
        transition-all
        duration-300
        disabled:opacity-60
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {loading ? "Loading..." : children}
    </motion.button>
  );
}

export default Button;