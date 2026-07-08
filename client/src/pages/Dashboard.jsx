import DashboardLayout from "../layouts/DashboardLayout";

import Card from "../components/ui/Card";

import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h2 className="text-slate-500">
            Logged User
          </h2>

          <h1
            className="
              text-2xl
              font-bold
              mt-3
            "
          >
            {user?.name}
          </h1>
        </Card>

        <Card>
          <h2 className="font-semibold">
            Role
          </h2>

          <p className="text-blue-600 mt-2">
            {user?.role}
          </p>
        </Card>

        <Card>
          <h2 className="font-semibold">
            Security
          </h2>

          <p className="text-green-600 mt-2">
            JWT Protected
          </p>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;