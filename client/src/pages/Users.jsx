import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import Card from "../components/ui/Card";

import {
  getUsers,
  removeUser,
} from "../services/authService";

import toast from "react-hot-toast";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await getUsers();

      setUsers(
        data.users
      );
    } catch (error) {
      toast.error(
        "Admin access required"
      );
    }
  };

  const deleteHandler = async (id) => {
    if (
      !confirm(
        "Delete this user?"
      )
    ) {
      return;
    }

    try {
      await removeUser(id);

      toast.success(
        "User deleted"
      );

      loadUsers();
    } catch (error) {
      toast.error(
        "Delete failed"
      );
    }
  };

  return (
    <DashboardLayout>
      <h1
        className="
          text-3xl
          font-bold
          mb-6
        "
      >
        Users Management
      </h1>

      <Card>
        <div
          className="
            overflow-x-auto
          "
        >
          <table
            className="
              w-full
              text-left
            "
          >
            <thead>
              <tr
                className="
                  border-b
                "
              >
                <th className="py-3">
                  Name
                </th>

                <th>
                  Email
                </th>

                <th>
                  Role
                </th>

                <th>
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b"
                >
                  <td className="py-3">
                    {user.name}
                  </td>

                  <td>
                    {user.email}
                  </td>

                  <td>
                    <span
                      className="
                        px-3
                        py-1
                        bg-blue-100
                        text-blue-600
                        rounded-full
                        text-sm
                      "
                    >
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <button
                      onClick={() =>
                        deleteHandler(user._id)
                      }
                      className="
                        text-red-500
                        font-medium
                      "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardLayout>
  );
}

export default Users;