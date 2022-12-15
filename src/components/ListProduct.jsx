import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "../context/ContextProvider";
import SideBar from "./Sidebar";
import Navbar from "./Navbar";
import Header from "./Header";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Global from "./Global";

const ListProduct = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  const [productAsc, setProductAsc] = useState([]);
  // API Integrations
  const getProductASC = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      col_name: "product_name",
      order: "ASC",
      limit: "6",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_BASE_URL}getAllProducts`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProductAsc(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getProductASC();
  }, []);

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
            <div className="sticky top-0 z-100 bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl mt-20 shadow-2xl">
              <Header category="Page" title="All Products" />
              {/* {/_ Content _/} */}
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
                        In Stock
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Quantity
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Image
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Is Active
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {productAsc &&
                    productAsc.map((el, index) => {
                      return (
                        <tbody key={index}>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {el.id}
                            </th>
                            <td className="py-4 px-6">{el.product_name}</td>
                            <td className="py-4 px-6">
                              {el.in_stock === 1 ? (
                                <p className="text-green-500"> Yes</p>
                              ) : (
                                <p className="text-red-500"> No</p>
                              )}
                            </td>
                            <td className="py-4 px-6">{el.available_qty}</td>
                            <td className="py-4 px-6">
                              <img
                                src={
                                  process.env.REACT_APP_MEDIA_BASE_URL +
                                  el.product_images
                                }
                                alt=""
                                className="w-32"
                              />
                            </td>
                            <td className="py-4 px-6">
                              {el.is_active === 1 ? (
                                <p className="text-green-500">Active</p>
                              ) : (
                                <p className="text-red-500">Inactive</p>
                              )}
                            </td>
                            <td className="flex items-center py-4 px-6 gap-5 cursor-pointer">
                              <button>
                                <AiFillEdit className="text-teal-500 text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-8" />
                              </button>
                              <button>
                                <MdDelete className="text-red-500 text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-8" />
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
    </>
  );
};

export default ListProduct;
