import { updateShippingInfo } from "@/store/features/shippingInfoSlice";
import { FaCheckCircle, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const UserAdresses = () => {
  const shippingInfo = useSelector((state) => state.shippingInfo.info);
  const dispatch = useDispatch();
  const deleteAddress = (id) => {
  
    const itemIndex = shippingInfo.findIndex((item) => item.id === id);
    if (itemIndex === -1) return; 
  
    let updatedShippingInfo = shippingInfo.filter((_, i) => i !== itemIndex); 
    if (updatedShippingInfo.length > 0) {
      // If the deleted address was selected, pick a new selected one
      const wasSelected = shippingInfo[itemIndex].selected;
      if (wasSelected) {
        const newSelectedIndex = itemIndex > 0 ? itemIndex - 1 : 0; // Pick previous or first one
        updatedShippingInfo = updatedShippingInfo.map((item, i) => ({
          ...item,
          selected: i === newSelectedIndex,
        }));
      }
    }
  
    dispatch(updateShippingInfo(updatedShippingInfo));
    localStorage.setItem("shippingInfo", JSON.stringify(updatedShippingInfo));
  };
  const selectAddress = (id) => {
    const newShippingInfo = shippingInfo.map((item) => {
      if (item.id === id) {
        return { ...item, selected: true };
      }
      return { ...item, selected: false };
    });
    dispatch(updateShippingInfo(newShippingInfo));
    localStorage.setItem("shippingInfo", JSON.stringify(newShippingInfo));
  };
  return (
    <>
      {shippingInfo && shippingInfo.length > 0 && (
        <div className="space-y-4">
          {shippingInfo.map((item, index) => {
            const isSelected = item?.selected;
            return (
              <div
                className={`flex gap-2 p-4 items-start border rounded  drop-shadow-md overflow-hidden relative ${
                  isSelected ? "border-blue-500 bg-blue-500/10" : "bg-white"
                }`}
                key={index}
              >
                <div className="flex items-center top-3 absolute right-3 gap-1">
                  <button
                    onClick={() => deleteAddress(item.id)}
                    className="  text-primary hover:text-red-500 duration-150"
                  >
                    <MdDelete />
                  </button>
                  <button className="  text-primary hover:text-blue-500 duration-150">
                    <FaRegEdit />
                  </button>
                </div>
                <button
                  onClick={() => selectAddress(item.id)}
                  className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                    isSelected && "border-blue-500 "
                  }`}
                >
                  {isSelected && (
                    <FaCheckCircle className="text-blue-500 text-xl" />
                  )}
                </button>
                <div className="space-y-2 w-full ">
                  {" "}
                  <p>Email: {item.email}</p>
                  <p>
                    Name: {item.fname} {item.lname}
                  </p>
                  <p className="line-clamp-1">
                    Address: {item.address}, {item.apartment}, {item.city}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default UserAdresses;
