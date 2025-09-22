import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is now an Admin!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 py-12 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Manage All Users</h2>
        <p className="text-lg font-medium text-gray-600">
          Total Users: <span className="font-bold text-black">{users.length}</span>
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-yellow-400 text-white uppercase text-sm">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-center">Role</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-gray-100 transition-colors text-gray-800"
              >
                <td className="p-3 font-medium">{index + 1}</td>
                <td className="p-3 font-semibold">{user?.name}</td>
                <td className="p-3">{user?.email}</td>
                <td className="p-3 text-center">
                  {user.role === "admin" ? (
                    <span className="badge badge-success text-white px-3 py-1 font-medium">
                      Admin
                    </span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm bg-yellow-400 hover:bg-yellow-500 text-black rounded-full transition-transform transform hover:scale-105 tooltip"
                      data-tip="Make Admin"
                    >
                      <FaUserShield className="text-lg" />
                    </button>
                  )}
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-sm bg-red-100 hover:bg-red-200 text-red-600 rounded-full transition-transform transform hover:scale-105 tooltip"
                    data-tip="Delete User"
                  >
                    <FaTrashAlt className="text-md" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
