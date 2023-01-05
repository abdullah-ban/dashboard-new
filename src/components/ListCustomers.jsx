import React from "react";
import { FaUserAltSlash } from "react-icons/fa";
import { useStateContext } from "../context/ContextProvider";
import SideBar from "./Sidebar";
import Navbar from "./Navbar";
import Header from "./Header";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { ScaleLoader } from "react-spinners";
import { AiFillEdit } from "react-icons/ai";

const ListCustomers = () => {
  const [customers, setCustomers] = useState([]);

  // Loader Hooks
  let [loading, setLoading] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const [load, setLoad] = useState(false);

  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  const getAllCustomers = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://team.flymingotech.in/azamDeals/public/api/getalldata",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCustomers(result.data.data);
        if (result.status === 200) {
          setLoading(false);
        }
      })
      .catch((error) => console.log("error", error));
  };
  const handleUpdate = () => {};

  useEffect(() => {
    getAllCustomers();
  }, []);

  return (
    <>
      {console.log(customers)}
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
            <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl mt-20 shadow-2xl border">
              <Header category="Page" title="All Customers" />
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
                        Status
                      </th>
                      <th scope="col" className="py-3 px-6 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {customers &&
                    customers.map((el, index) => {
                      return (
                        <tbody key={index}>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {el.id}
                            </th>
                            <td className="py-4 px-6">{el.name}</td>
                            <td className="py-4 px-6">{el.email}</td>
                            <td className="py-4 px-6">
                              {el.is_active === 1 ? (
                                <div className="text-[#4CAF50] font-semibold">
                                  Active
                                </div>
                              ) : (
                                <div className="text-red-500 font-semibold">
                                  Inactive
                                </div>
                              )}
                            </td>
                            <td className="cursor-pointer text-center">
                              <button onClick={handleUpdate}>
                                <AiFillEdit className="text-teal-500 text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
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
                  false
                )}
                {customers.length != 0 ? (
                  ""
                ) : (
                  <div>
                    <div className="flex justify-center mt-32">
                      <FaUserAltSlash className="text-gray-500 text-9xl" />
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

export default ListCustomers;
