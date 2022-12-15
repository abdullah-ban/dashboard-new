import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordType, setPasswordType] = useState("password");

  let Navigate = useNavigate();

  const handleChangePasswordType = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: name,
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://prof.flymingotech.in/public/api/auth/student/register",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      Navigate("/")
  };

  return (
    <div className="mainContainer">
      <section className="login" id="login">
        <div className="head">
          <div className="image">
            <img className="flash" src="fl.png" alt="" />
          </div>
        </div>
        <br />
        <div className="form">
          <form>
            <div className="inputs">
              <div className="NameInput">
                <MdAccountCircle className="text-2xl mr-2" />
                <input
                  type="email"
                  placeholder="Name"
                  className="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="emailInput mt-11">
                <MdEmail className="text-2xl mr-2" />
                <input
                  type="email"
                  placeholder="Email"
                  className="text"
                  id="username"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <br />
              <div className="passInput">
                <FaKey className="text-2xl mr-2" />
                <input
                  type={passwordType}
                  placeholder="••••••••••••••"
                  className="password"
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
            </div>

            <br />
            <div className="links flex justify-center">
              <button
                type="submit"
                className="text-center transition duration-500 ease-in-out hover:bg-amber-400  hover:text-white transform hover:-translate-y-1 hover:scale-110 p-2 rounded-xl "
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Registration;
