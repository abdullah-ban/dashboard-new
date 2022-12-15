import React, { useEffect, useState } from "react";
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { useStateContext } from "../../context/ContextProvider";
import SideBar from "../Sidebar";
import Navbar from "../Navbar";
import Header from "../Header";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const Profile = () => {
  const [getById, setGetById] = useState();
  const [data, setData] = useState({});
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

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

  return (
    <>
      {console.log(getById)}
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
            <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-2xl">
              <Header category="Page" title="Update Your Profile" />
              <hr className="border border-[#4CAF50]" />
              {/* {/_ Content _/} */}
              <div className="px-10 h-[656px] md:h-fit lg:h-fit">
                <div className="flex justify-end ml-80 md:ml-0 lg:ml-0">
                  <button className="flex items-center bg-[#4CAF50] p-1 rounded-md mt-3">
                    <FaUserEdit className="text-2xl text-white ml-1" />
                    <p className="mx-2 capitalize text-white">Edit</p>
                  </button>
                </div>
                <div className="p-8 bg-white border border-transparent md:border-2 lg:border-2">
                  <div className="flex justify-center text-[#4CAF50]">
                    {skeletonLoading && (
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        width={172}
                        height={168}
                        className="ml-40"
                      />
                    )}
                    <img
                      src={
                        data &&
                        process.env.REACT_APP_MEDIA_BASE_URL +
                          data.profile_photo
                      }
                      loading="lazy"
                      className="rounded-full w-[172px] h-[168px]"
                    />
                  </div>
                  <div className="mt-12 text-center pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">
                      {skeletonLoading && (
                        <div className="flex justify-center">
                          <Skeleton
                            animation="wave"
                            width={172}
                            className="text-center text-4xl"
                          />
                        </div>
                      )}
                      {data && data.name}
                    </h1>
                    <div className="font-light text-gray-600 mt-3">
                      {skeletonLoading && (
                        <div className="flex justify-center">
                          <Skeleton
                            animation="wave"
                            width={172}
                            className="text-4xl"
                          />
                        </div>
                      )}
                      {data && data.email}
                    </div>
                    <div className="font-light text-gray-600 mt-3">
                      {skeletonLoading && (
                        <div className="flex justify-center">
                          <Skeleton
                            animation="wave"
                            width={172}
                            className="text-4xl"
                          />
                        </div>
                      )}
                      {data && data.mobile}
                    </div>
                    <div className="grid grid-cols-2 gap-3 p-2 mt-8 rounded-md border border-[#4CAF50] bg-emerald-50">
                      <div>
                        <p className=" text-gray-500">
                          <span className="capitalize font-semibold text-[#4CAF50] mr-1">
                            position:
                          </span>
                          {data && data.position}
                        </p>
                      </div>
                      <div>
                        <p className=" text-gray-500">
                          <span className="capitalize font-semibold text-[#4CAF50] mr-1">
                            Privilage:
                          </span>
                          {data && data.privilege_ids}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
