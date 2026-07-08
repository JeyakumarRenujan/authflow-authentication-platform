import { motion } from "framer-motion";

import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div
      className="
        relative
        min-h-screen
        flex
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
          left-40
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

      {/* Sidebar */}

      <div
        className="
          relative
          z-10
        "
      >
        <Sidebar />
      </div>

      {/* Page Content */}

      <main
        className="
          relative
          z-10
          flex-1
          p-8
          overflow-y-auto
        "
      >
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;