import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import SideBar from "../Sidebar";
import Navbar from "../Navbar";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateCategory = () => {
  let Navigate = useNavigate();

  // Loader Hook
  const [load, setLoad] = useState(false);

  const [id, setId] = useState();
  const [category, setCategory] = useState();
  const [uCategory, setUCategory] = useState();

  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  const handleUpdateCategory = () => {
    setLoad(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: uCategory,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://team.flymingotech.in/azamDeals/public/api/supdate/${id}/categories`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          Navigate("/listCategory");
          localStorage.removeItem("Category");
          localStorage.removeItem("CategoryId");
          setLoad(false);
        } else {
          toast.error("Something Went Wrong!", {
            theme: "light",
            autoClose: "2000",
          });
          setLoad(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    setCategory(localStorage.getItem("Category"));
    setId(localStorage.getItem("CategoryId"));
  }, []);

  // Cancel
  const handleCancel = () => {
    localStorage.removeItem("Category");
    localStorage.removeItem("CategoryId");
    localStorage.removeItem("LoggedOut");
    Navigate("/listCategory");
  };

  return (
    <>
      {console.log(id)}
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
              <Header category="Page" title="Update Categories" />
              {/* <input type="hidden" name="" value={id} /> */}
              {/* {/_ Content _/} */}
              <div className="flex items-center flex-col md:flex-row lg:flex-row">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2 dark:text-gray-400 w-auto md:w-1/4 lg:w-1/4"
                  htmlFor=""
                >
                  Category name :
                </label>
                <input
                  className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                  type="text"
                  placeholder="eg. abcd"
                  defaultValue={category}
                  onChange={(e) => setUCategory(e.target.value)}
                />
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
                    onClick={handleUpdateCategory}
                  >
                    Add Category
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Backdrop
        sx={{ color: "#4CAF50", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default UpdateCategory;
