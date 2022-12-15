import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.jpg";
import { useStateContext } from "../context/ContextProvider";
import { PopupMenu } from "react-simple-widgets";
import "../Pages/UserProfile.css";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}
  </button>
);

const Navbar = () => {
  let Navigate = useNavigate();

  const handleLogOut = async () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("UserId");
    localStorage.setItem("LoggedOut", "yes");
    Navigate("/");
  };

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

  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div
      className="flex justify-start md:justify-between p-2 md:mx-6 relative rounded-lg mt-2"
      style={{ background: currentColor }}
    >
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="black"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick("userProfile")}
        >
          <img className="rounded-full w-8 h-8" src={avatar} />
          <div id="dropdown">
            <div className="text-end">
              <PopupMenu>
                <button>
                  <span className="text-black text-14">Hi,</span>
                  <span className="text-black font-bold ml-1 text-14">
                    {skeletonLoading && (
                      <Stack spacing={1}>
                        <Skeleton />
                      </Stack>
                    )}
                    {data && data.name}
                  </span>
                </button>
                <div className="card text-start dark:bg-main-dark-bg shadow-2xl ml-7 md:ml-0 mt-11 md:mt-9">
                  <div className="card-body px-4 py-4">
                    <div
                      id="circle-avatar"
                      className="text-center mx-auto mb-4"
                    >
                      <img className="rounded-full" src={avatar} alt="" />
                    </div>

                    <h5 className="text-center text-sm font-semibold dark:text-white">
                      Abdullah Bandarkar
                    </h5>
                    <p className="text-center mb-2 dark:text-white">
                      abdullahbandarkar.130602@gmail.com
                    </p>

                    <hr />

                    <p className="text-gray-500 font-bold text-sm mt-4 dark:text-gray-400">
                      ROLE
                    </p>
                    <p className="text-sm font-semibold mt-1 dark:text-white">
                      Administrator
                    </p>
                    <hr />

                    <div className="flex justify-center">
                      <button
                        className="text-sm bg-red-700 text-white rounded-xl p-2 w-52 mt-5"
                        onClick={handleLogOut}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </PopupMenu>
            </div>
          </div>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
