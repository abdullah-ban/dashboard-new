import React, { useEffect, useState } from "react";
// import { useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { IoMdListBox } from "react-icons/io";
import { BsFillFilePostFill } from "react-icons/bs";
import { IoAddCircleSharp } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { SiBookstack } from "react-icons/si";
import { CgWorkAlt } from "react-icons/cg";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import avatar from "../data/avatar.jpg";
import { RiCoupon2Fill } from "react-icons/ri";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const SideBar = () => {
  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);

  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  // function useOutsideAlerter(ref) {
  //   useEffect(() => {
  //     /**
  //      * Alert if clicked on outside of element
  //      */
  //     function handleClickOutside(event) {
  //       if (ref.current && !ref.current.contains(event.target) && screenSize <= 900) {
  //         setActiveMenu((prevActiveMenu) => !prevActiveMenu)
  //       }
  //     }
  //     // Bind the event listener
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       // Unbind the event listener on clean up
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  // }

  // Dynamic Profile
  const [getById, setGetById] = useState();
  const [data, setData] = useState({});

  const getProfile = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      `https://team.flymingotech.in/azamDeals/public/api/admin_route/${getById}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
    setSkeletonLoading(false);
  };

  const getID = () => {
    setGetById(localStorage.getItem("UserId"));
  };

  useEffect(async () => {
    await getID();
  }, []);
  useEffect(async () => {
    await getProfile();
  }, [getById]);

  // Skeleton Loader
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLinks =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 ";

  return (
    <div
      // ref={wrapperRef}
      className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto scroll-pb-10"
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center sticky top-0 z-100 bg-white">
            <Link
              to="/dashboard"
              onClick={handleCloseSidebar}
              className="items-center bg-white gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900 transition duration-500 ease-in-out hover:text-white transform hover:-translate-y-1 hover:scale-110"
            >
              <div className="flex justify-center items-center">
                <img
                  src="azamlogo.jpg"
                  alt="LOGO"
                  className="bg-white w-60 mb-5"
                />
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden text-black"
            >
              <MdOutlineCancel />
            </button>
          </div>

          <hr />
          {/* Propfil */}
          <div className="flex items-center">
            <div className="flex">
              <img
                className="rounded-full w-20 p-3 border border-emerald-600"
                src={avatar}
              />
            </div>
            <div className="items-center">
              <p
                className="font-bold items-center ml-2 italic"
                style={{ fontFamily: "cursive" }}
              >
                {skeletonLoading && (
                  <Stack spacing={1}>
                    <Skeleton />
                  </Stack>
                )}
                {data && data.name}
              </p>
              <div className="flex">
                <span className="p-1">
                  <CgWorkAlt />
                </span>
                <p className="text-gray-400">React Developer</p>
              </div>
            </div>
          </div>
          {/* Profile End */}
          <hr />
          <div>
            <div>
              <p className="text-gray-400 m-3 mt-4 uppercase">Dashboard</p>
              <NavLink
                to="/dashboard"
                onClick={handleCloseSidebar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLinks
                }
              >
                <RiAdminFill /> <span className="capitalize">dashboard</span>
              </NavLink>
            </div>
          </div>
          <div>
            <div>
              <p className="text-gray-400 m-3 mt-4 uppercase ">catlog</p>
              <NavLink
                to="/addproduct"
                onClick={handleCloseSidebar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLinks
                }
              >
                <BsFillFilePostFill />{" "}
                <span className="capitalize">Add Product</span>
              </NavLink>
            </div>
          </div>
          <div>
            <div>
              <NavLink
                to="/listProduct"
                onClick={handleCloseSidebar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLinks
                }
              >
                <IoMdListBox /> <span className="capitalize">products</span>
              </NavLink>
            </div>
          </div>
          <div>
            <div>
              <p className="text-gray-400 m-3 mt-4 uppercase">Orders</p>
              <NavLink
                to="/createOrder"
                onClick={handleCloseSidebar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLinks
                }
              >
                <IoMdListBox /> <span className="capitalize">Add orders</span>
              </NavLink>
            </div>
          </div>
          <div>
            <div>
              <NavLink
                to="/listOrders"
                onClick={handleCloseSidebar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLinks
                }
              >
                <IoAddCircleSharp /> <span className="capitalize">orders</span>
              </NavLink>
            </div>
          </div>
          <div>
            <div>
              <p className="text-gray-400 m-3 mt-4 uppercase">offers</p>
              <NavLink
                to="/addcoupons"
                onClick={handleCloseSidebar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLinks
                }
              >
                <RiCoupon2Fill />{" "}
                <span className="capitalize">add coupons</span>
              </NavLink>
            </div>
          </div>
          <div>
            <div>
              <NavLink
                to="/listCoupon"
                onClick={handleCloseSidebar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLinks
                }
              >
                <SiBookstack /> <span className="capitalize">coupons</span>
              </NavLink>
            </div>
          </div>
          <div>
            <p className="text-gray-400 m-3 mt-4 uppercase">customers</p>
            <NavLink
              to="/listCustomers"
              onClick={handleCloseSidebar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
              className={({ isActive }) =>
                isActive ? activeLink : normalLinks
              }
            >
              <IoMdContacts /> <span className="capitalize">customers</span>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/abondondCart"
              onClick={handleCloseSidebar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
              className={({ isActive }) =>
                isActive ? activeLink : normalLinks
              }
            >
              <SiBookstack /> <span className="capitalize">Abondond Cart</span>
            </NavLink>
          </div>
          <div>
            <p className="text-gray-400 m-3 mt-4 uppercase">category</p>
            <NavLink
              to="/addCategory"
              onClick={handleCloseSidebar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
              className={({ isActive }) =>
                isActive ? activeLink : normalLinks
              }
            >
              <IoMdContacts /> <span className="capitalize">Add category</span>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/listCategory"
              onClick={handleCloseSidebar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
              className={({ isActive }) =>
                isActive ? activeLink : normalLinks
              }
            >
              <SiBookstack /> <span className="capitalize">categories</span>
            </NavLink>
          </div>
          <div>
            <p className="text-gray-400 m-3 mt-4 uppercase">User managment</p>
            <NavLink
              to="/addAgent"
              onClick={handleCloseSidebar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
              className={({ isActive }) =>
                isActive ? activeLink : normalLinks
              }
            >
              <IoMdContacts /> <span className="capitalize">Add Agent</span>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/ListAgent"
              onClick={handleCloseSidebar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
              className={({ isActive }) =>
                isActive ? activeLink : normalLinks
              }
            >
              <SiBookstack /> <span className="capitalize">Agents</span>
            </NavLink>
          </div>
          <div>
            <p className="text-gray-400 m-3 mt-4 uppercase">Settings</p>
            <NavLink
              to="/profile"
              onClick={handleCloseSidebar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
              className={({ isActive }) =>
                isActive ? activeLink : normalLinks
              }
            >
              <IoMdContacts /> <span className="capitalize">Profile</span>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
