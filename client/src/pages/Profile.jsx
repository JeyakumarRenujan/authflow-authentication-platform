import DashboardLayout from "../layouts/DashboardLayout";

import Card from "../components/ui/Card";

import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Profile
      </h1>

      <Card className="max-w-xl">
        <p>
          Name:{" "}
          {user?.name}
        </p>

        <p className="mt-4">
          Email:{" "}
          {user?.email}
        </p>

        <p className="mt-4">
          Role:{" "}
          {user?.role}
        </p>
      </Card>
    </DashboardLayout>
  );
}

export default Profile;