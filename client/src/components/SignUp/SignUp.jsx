import React, { useState } from "react";
import "./signUp.css";
import { useNavigate } from "react-router-dom";
import { mountain } from "../../icons";
import { showToast } from "../../lib/toasti";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../constants";

const formInitialState = {
  name: "",
  email: "",
  checked: false,
};

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(formInitialState);
  const [checked, setChecked] = useState(false);

  const chengeCheckbox = () => setChecked(!checked);

  const data = { ...form, checked };

  const handleSubmit = (e) => {
    if (Object.values(data).every((el) => !!el)) {
      e.preventDefault();
      const url = `${BASE_URL}/auth/signup`;

      fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.msg === "this email is already exist") {
            showToast({
              message: "este correo electrónico ya está registrado",
              type: "error",
            });
          } else if (res.msg === "you are registrated") {
            showToast({
              message:
                "Verifique su correo electrónico para obtener su nombre de usuario y contraseña",
              type: "success",
            }) 
            navigate("/login");
            setForm(formInitialState);
          } else {
            showToast({
              message: "something is wrong",
              type: "error",
            });
          }
        })
        .catch(console.error);
    } else if (Object.entries(data).find((el) => !el?.checked)) {
      e.preventDefault();
      showToast({
        message: "Por favor acepte la política de privacidad",
        type: "warning",
      });
    } else {
      e.preventDefault();
      showToast({
        message: "Por favor llene todos los campos requeridos",
        type: "warning",
      });
    }
  };

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, checked });
  };

  return (
    <div className="signup__container">
      <div className="signup__container__left">
        <div className="signup__star">✨</div>
        <form className="signup__form" onSubmit={handleSubmit}>
          <p>¡Escribe el email correcto, enviamos tu contraseña ahí!</p>
          <div className="mb-3">
            <label
              htmlFor="signupInput2"
              className="form-label d-flex justify-content-start"
            >
              Nombre:
            </label>
            <input
              type="text"
              value={form.name}
              name="name"
              className="form-control"
              id="signupInput2"
              placeholder="Nombre"
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="signupInput1"
              className="form-label d-flex justify-content-start"
            >
              Email:
            </label>
            <input
              type="text"
              value={form.email}
              name="email"
              className="form-control"
              id="signupInput1"
              placeholder="Email"
              onChange={handleInput}
            />
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              name="checked"
              type="checkbox"
              checked={checked}
              onChange={chengeCheckbox}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Estoy de acuerdo con la política de{" "}
              <a href="/privacy">privacidad</a> y con los{" "}
              <a href="/conditions">términos y condiciones</a>
            </label>
          </div>

          <div className="signup__left__bottom">
            <button
              className="btn btn-primary btn-lg mt-4 mb-4 signup_btn"
              type="submit"
            >
              Registrarse
            </button>
            <a href="/login">
              <p className="text-primary-emphasis fs-5 fw-bold">
                ¿Ya tienes cuenta?
                <br />
                Conectarse
              </p>
            </a>
          </div>
        </form>
      </div>

      <div className="signup__container__right">{mountain()}</div>
    </div>
  );
};

export default SignUp;
