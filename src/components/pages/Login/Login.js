import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAsync, authRefresh } from "features/auth/authSlice";
import { userGet } from "features/user/userSlice";

const Login = ({}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error, token } = useSelector((state) => state.auth);

  const handleData = async (e) => {
    if (e.target.id === "login") {
      setLogin(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (token) {
        navigate("/");
      } else {
        dispatch(authRefresh()).then(() => {
          if (status == "refreshOk") {
            navigate("/");
          }
        });
      }
    }
    setLogin("");
    setPassword("");
  }, [token]);

  const handleSubmit = async (e) => {
    dispatch(authAsync({ login, password }));
  };

  return (
    <div className="Login">
      <div className="Login__wrap">
        <div className="Login__body">
          <div className="Login__logo">
            УНИВЕРСИТЕТ
            <img
              src={process.env.PUBLIC_URL + "/images/university-plus-logo.svg"}
            />
          </div>
          <form className="LoginInput">
            <div className="LoginInput__item itemInput">
              <input
                type="text"
                id="login"
                name="username"
                className="LoginInput__login"
                required="required"
                value={login}
                onChange={handleData}
              />
              <span className="LoginInput__loginText">Логин</span>
            </div>
            <div className="LoginInput__item itemInput">
              <input
                type="password"
                name="password"
                className="LoginInput__password"
                required="required"
                id="password"
                value={password}
                onChange={handleData}
              />
              <span className="LoginInput__passwordText">Пароль</span>
            </div>
          </form>
          <div className="LoginButton">
            <div className="LoginButton__restore">Восстановить</div>
            {status == "loginError" && (
              <div className="LoginButton__error">
                {error ? error : "Неверный логин или пароль"}
              </div>
            )}
            <input
              type="button"
              className="LoginButton__enter blueBtn"
              value="Войти"
              onClick={handleSubmit}
            />
          </div>
        </div>
        {/* <div className="Login__doRegister">Зарегистрироваться</div> */}
      </div>
    </div>
  );
};

export default Login;
