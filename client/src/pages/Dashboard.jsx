import DashboardLayout from "../layouts/DashboardLayout";

import { motion } from "framer-motion";

import {
  FiUser,
  FiShield,
  FiLock,
} from "react-icons/fi";

import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
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
        {/* Header */}

        <div className="mb-10">
          <h1
            className="
              text-4xl
              font-black
              bg-gradient-to-r
              from-[#14B8A6]
              via-[#6366F1]
              to-[#A855F7]
              bg-clip-text
              text-transparent
            "
          >
            Dashboard
          </h1>

          <p
            className="
              mt-2
              text-slate-600
            "
          >
            Manage your secure AuthFlow account
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            grid
            md:grid-cols-3
            gap-8
          "
        >
          <DashboardCard
            icon={<FiUser />}
            title="Logged User"
            value={user?.name}
          />

          <DashboardCard
            icon={<FiShield />}
            title="Account Role"
            value={user?.role}
          />

          <DashboardCard
            icon={<FiLock />}
            title="Security"
            value="JWT Protected"
          />
        </div>
      </motion.div>
    </DashboardLayout>
  );
}

function DashboardCard({
  icon,
  title,
  value,
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="
        bg-white/45
        backdrop-blur-2xl
        border
        border-white/70
        rounded-[2rem]
        shadow-xl
        p-8
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
          mb-6
        "
      >
        {icon}
      </div>

      <h2
        className="
          text-slate-500
          font-semibold
        "
      >
        {title}
      </h2>

      <h1
        className="
          mt-3
          text-2xl
          font-bold
          text-slate-900
          capitalize
        "
      >
        {value}
      </h1>
    </motion.div>
  );
}

export default Dashboard;