import React, { useEffect } from "react";
import Buttons from "./Buttons";
import { useStateContext } from "../context/ContextProvider";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { RiFileList3Fill } from "react-icons/ri";
import { RiPagesFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray  text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div> */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 fixed sidebar dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
                    ${activeMenu ? "md:ml-72" : "flex-2"}`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            {/* <div className="mt-12">
              <div className="flex flex-wrap lg:flex-nowrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center shadow-md mt-10">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-gray-400">TITLE</p>
                      <p className="text-2xl">₹654.789</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Buttons
                      color="white"
                      bgColor={currentColor}
                      text="Download"
                      borderRadius="10px"
                    />
                  </div>
                </div>

                
              </div>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 md:mt-0 lg:mt-0">
              <div className="flex m-3 flex-wrap justify-center gap-1 items-center mt-2">
                <div className="bg-gradient-to-t from-white to-red-500 dark:text-gray-200 dark:bg-secondary-dark-bg w-full p-4 pt-9 rounded-2xl border-b-1 border-red-500">
                  <button
                    type="button"
                    style={{
                      color: "rgb(255, 244, 229)",
                      backgroundColor: "#1A97F5",
                    }}
                    className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                  >
                    <MdOutlineSupervisorAccount />
                  </button>
                  <p className="mt-3">
                    <span className="text-lg font-semibold">50</span>
                    <span className="text-sm text-green-300 ml-2">56%</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">TITLE</p>
                </div>
              </div>
              <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                <div className="bg-gradient-to-t from-white to-green-500 dark:text-gray-200 dark:bg-secondary-dark-bg w-full p-4 pt-9 rounded-2xl border-b-1 border-green-500">
                  <button
                    type="button"
                    style={{ color: "#fff", backgroundColor: "#03C9D7" }}
                    className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                  >
                    <FaDollarSign />
                  </button>
                  <p className="mt-3">
                    <span className="text-lg font-semibold">500000₹</span>
                    <span className="text-sm text-green-300 ml-2">76%</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">TITLE</p>
                </div>
              </div>
              <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                <div className="bg-gradient-to-t from-white to-blue-500 dark:text-gray-200 dark:bg-secondary-dark-bg w-full p-4 pt-9 rounded-2xl border-b-1 border-blue-500">
                  <button
                    type="button"
                    style={{ color: "#fff", backgroundColor: "#7352FF" }}
                    className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                  >
                    <SiBookstack />
                  </button>
                  <p className="mt-3">
                    <span className="text-lg font-semibold">1250</span>
                    <span className="text-sm text-green-300 ml-2">89%</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">TITLE</p>
                </div>
              </div>
            </div>

            {/* Second */}
            <div className="grid grid-cols-2">
              <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full p-4 pt-9 rounded-2xl shadow-md">
                  <button
                    type="button"
                    style={{ color: "#fff", backgroundColor: "#1E4DB7" }}
                    className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                  >
                    <RiPagesFill />
                  </button>
                  <p className="mt-3">
                    <span className="text-lg font-semibold">25</span>
                    <span className="text-sm text-green-300 ml-2">96%</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">TITLE</p>
                </div>
              </div>
              <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full p-4 pt-9 rounded-2xl shadow-md">
                  <button
                    type="button"
                    style={{ color: "#fff", backgroundColor: "#FF5C8E" }}
                    className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                  >
                    <MdGroups />
                  </button>
                  <p className="mt-3">
                    <span className="text-lg font-semibold">32</span>
                    <span className="text-sm text-red-500 ml-2">84%</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">TITLE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
