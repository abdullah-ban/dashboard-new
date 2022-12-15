import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useStateContext } from "../../context/ContextProvider";
import Header from "../Header";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ListCategory = () => {
  const [getCategories, setGetCategories] = useState("");

  let Navigate = useNavigate();

  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  //   List Integrations
  const getAllCategories = async () => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    await fetch(
      "https://team.flymingotech.in/azamDeals/public/api/readall/categories",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setGetCategories(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  //   Update Integrations
  const handleUpdate = (el) => {
    localStorage.setItem("Category", el.name);
    localStorage.setItem("CategoryId", el.id);
    Navigate("/updateCategory");
  };

  //   Delete Integrations
  const handleDelete = async (id) => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    await fetch(
      `https://team.flymingotech.in/azamDeals/public/api/catdelete/${id}/delete`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          toast.success("Category Deleted Successfully!", {
            theme: "colored",
            autoClose: "2000",
          });
        }
      })
      .catch((error) => console.log("error", error));

    await getAllCategories();
  };

  //   UseEffect Integrations

  useEffect(() => {
    getAllCategories();
    handleDelete();
  }, []);

  //   DropDown Component
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAsce = async () => {};

  const handleDesc = async () => {};

  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            {/* <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray  text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent> */}
          </div>
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
              <Header category="Page" title="All Categories" />

              <div className=" mb-5">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <span className="bg-[#4CAF50] text-white p-1 rounded-l-sm">
                    Sort By
                  </span>
                  <IoIosArrowDropdownCircle
                    className="bg-[#4CAF50] text-white text-3xl rounded-r-sm"
                    style={{ height: "32.5px" }}
                  />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <button onClick={handleAsce}>Ascending</button>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <button onClick={handleDesc}>Descending</button>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Limit</MenuItem>
                </Menu>
              </div>

              {/* Table */}
              <div className="overflow-x-auto relative">
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
                        Action
                      </th>
                    </tr>
                  </thead>
                  {getCategories &&
                    getCategories.slice(0, 10).map((el, index) => {
                      return (
                        <tbody key={index}>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              className="py-4 px-6 font-medium text-gray-900 dark:text-white"
                            >
                              {el.id}
                            </th>
                            <td className="py-4 px-6">{el.name}</td>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" className="mt-16" />
    </>
  );
};

export default ListCategory;
