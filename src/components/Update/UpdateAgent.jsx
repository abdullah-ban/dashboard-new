import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import Header from "../Header";
import Navbar from "../Navbar";
import SideBar from "../Sidebar";

const UpdateAgent = () => {
  // Navigate
  let Navigate = useNavigate();
  const [id, setId] = useState();
  const [name, setname] = useState();
  const [Email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [Mobile, setMobile] = useState();
  const [Position, setPosition] = useState();
  const [Privilage, setPrivilage] = useState();
  const [Profile, setProfile] = useState();
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  useEffect(() => {
    setId(localStorage.getItem("AgentId"));
    setname(localStorage.getItem("AgentName"));
    setEmail(localStorage.getItem("AgentEmail"));
    setPass(localStorage.getItem("AgentPass"));
    setMobile(localStorage.getItem("AgentMobile"));
    setPosition(localStorage.getItem("AgentPosition"));
    setPrivilage(localStorage.getItem("AgentPrivilage"));
    setProfile(localStorage.getItem("AgentProfile"));
  }, []);

  const handleUpdateAgent = () => {};

  //   Cancel
  const handleCancel = () => {
    localStorage.removeItem("AgentId");
    localStorage.removeItem("AgentName");
    localStorage.removeItem("AgentEmail");
    localStorage.removeItem("AgentPass");
    localStorage.removeItem("AgentMobile");
    localStorage.removeItem("AgentPosition");
    localStorage.removeItem("AgentPrivilage");
    Navigate("/ListAgent");
  };
  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <div className="flex relative dark:bg-main-dark-bg">
          <div
            className="fixed right-4 bottom-4"
            style={{ zIndex: "1000" }}
          ></div>
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
              <Header category="Page" title="Update Your Agent" />
              <hr className="border border-[#4CAF50]" />
              {/* {/_ Content _/} */}

              <div className="flex justify-center mt-5 mb-[-20px]">
                <img
                  src={process.env.REACT_APP_MEDIA_BASE_URL + Profile}
                  alt="Profile Photo"
                  className="rounded-full w-52"
                />
              </div>
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
                        // onChange={(e) => setName(e.target.value)}
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
                        value={Email || ""}
                        // onChange={(e) => setEmail(e.target.value)}
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
                        // onChange={(e) => setPass(e.target.value)}
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
                        value={Mobile || ""}
                        // onChange={(e) => setPhone(e.target.value)}
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
                        value={Position || ""}
                        // onChange={(e) => setPosition(e.target.value)}
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
                        value={Privilage || ""}
                        // onChange={(e) => setPrivilage(e.target.value)}
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
                      //   onChange={(e) => setProfile(e.target.files[0])}
                    />
                  </div>
                </div>
              </div>
              {/* Button */}
              <div className="mt-5 flex justify-center md:justify-end">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    className="p-3 hover:drop-shadow-xl rounded-lg text-white transition duration-500 ease-in-out hover:bg-amber-400 mb-5 hover:text-white transform hover:-translate-y-1 hover:scale-110"
                    style={{ background: currentColor }}
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    className="p-3 hover:drop-shadow-xl rounded-lg text-white transition duration-500 ease-in-out hover:bg-amber-400 mb-5 hover:text-white transform hover:-translate-y-1 hover:scale-110"
                    style={{ background: currentColor }}
                    onClick={handleUpdateAgent}
                  >
                    Update Agent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateAgent;
