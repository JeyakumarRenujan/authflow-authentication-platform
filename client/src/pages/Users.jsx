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
        Users Management
      </h1>

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
                  border-white/60
                  text-slate-700
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
                  className="
                    border-b
                    border-white/50
                    text-slate-600
                    hover:bg-white/40
                    transition
                  "
                >
                  <td
                    className="
                      py-4
                      font-medium
                      text-slate-800
                    "
                  >
                    {user.name}
                  </td>

                  <td>
                    {user.email}
                  </td>

                  <td>
                    <span
                      className="
                        px-4
                        py-1.5
                        rounded-full
                        text-sm
                        font-bold
                        bg-gradient-to-r
                        from-[#14B8A6]/20
                        to-[#6366F1]/20
                        text-[#6366F1]
                      "
                    >
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <button
                      onClick={() =>
                        deleteHandler(
                          user._id
                        )
                      }
                      className="
                        px-4
                        py-2
                        rounded-xl
                        text-red-500
                        font-semibold
                        hover:bg-red-50
                        transition
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