import DashboardLayout from "../layouts/DashboardLayout";

import Card from "../components/ui/Card";

import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <h1
        className="
          text-3xl
          font-black
          mb-6
          bg-gradient-to-r
          from-[#14B8A6]
          via-[#6366F1]
          to-[#A855F7]
          bg-clip-text
          text-transparent
        "
      >
        Profile
      </h1>

      <Card
        className="
          max-w-xl
          bg-white/45
          backdrop-blur-2xl
          border
          border-white/70
          shadow-2xl
          rounded-[2rem]
        "
      >
        <p
          className="
            text-slate-700
            font-medium
          "
        >
          <span className="font-bold text-slate-900">
            Name:
          </span>

          {" "}

          {user?.name}
        </p>

        <p
          className="
            mt-4
            text-slate-700
            font-medium
          "
        >
          <span className="font-bold text-slate-900">
            Email:
          </span>

          {" "}

          {user?.email}
        </p>

        <p
          className="
            mt-4
            text-slate-700
            font-medium
          "
        >
          <span className="font-bold text-slate-900">
            Role:
          </span>

          {" "}

          <span
            className="
              capitalize
              bg-gradient-to-r
              from-[#14B8A6]
              to-[#6366F1]
              bg-clip-text
              text-transparent
              font-bold
            "
          >
            {user?.role}
          </span>
        </p>
      </Card>
    </DashboardLayout>
  );
}

export default Profile;