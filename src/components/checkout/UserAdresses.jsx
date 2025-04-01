import { updateShippingInfo } from "@/store/features/shippingInfoSlice";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const UserAdresses = () => {
  const shippingInfo = useSelector((state) => state.shippingInfo.info);
  const dispatch = useDispatch();
  const deleteAdreess = (id) => {
    const updatedShippingInfo = shippingInfo.filter((item) => item.id !== id);
    dispatch(updateShippingInfo(updatedShippingInfo));
    localStorage.setItem("shippingInfo", JSON.stringify(updatedShippingInfo));
  };
  return (
    <>
      {shippingInfo && shippingInfo.length > 0 && (
        <div className="space-y-4">
          {shippingInfo.map((item, index) => {
            return (
              <div
                className="space-y-2 p-4 border rounded bg-white drop-shadow-md overflow-hidden relative"
                key={index}
              >
                <div className="flex items-center top-3 absolute right-3 gap-1">
                  <button
                    onClick={() => deleteAdreess(item.id)}
                    className="  text-primary hover:text-red-500 duration-150"
                  >
                    <MdDelete />
                  </button>
                  <button className="  text-primary hover:text-blue-500 duration-150">
                    <FaRegEdit />
                  </button>
                </div>
                <p>Email: {item.email}</p>
                <p>
                  Name: {item.fname} {item.lname}
                </p>
                <p className="line-clamp-1">
                  Address: {item.address}, {item.apartment}, {item.city}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default UserAdresses;
