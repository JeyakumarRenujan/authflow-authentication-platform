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
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`
        w-full
        bg-blue-600
        hover:bg-blue-700
        text-white
        font-medium
        py-3
        rounded-lg
        transition
        disabled:opacity-60
        ${className}
      `}
    >
      {loading ? "Loading..." : children}
    </motion.button>
  );
}

export default Button;