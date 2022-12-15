import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import SideBar from "./Sidebar";
import Navbar from "./Navbar";
import Header from "./Header";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { ScaleLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { RiCoupon2Fill } from "react-icons/ri";

const ListCoupon = (props) => {
  let Navigate = useNavigate();
  const [couponData, setCouponData] = useState([]);
  let [loading, setLoading] = useState(true);

  // NoCoupon Icon
  const [noCoupon, setNoCoupon] = useState();
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  //    API Integrations

  const getAllCoupons = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(process.env.REACT_APP_BASE_URL + "coupons", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setNoCoupon(result);
        setCouponData(result.data.data);
      })
      .catch((error) => console.log("error", error));
  };

  //   Delete API Integrations

  const handleDelete = async (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    await fetch(
      `https://team.flymingotech.in/azamDeals/public/api/coupons/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          toast.success("Coupon Deleted Successfully!", {
            theme: "light",
            autoClose: "2000",
          });
        } else {
          toast.error("Something Went Wrong!", {
            theme: "light",
            autoClose: "2000",
          });
        }
      })
      .catch((error) => console.log("error", error));

    setLoading(false);

    await getAllCoupons();
  };

  useEffect(() => {
    getAllCoupons();
    handleDelete();
  }, []);

  const handleUpdate = (el) => {
    localStorage.setItem("ID", el.id);
    localStorage.setItem("Name", el.label);
    localStorage.setItem("Description", el.description);
    localStorage.setItem("Type", el.coupon_type);
    localStorage.setItem("Value", el.coupon_value);
    localStorage.setItem("Code", el.coupon_code);
    localStorage.setItem("Use", el.use_per_customer);
    localStorage.setItem("ValidFrom", el.valid_from);
    localStorage.setItem("ValidTo", el.valid_to);
    localStorage.setItem("IsActive", el.is_active);
    localStorage.setItem("RedemptionALlowed", el.total_reedemtion_allowed);
    localStorage.setItem("TotalRedeemed", el.total_reedemed);
    localStorage.setItem("MiniCartAmount", el.min_cart_amount);
    Navigate("/updateCoupon");
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
            <div className="fixed md:static bg-transparent dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl mt-20 shadow-2xl">
              <Header category="Page" title="All Coupons" />
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
                        Type
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Value
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Valid From
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Valid TO
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Is Active
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {couponData &&
                    couponData.map((el, index) => {
                      return (
                        <tbody key={index}>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {el.id}
                            </th>
                            <td className="py-4 px-6">{el.label}</td>
                            <td className="py-4 px-6">{el.coupon_type}</td>
                            <td className="py-4 px-6">{el.coupon_value}</td>
                            <td className="py-4 px-6">
                              {el.valid_from.slice(0, 10)}
                            </td>
                            <td className="py-4 px-6">
                              {el.valid_to.slice(0, 10)}
                            </td>
                            <td className="py-4 px-6">
                              {el.is_active === "1" ? (
                                <p className="text-green-500">Active</p>
                              ) : (
                                <p className="text-red-500">Inactive</p>
                              )}
                            </td>
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
                {couponData.length != 0 ? (
                  ""
                ) : (
                  <div>
                    <div className="flex justify-center mt-52">
                      <RiCoupon2Fill className="text-gray-500 text-9xl" />
                    </div>
                    <div>
                      <p className="text-gray-500 font-semibold text-center mb-40">
                        No Coupons Available
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
    </>
  );
};

export default ListCoupon;
