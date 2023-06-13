import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login, logged } = useContext(AuthContext);
  const navigate = useNavigate();
  const [lastUser, setLastUser] = useState("");
  const [showChangeUser, setShowChangeUser] = useState(false);
  const [username, setUsername] = useState(false);

  useEffect(() => {
    const lastUser = localStorage.getItem("lastUser");
    if (lastUser) {
      setLastUser(JSON.parse(lastUser));
    }
    setShowChangeUser(true);
  }, []);

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login(lastUser);

    setTimeout(() => {
      navigate(lastPath, { replace: true });
    }, 0);

    localStorage.setItem("lastUser", JSON.stringify(lastUser));
    setUsername(false);
  };

  const onChangeUser = () => {
    setLastUser("");
    localStorage.removeItem("lastUser");
    localStorage.removeItem("lastPath");
    setUsername(true);
  };

  const handleUsernameChange = (e) => {
    if (username) {
      setLastUser(e.target.value);
    }
  };

  return (
    <div className="login-page">
      <div className="container mt-5">
        <div className="login-page">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title text-center mb-4">Login</h1>
                  <hr className="mb-4" />
                  <div className="mb-4">
                    {username ? (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        value={lastUser}
                        onChange={handleUsernameChange}
                      />
                    ) : (
                      <p className="text-center">
                        <span className="hello-text">Hello</span>{" "}
                        <strong className="username-text">{lastUser}</strong>
                      </p>
                    )}
                  </div>
                  {showChangeUser && (
                    <p className="text-center mb-4" onClick={onChangeUser}>
                      <a href="#!" className="text-decoration-none">
                        Change User
                      </a>
                    </p>
                  )}
                  <div className="text-center">
                    <button
                      className="btn btn-primary"
                      onClick={onLogin}
                      disabled={logged || !lastUser}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
