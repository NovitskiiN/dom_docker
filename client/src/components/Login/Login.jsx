import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./login.css";
import { mountain } from "../../icons";
import { showToast } from "../../lib/toasti";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../constants";

const formInitialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginForm, setLoginForm] = useState(formInitialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (Object.values(loginForm).every((el) => !!el)) {
      e.preventDefault();
      const url = `${BASE_URL}/auth/signin`;

      fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginForm),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.msg === "Wrong login") {
            showToast({
              message: "Inicio de sesión incorrecto",
              type: "error",
            });
          } else if (res.msg === "Wrong pass") {
            showToast({ message: "contraseña incorrecta", type: "warning" });
          } else if (!!res?.name) {
            dispatch({ type: "USER_SIGNIN", payload: res });
            navigate("/varification");
            setLoginForm(formInitialState);
          }
        })
        .catch(console.error);
    } else {
      e.preventDefault();
      showToast({
        message: "Por favor llene todos los campos requeridos",
        type: "warning",
      });
    }
  };

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="login__container">
      <div className="login__container__left">
        <div className="login__star">✨</div>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__border fw-light">
            <p>
              Si ya te has registrado, los datos
              <br />
              para conectarse están en tu email
            </p>
          </div>
          <div className="mb-3">
            <label
              htmlFor="loginInput1"
              className="form-label d-flex justify-content-start"
            >
              Email:
            </label>
            <input
              type="email"
              value={loginForm.email}
              name="email"
              onChange={handleChange}
              className="form-control"
              id="loginInput1"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="loginInput2"
              className="form-label d-flex justify-content-start"
            >
              Contraseña:
            </label>
            <input
              type="password"
              value={loginForm.password}
              name="password"
              onChange={handleChange}
              className="form-control"
              id="loginInput2"
              placeholder="Contraseña"
            />
          </div>
          <div className="login__left__bottom">
            <button
              className="btn btn-primary btn-lg mt-4 mb-4 login_btn"
              type="submit"
            >
              Entrar
            </button>
            <a href="/signup">
              <p className="text-primary-emphasis fs-5 fw-bold">
                ¿No tienes cuenta?
                <br />
                Regístrate y gana 25€
              </p>
            </a>
          </div>
        </form>
      </div>

      <div className="login__container__right">{mountain()}</div>
    </div>
  );
};

export default Login;
