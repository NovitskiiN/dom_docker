import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignoutAC } from "../../store/actions/userActions";
import { NavLink } from "react-router-dom";
import { MenuIcon } from "../../icons/index";

import "./navbar.css";
import { BASE_URL } from "../../constants";

function Navbar({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    fetch(
      `${BASE_URL}/auth/signout`,

      { credentials: "include" }
    ).then((res) => {
      if (res.status === 200) {
        dispatch(userSignoutAC(null));
      }
      try {
        navigate("/");
      } catch (error) {
        alert("error signout");
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-white d-flex justify-content-start">
        <div className="container-fluid">
          {!user ? (
            <a className="navbar-brand" href="/">
              GanaClub
            </a>
          ) : (
            <NavLink className="navbar-brand" href="/varification">
              GanaClub
            </NavLink>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Переключатель навигации"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-nav" id="navbarNavAltMarkup">
            {!user ? (
              <>
                <NavLink className="nav-link" to="/faq">
                  Saber más
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                  Soporte
                </NavLink>
                <NavLink className="nav-link" to="/login">
                  Conectarse
                </NavLink>
                <NavLink className="nav-link" to="/signup">
                  Registarse
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="nav-link" to="/faq">
                  Saber más
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                  Soporte
                </NavLink>
                <NavLink className="nav-link" to="/varification">
                  Varification
                </NavLink>
                <div className="greeting">Hola, {user?.name ?? ""}</div>
                <buttton className="btn btn-dark" onClick={handleLogout}>
                  Logout
                </buttton>
              </>
            )}
          </div>
        </div>
      </nav>

      <nav className="nav__mobile">
        <a className="navbar-brand fs-2" href="/">
          <strong>GanaClub</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <span className="navbar-toggler-icon">{MenuIcon()}</span>
        </button>

        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div>
              {!user ? (
                <>
                  <NavLink className="nav-link fs-2" to="/faq">
                    <p data-bs-dismiss="offcanvas">Saber más</p>
                  </NavLink>
                  <NavLink className="nav-link fs-2" to="/contact">
                    <p data-bs-dismiss="offcanvas">Soporte</p>
                  </NavLink>
                  <NavLink className="nav-link fs-2" to="/login">
                    <p data-bs-dismiss="offcanvas">Conectarse</p>
                  </NavLink>
                  <NavLink className="nav-link fs-2" to="/signup">
                    <p data-bs-dismiss="offcanvas">Registarse</p>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink className="nav-link fs-2" to="/faq">
                    <p data-bs-dismiss="offcanvas">Saber más</p>
                  </NavLink>
                  <NavLink className="nav-link fs-2" to="/contact">
                    <p data-bs-dismiss="offcanvas">Soporte</p>
                  </NavLink>
                  <NavLink className="nav-link fs-2" to="/varification">
                    <p data-bs-dismiss="offcanvas">Varification</p>
                  </NavLink>
                  <buttton className="fs-2" onClick={handleLogout}>
                    <p data-bs-dismiss="offcanvas">Logout</p>
                  </buttton>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
