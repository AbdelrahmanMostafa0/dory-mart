import { useDispatch, useSelector } from "react-redux";
import { updateShippingInfo } from "@/store/features/shippingInfoSlice";
import { FaCheckCircle, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UserAddresses = () => {
  const shippingInfo = useSelector((state) => state.shippingInfo.info);
  const dispatch = useDispatch();

  const selectAddress = (id) => {
    const updated = shippingInfo.map((item) => ({
      ...item,
      selected: item.id === id,
    }));
    dispatch(updateShippingInfo(updated));
    localStorage.setItem("shippingInfo", JSON.stringify(updated));
  };

  const deleteAddress = (id) => {
    const index = shippingInfo.findIndex((item) => item.id === id);
    if (index === -1) return;

    const isSelected = shippingInfo[index].selected;
    let updated = shippingInfo.filter((_, i) => i !== index);

    if (isSelected && updated.length > 0) {
      const fallbackIndex = index > 0 ? index - 1 : 0;
      updated = updated.map((item, i) => ({
        ...item,
        selected: i === fallbackIndex,
      }));
    }

    dispatch(updateShippingInfo(updated));
    localStorage.setItem("shippingInfo", JSON.stringify(updated));
  };

  if (!shippingInfo?.length) return null;

  return (
    <div className="space-y-4">
      {shippingInfo.map((item) => (
        <div
          key={item.id}
          className={`relative flex gap-2 p-4 items-start border rounded shadow-sm overflow-hidden transition-colors ${
            item.selected ? "border-blue-500 bg-blue-100/50" : "bg-white"
          }`}
        >
          {/* Actions */}
          <div className="absolute top-3 right-3 flex gap-1">
            <button
              onClick={() => deleteAddress(item.id)}
              title="Delete"
              className="text-gray-600 hover:text-red-500 transition"
            >
              <MdDelete />
            </button>
          </div>

          {/* Selection */}
          <button
            onClick={() => selectAddress(item.id)}
            title={item.selected ? "Selected" : "Select Address"}
            className={`w-5 h-5 mt-1 border-2 rounded-full flex items-center justify-center ${
              item.selected ? "border-blue-500" : "border-gray-400"
            }`}
          >
            {item.selected && (
              <FaCheckCircle className="text-blue-500 text-lg" />
            )}
          </button>

          {/* Address Info */}
          <div className="space-y-1 text-sm w-full">
            <p>
              <span className="font-medium">Email:</span> {item.email}
            </p>
            <p>
              <span className="font-medium">Name:</span> {item.fname}{" "}
              {item.lname}
            </p>
            <p className="truncate">
              <span className="font-medium">Address:</span> {item.address},{" "}
              {item.apartment}, {item.city}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserAddresses;
