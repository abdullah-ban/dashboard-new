import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useStateContext } from "../../context/ContextProvider";
import Header from "../Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Backdrop, CircularProgress } from "@mui/material";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [error, setError] = useState();
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  const [load, setload] = useState(false);

  const handleAddCategory = () => {
    if (category === "") {
      setError("Please enter a category");
    } else {
      setload(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: category,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://team.flymingotech.in/azamDeals/public/api/createcat",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.status === 200) {
            toast.success("Category Added Successfully!", {
              theme: "colored",
              autoClose: "2000",
            });
            setload(false);
            setCategory("");
          } else {
            toast.error("Something Went Wrong", {
              theme: "colored",
              autoClose: "2000",
            });
            setload(false);
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

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
            <div className="sticky top-0 z-100 bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl mt-20 shadow-md">
              <Header category="Page" title="Add Category" />
              <hr className="border border-[#4CAF50]" />

              {error && (
                <div className="p-2 bg-red-50 text-red-500 border border-red-500 rounded-md mt-5 text-sm">
                  {error}
                </div>
              )}
              {/* First Row */}
              <div className="flex items-center flex-col md:flex-row lg:flex-row mt-20">
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
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>

              {/* Button */}
              <div className="mt-5 flex justify-center md:justify-end">
                <button
                  className="p-3 hover:drop-shadow-xl rounded-lg text-white transition duration-500 ease-in-out hover:bg-amber-400 mb-5 hover:text-white transform hover:-translate-y-1 hover:scale-110"
                  style={{ background: currentColor }}
                  onClick={handleAddCategory}
                >
                  Add Category
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
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default AddCategory;
