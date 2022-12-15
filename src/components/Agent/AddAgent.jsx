import React from "react";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "../../context/ContextProvider";
import SideBar from "../Sidebar";
import Navbar from "../Navbar";
import Header from "../Header";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const AddAgent = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [phone, setPhone] = useState();
  const [position, setPosition] = useState();
  const [privilage, setPrivilage] = useState();
  const [profile, setProfile] = useState([]);

  // Loader
  const [load, setLoad] = useState(false);

  // Loader State
  const handleClose = () => {
    setOpen(false);
  };

  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  const handleAddAgent = () => {
    setLoad(true);
    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", pass);
    formdata.append("mobile", phone);
    formdata.append("position", position);
    formdata.append("privilege_ids", privilage);
    formdata.append("profile_photo", profile);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://team.flymingotech.in/azamDeals/public/api/admin_route",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === 201) {
          toast.success("Agent Added Successfully", {
            theme: "light",
            autoClose: "2000",
          });
          setName("");
          setEmail("");
          setPass("");
          setPhone("");
          setPosition("");
          setPrivilage("");
          setProfile("");
          setLoad(false);
        } else {
          toast.error("Something went wrong!", {
            theme: "light",
            autoClose: "2000",
          });
          setLoad(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div> */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <SideBar />
            </div>
          ) : (
            <div className="w-0 fixed sidebar dark:bg-secondary-dark-bg">
              <SideBar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl mt-20 shadow-2xl">
              <Header category="Page" title="Add Agent" />
              <hr className="border border-[#4CAF50]" />
              {/* {/_ Content _/} */}
              <div className="mt-10 border border-gray-100 rounded-md">
                <div className="px-8 py-3">
                  {/* First Row */}
                  <div className="grid grid-cols-1 md:grid:cols-2 lg:grid-cols-2 gap-2 md:gap-3 lg:gap-5">
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                        htmlFor=""
                      >
                        Agent name
                      </label>
                      <input
                        className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                        type="text"
                        placeholder="eg. abcd"
                        value={name || ""}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                        htmlFor=""
                      >
                        Email
                      </label>
                      <input
                        className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                        type="text"
                        placeholder="eg. abcd"
                        value={email || ""}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="grid grid-cols-1 md:grid:cols-2 lg:grid-cols-2 gap-2 md:gap-3 lg:gap-5">
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                        htmlFor=""
                      >
                        password
                      </label>
                      <input
                        className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                        type="password"
                        placeholder="eg. abcd"
                        value={pass || ""}
                        onChange={(e) => setPass(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                        htmlFor=""
                      >
                        Mobile No:
                      </label>
                      <input
                        className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                        type="number"
                        placeholder="eg. abcd"
                        value={phone || ""}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Third Row */}
                  <div className="grid grid-cols-1 md:grid:cols-2 lg:grid-cols-2 gap-2 md:gap-3 lg:gap-5">
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                        htmlFor=""
                      >
                        Position
                      </label>
                      <input
                        className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                        type="text"
                        placeholder="eg. abcd"
                        value={position || ""}
                        onChange={(e) => setPosition(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                        htmlFor=""
                      >
                        Privilage
                      </label>
                      <input
                        className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                        type="text"
                        placeholder="eg. abcd"
                        value={privilage || ""}
                        onChange={(e) => setPrivilage(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* Fourth Row */}
                  <div>
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                      htmlFor=""
                    >
                      Profile Photo
                    </label>
                    <input
                      type="file"
                      className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                      placeholder="eg. abcd"
                      name="profile_photo"
                      onChange={(e) => setProfile(e.target.files[0])}
                    />
                  </div>
                </div>
              </div>
              {/* Button */}
              <div className="mt-5 flex justify-center md:justify-end">
                <button
                  className="p-3 hover:drop-shadow-xl rounded-lg text-white transition duration-500 ease-in-out hover:bg-amber-400 mb-5 hover:text-white transform hover:-translate-y-1 hover:scale-110"
                  style={{ background: currentColor }}
                  onClick={handleAddAgent}
                >
                  Add Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" className="mt-16" />
      <Backdrop
        sx={{ color: "#4CAF50", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default AddAgent;
