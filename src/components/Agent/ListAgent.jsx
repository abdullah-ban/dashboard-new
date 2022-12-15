import React from "react";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "../../context/ContextProvider";
import SideBar from "../Sidebar";
import Navbar from "../Navbar";
import Header from "../Header";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete, MdOutlineSupportAgent } from "react-icons/md";
import { ScaleLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const ListAgent = () => {
  // Navigate
  let Navigate = useNavigate();

  // Main Hooks
  const [getAgent, setGetAgent] = useState([]);

  // loader Hook
  let [loading, setLoading] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const [load, setLoad] = useState(false);
  const getAllAgents = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      "https://team.flymingotech.in/azamDeals/public/api/admin_route",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setGetAgent(result.data.data);
        if (result.status === 1) {
          setLoading(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleUpdate = (el) => {
    localStorage.setItem("AgentId", el.id);
    localStorage.setItem("AgentName", el.name);
    localStorage.setItem("AgentEmail", el.email);
    localStorage.setItem("AgentPass", el.password);
    localStorage.setItem("AgentMobile", el.mobile);
    localStorage.setItem("AgentPosition", el.position);
    localStorage.setItem("AgentPrivilage", el.privilege_ids);
    localStorage.setItem("AgentProfile", el.profile_photo);
    Navigate("/updateAgent");
  };
  const handleDelete = async (id) => {
    setLoad(true);
    var raw = "";

    var requestOptions = {
      method: "DELETE",
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `https://team.flymingotech.in/azamDeals/public/api/admin_route/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          toast.success("Agent Deleted Successfully", {
            theme: "light",
            autoClose: "2000",
          });
          setLoad(false);
        } else {
          toast.error("Something Went wrong", {
            theme: "light",
            autoClose: "2000",
          });
          setLoading(false);
        }
      })
      .catch((error) => console.log("error", error));

    await getAllAgents();
  };

  useEffect(() => {
    getAllAgents();
  }, []);

  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <>
      {console.log(getAgent)}
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
            <div className="sticky top-0 z-100 bg-transparent dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl mt-20 shadow-2xl">
              <Header category="Page" title="All Agents" />
              <hr className="border border-[#4CAF50]" />
              {/* {/_ Content _/} */}

              <div className="overflow-x-auto relative mt-10">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        ID
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Email
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Phone
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Position
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Privilage
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {getAgent &&
                    getAgent.map((el, index) => {
                      return (
                        <tbody key={index}>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {el.id}
                            </th>
                            <td
                              className="py-4 px-6 flex items-center"
                              style={{ marginLeft: "-20px" }}
                            >
                              <img
                                src={
                                  process.env.REACT_APP_MEDIA_BASE_URL +
                                  el.profile_photo
                                }
                                className="w-10 h-10 rounded-full mx-1"
                                alt=""
                              />
                              <span className="mx-1">{el.name}</span>
                            </td>
                            <td className="py-4 px-6">{el.email}</td>
                            <td className="py-4 px-6">{el.mobile}</td>
                            <td className="py-4 px-6">{el.position}</td>
                            <td className="py-4 px-6">{el.privilege_ids}</td>
                            <td className="flex py-4 px-6 gap-5 cursor-pointer">
                              <button onClick={() => handleUpdate(el)}>
                                <AiFillEdit className="text-teal-500 text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
                              </button>
                              <button onClick={() => handleDelete(el.id)}>
                                <MdDelete className="text-red-500 text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                </table>
                {loading ? (
                  <div className="flex justify-center m-52">
                    <ScaleLoader
                      color="#4CAF50"
                      loading={loading}
                      size={50}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </div>
                ) : (
                  ""
                )}
                {getAgent.length != 0 ? (
                  ""
                ) : (
                  <div>
                    <div className="flex justify-center mt-32">
                      <MdOutlineSupportAgent className="text-gray-500 text-9xl" />
                    </div>
                    <div>
                      <p className="text-gray-500 font-semibold text-center mb-32">
                        No Agents Available
                      </p>
                    </div>
                  </div>
                )}
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

export default ListAgent;
