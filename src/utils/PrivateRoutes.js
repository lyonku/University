import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authRefresh } from "features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({}) => {
  const token = useSelector((state) => state.auth.token);
  const status = useSelector((state) => state.auth.status);
  const localToken = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    function checkUserData() {
      dispatch(authRefresh()).then((data) => {
        if (data?.payload?.token && localToken) {
        } else {
          navigate("/login");
        }
      });
    }

    if (status != "loginOk") {
      checkUserData();
    }

    if (localToken) {
      window.addEventListener("storage", checkUserData);
      return () => {
        window.removeEventListener("storage", checkUserData);
      };
    }
  }, []);

  return token || localToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
