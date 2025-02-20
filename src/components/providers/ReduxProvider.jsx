import { store } from "@/store/store";
// import { Children } from "react"
import { Provider } from "react-redux";

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default ReduxProvider;
