import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link, Form } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

// Action starts ------
export const action = async ({ request }) => {
  const formData = await request.formData();
  let data = Object.fromEntries(formData);
  data = { ...data, remember: data.remember === "on" ? true : false };
  console.log(data);
  try {
    return null;
  } catch (error) {
    return null;
  }
};

// Main componet starts ------
const Login = () => {
  const [textType, setTextType] = useState("password");

  return (
    <div className="d-flex flex-column">
      <div className="page page-center">
        <div className="container container-tight py-4">
          <div className="text-center mb-4">
            <Link className="navbar-brand navbar-brand-autodark">
              <img
                src={Logo}
                width="110"
                height="32"
                alt="Tabler"
                className="navbar-brand-image"
              />
            </Link>
          </div>
          <div className="card card-md">
            <div className="card-body">
              <h2 className="h2 text-center mb-4">Login to your account</h2>
              <Form method="post" autoComplete="off">
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your@email.com"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label" htmlFor="password">
                    Password
                    <span className="form-label-description">
                      <Link to="/forgot-password">I forgot password</Link>
                    </span>
                  </label>
                  <div className="input-group input-group-flat">
                    <input
                      type={textType}
                      className="form-control"
                      placeholder="Your password"
                      id="password"
                      name="password"
                    />
                    <span className="input-group-text">
                      <IoEyeOutline
                        className="link-secondary cursor-pointer"
                        title="Show password"
                        size={18}
                        onClick={() =>
                          setTextType(
                            textType === "password" ? "text" : "password"
                          )
                        }
                      />
                    </span>
                  </div>
                </div>
                <div className="mb-2">
                  <label className="form-check">
                    <input
                      type="checkbox"
                      name="remember"
                      className="form-check-input"
                    />
                    <span className="form-check-label">
                      Remember me on this device
                    </span>
                  </label>
                </div>
                <div className="form-footer">
                  <button type="submit" className="btn btn-primary w-100">
                    Sign in
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
