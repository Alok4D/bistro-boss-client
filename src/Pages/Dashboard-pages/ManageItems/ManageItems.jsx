import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";


const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = UseAxiosSecure();

  const handleDeleteItem = async (item) => {
    const { _id, name } = item;
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: `Delete "${name}" from menu? This cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const response = await axiosSecure.delete(`/menu/${_id}`);
        console.log("Delete response:", response);

        if (response.data.deletedCount && response.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${name} has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
            position: "top-end",
          });
        } else {
          // In case `deletedCount` isn't provided or is zero
          console.warn("Delete did not remove any item:", response.data);
          Swal.fire({
            icon: "info",
            title: "Item not deleted",
            text: "Server returned no deletion confirmation.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error("Error deleting item:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Could not delete item. Try again later.",
        });
      }
    }
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 bg-gray-50 min-h-screen">
      <SectionTitle heading="Manage Menu Items" subHeading="Review, Edit or Delete" />

      <div className="overflow-x-auto mt-8 rounded-lg shadow-md">
        <table className="table w-full text-sm text-gray-700 bg-white border border-gray-200">
          <thead className="bg-yellow-400 text-white uppercase text-sm">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Image</th>
              <th className="p-4">Item Name</th>
              <th className="p-4 text-right">Price</th>
              <th className="p-4 text-center">Edit</th>
              <th className="p-4 text-center">Delete</th>
            </tr>
          </thead>

          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-100 transition duration-150 ease-in-out">
                <td className="p-4 font-medium">{index + 1}</td>

                <td className="p-4">
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="mask mask-squircle w-14 h-14">
                        <img src={item.image} alt={item.name} className="object-cover" />
                      </div>
                    </div>
                  </div>
                </td>

                <td className="p-4 font-semibold">{item.name}</td>

                <td className="p-4 text-right font-medium text-green-600">
                  ${item.price.toFixed(2)}
                </td>

                <td className="p-4 text-center">
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow transition-all duration-200">
                      <FaEdit className="text-base" />
                    </button>
                  </Link>
                </td>

                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-sm bg-red-100 hover:bg-red-200 text-red-600 rounded-full shadow transition-all duration-200"
                  >
                    <FaTrashAlt className="text-base" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {menu.length === 0 && (
          <div className="text-center py-10 text-gray-500 font-medium">
            No items found in the menu.
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageItems;
