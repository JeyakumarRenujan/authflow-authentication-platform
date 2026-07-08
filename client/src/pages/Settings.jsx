import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import Card from "../components/ui/Card";

import Input from "../components/ui/Input";

import Button from "../components/ui/Button";

import { useAuth } from "../context/AuthContext";

import {
  updateProfile,
  changePassword,
} from "../services/authService";

import toast from "react-hot-toast";

function Settings() {
  const { user } = useAuth();

  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const updateHandler = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(profile);

      toast.success(
        "Profile updated"
      );
    } catch (error) {
      toast.error(
        "Update failed"
      );
    }
  };

  const passwordHandler = async (e) => {
    e.preventDefault();

    try {
      await changePassword(password);

      toast.success(
        "Password changed"
      );

      setPassword({
        oldPassword: "",
        newPassword: "",
      });
    } catch (error) {
      toast.error(
        "Password change failed"
      );
    }
  };

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
        Settings
      </h1>

      <div
        className="
          grid
          md:grid-cols-2
          gap-6
        "
      >
        <Card
          className="
            bg-white/45
            backdrop-blur-2xl
            border
            border-white/70
            shadow-2xl
            rounded-[2rem]
          "
        >
          <h2
            className="
              font-bold
              mb-5
              text-slate-900
            "
          >
            Update Profile
          </h2>

          <form
            onSubmit={updateHandler}
            className="space-y-5"
          >
            <Input
              label="Name"
              name="name"
              value={profile.name}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  name: e.target.value,
                })
              }
            />

            <Input
              label="Email"
              name="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  email: e.target.value,
                })
              }
            />

            <Button>
              Save Changes
            </Button>
          </form>
        </Card>

        <Card
          className="
            bg-white/45
            backdrop-blur-2xl
            border
            border-white/70
            shadow-2xl
            rounded-[2rem]
          "
        >
          <h2
            className="
              font-bold
              mb-5
              text-slate-900
            "
          >
            Security
          </h2>

          <form
            onSubmit={passwordHandler}
            className="space-y-5"
          >
            <Input
              label="Current Password"
              name="oldPassword"
              type="password"
              value={password.oldPassword}
              onChange={(e) =>
                setPassword({
                  ...password,
                  oldPassword: e.target.value,
                })
              }
            />

            <Input
              label="New Password"
              name="newPassword"
              type="password"
              value={password.newPassword}
              onChange={(e) =>
                setPassword({
                  ...password,
                  newPassword: e.target.value,
                })
              }
            />

            <Button>
              Change Password
            </Button>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default Settings;