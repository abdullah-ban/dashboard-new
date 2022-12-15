import React from "react";
import { useState } from "react";
// import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  // Token
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();

  // Errror Hooks
  const [emailError, setEmailError] = useState();
  const [passError, setPassError] = useState();
  const [inputError, setInputError] = useState();

  // BackDrop Loader
  const [open, setOpen] = useState(false);

  let router = useNavigate();

  const handleLogin = async (e) => {
    setEmailError("");
    setPassError("");
    if (email === "") {
      setInputError("please fill all the fields");
      setOpen(false);
    } else if (pass === "") {
      setInputError("please fill all the fields");
      setOpen(false);
    } else {
      e.preventDefault();
      setOpen(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        email: email,
        password: pass,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch(
        "https://team.flymingotech.in/azamDeals/public/api/admin_login",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setToken(localStorage.setItem("Token", result.token));
          setUserId(localStorage.setItem("UserId", result.admin_id));
          if (result.status === 200) {
            router("/dashboard");
          } else if (result.status === 404) {
            setEmailError(result.message);
            setOpen(false);
          } else if (result.status === 401) {
            setPassError(result.message);
            setOpen(false);
          } else {
            setOpen(false);
            toast.error("Something went wrong", {
              theme: "colored",
              autoClose: "2000",
            });
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  const [passwordType, setPasswordType] = useState("password");

  const handleChangePasswordType = (e) => {
    e.preventDefault();
    setPass(e.target.value);
  };

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  // BackDrop Loader

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mainContainer p-5 md:p-0 flex flex-col">
        <section className="login" id="login">
          <div className="head">
            <div className="image">
              <img className="flash" src="azamlogo.jpg" alt="" />
            </div>
          </div>
          <br />
          <p className="text-center text-2xl">Sign in</p>
          {inputError && (
            <div className="p-2 bg-red-50 border border-red-500 text-red-500">
              {inputError}
            </div>
          )}
          <div className="form">
            <form>
              <div className="inputs">
                <div className="emailInput">
                  <MdEmail className="text-2xl mr-2" />
                  <input
                    type="email"
                    className="text"
                    id="username"
                    placeholder="email"
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {emailError && (
                  <div className="text-xs text-red-500 ml-8 mt-1">
                    {emailError}
                  </div>
                )}
                <br />
                <div className="passInput">
                  <FaKey className="text-2xl mr-2" />
                  <input
                    type={passwordType}
                    autoComplete="off"
                    className="password"
                    placeholder="password"
                    value={pass || ""}
                    onChange={handleChangePasswordType}
                    required
                  />
                  <br />
                  <button onClick={togglePassword}>
                    {passwordType === "password" ? (
                      <AiFillEye className="cursor-pointer text-2xl" />
                    ) : (
                      <BsFillEyeSlashFill className="cursor-pointer text-2xl" />
                    )}
                  </button>
                </div>
                {passError && (
                  <div
                    className="text-xs text-red-500 ml-7"
                    style={{ marginTop: "-12px" }}
                  >
                    {passError}
                  </div>
                )}
              </div>
              <br />
              <div className="flex items-center justify-between mt-16">
                <a className="flex justify-start" href="">
                  <p className="font-semibold text-green-600">Create Account</p>
                </a>

                <div className="flex">
                  <Button
                    type="submit"
                    onClick={handleLogin}
                    className="bg-green-600 p-2 rounded-md text-white"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <div className="flex items-end">
          <p>
            DESIGNED BY:
            <a
              className="capitalize font-semibold text-amber-600 italic"
              href=""
            >
              flymingotech
            </a>
          </p>
        </div>
        <ToastContainer />
        <Backdrop
          sx={{ color: "#4CAF50", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  );
};

export default Login;
