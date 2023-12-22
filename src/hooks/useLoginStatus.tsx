import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../store/redux/feature/authSlice";


export const useLoginStatus = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn;
};