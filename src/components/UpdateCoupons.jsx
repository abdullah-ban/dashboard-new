import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import Header from "./Header";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Switch from "@mui/material/Switch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const UpdateCoupons = () => {
  // Navigation
  let Navigate = useNavigate();

  const id = localStorage.getItem("ID");

  // Hooks
  const [couponName, setCouponName] = useState("");
  const [desc, setDesc] = useState("");
  const [couponType, setCouponType] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [couponUse, setCouponUse] = useState("");
  const [couponValidFrom, setCouponValidFrom] = useState("");
  const [couponValidTo, setCouponValidTo] = useState("");
  const [isActive, setisActive] = useState("0");
  const [allowedRedemption, setAllowedRedemption] = useState("");
  const [totalRedeemed, setTotalRedeemed] = useState("");
  // Update Hooks
  const [ucouponName, setUCouponName] = useState("");
  const [udesc, setUDesc] = useState("");
  const [ucouponType, setUCouponType] = useState("");
  const [ucouponValue, setUCouponValue] = useState("");
  const [ucouponUse, setUCouponUse] = useState("");
  const [ucouponValidFrom, setUCouponValidFrom] = useState("");
  const [ucouponValidTo, setUCouponValidTo] = useState("");
  const [uisActive, setUisActive] = useState("0");
  const [uallowedRedemption, setUAllowedRedemption] = useState("");
  const [utotalRedeemed, setUTotalRedeemed] = useState("");

  useEffect(() => {
    setCouponName(localStorage.getItem("Name"));
    setDesc(localStorage.getItem("Description"));
    setCouponType(localStorage.getItem("Type"));
    setCouponValue(localStorage.getItem("Value"));
    setCouponUse(localStorage.getItem("Use"));
    setCouponValidFrom(localStorage.getItem("ValidFrom"));
    setCouponValidTo(localStorage.getItem("ValidTo"));
    setisActive(localStorage.getItem("IsActive"));
    setAllowedRedemption(localStorage.getItem("RedemptionALlowed"));
    setTotalRedeemed(localStorage.getItem("TotalRedeemed"));
  }, []);

  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  // Loader
  const [load, setload] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCouponStartChange = (newValue) => {
    setUCouponValidFrom(newValue);
  };
  const handleCouponEndChange = (newValue) => {
    setUCouponValidTo(newValue);
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleUpdate = async (id) => {
    setload(true);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      label: ucouponName,
      description: udesc,
      coupon_type: ucouponType,
      coupon_value: ucouponValue,
      use_per_customer: ucouponUse,
      valid_from: ucouponValidFrom,
      valid_to: ucouponValidTo,
      is_active: uisActive,
      total_reedemtion_allowed: uallowedRedemption,
      total_reedemed: utotalRedeemed,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://team.flymingotech.in/azamDeals/public/api/coupons/` + id,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //   Toggle
  const handleToggleChange = (event) => {
    setUisActive(event.target.checked);
    if (event.target.checked) {
      setUisActive("1");
    } else {
      setUisActive("0");
    }
  };

  return (
    <>
      {console.log(id)}
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
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl mt-20 shadow-2xl">
              <Header category="Page" title="Update Coupon" />
              {/* {/_ Content _/} */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex justify-start md:justify-end lg:justify-end mb-2 md:mb-0 lg:mb-0 items-center mt-0 md:mt-5 lg:mt-5">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400 mt-2"
                      htmlFor=""
                    >
                      Is Active
                    </label>
                    <Switch
                      {...label}
                      color="success"
                      value={isActive}
                      onChange={handleToggleChange}
                    />
                  </div>
                </div>

                {/* second Row */}
                <div>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                    htmlFor=""
                  >
                    Coupon name
                  </label>
                  <input
                    className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                    type="text"
                    placeholder="eg. abcd"
                    defaultValue={couponName}
                    onChange={(e) => setUCouponName(e.target.value)}
                  />
                </div>

                {/* Third Row */}
                <div>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                    htmlFor=""
                  >
                    description
                  </label>
                  <textarea
                    className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                    rows={3}
                    placeholder="write Description here..."
                    value={desc}
                    onChange={(e) => setUDesc(e.target.value)}
                  ></textarea>
                </div>

                {/* Fourth Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-3 lg:gap-5 ">
                  <div>
                    <label
                      htmlFor="countries"
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                    >
                      Coupon Type
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-200 border text-gray-700 border-gray-200  text-sm rounded focus:ring-emerald-500 focus:bg-white focus:border-emerald-500 w-full py-3 px-4 mb-3 leading-tight dark:bg-main-dark-bg dark:text-white"
                      onChange={(e) => setUCouponType(e.target.value)}
                      value={couponType}
                    >
                      {/* <option defaultChecked>Select Type</option> */}
                      <option value={"₹"}>₹ (Rupees)</option>
                      <option value="%">% (Percentage)</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                      htmlFor=""
                    >
                      Coupon Value
                    </label>
                    <input
                      className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                      type="text"
                      placeholder="eg. ₹499"
                      value={couponValue}
                      onChange={(e) => setUCouponValue(e.target.value)}
                    />
                  </div>
                </div>

                {/* Fifth Row */}
                <div>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                    htmlFor=""
                  >
                    Use / Customer
                  </label>
                  <input
                    className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                    type="text"
                    placeholder="eg. 05"
                    value={couponUse}
                    onChange={(e) => setUCouponUse(e.target.value)}
                  />
                </div>

                {/* Sixth Row */}
                <div className="mt-0 md:mt-5 lg:mt-5">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                    htmlFor=""
                  >
                    Coupon Validation
                  </label>
                  <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-5">
                    <div>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                          <DesktopDatePicker
                            label="valid From"
                            inputFormat="DD/MM/YYYY"
                            value={couponValidFrom}
                            onChange={handleCouponStartChange}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider>
                    </div>
                    <div>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                          <DesktopDatePicker
                            label="Valid Till"
                            inputFormat="DD/MM/YYYY"
                            value={couponValidTo}
                            onChange={handleCouponEndChange}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider>
                    </div>
                  </div>
                </div>

                {/* Seventh Row */}
                <div className="mt-2 md:mt-5 lg:mt-5">
                  <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-3 lg:gap-5">
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                        htmlFor=""
                      >
                        redemption Allowed
                      </label>
                      <input
                        className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                        type="text"
                        placeholder="eg. 05"
                        value={allowedRedemption}
                        onChange={(e) => setUAllowedRedemption(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                        htmlFor=""
                      >
                        Total redeemed
                      </label>
                      <input
                        className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                        type="text"
                        placeholder="eg. 05"
                        value={totalRedeemed}
                        onChange={(e) => setUTotalRedeemed(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-5 flex justify-center md:justify-end">
                  <div>
                    <button
                      className="p-3 hover:drop-shadow-xl rounded-lg text-white transition duration-500 ease-in-out hover:bg-amber-400 mb-5 hover:text-white transform hover:-translate-y-1 hover:scale-110"
                      style={{ background: currentColor }}
                      onClick={() => Navigate("/listCoupon")}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="ml-2">
                    <button
                      className="p-3 hover:drop-shadow-xl rounded-lg text-white transition duration-500 ease-in-out hover:bg-amber-400 mb-5 hover:text-white transform hover:-translate-y-1 hover:scale-110"
                      style={{ background: currentColor }}
                      onClick={handleUpdate}
                    >
                      Update Coupon
                    </button>
                  </div>
                </div>
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

export default UpdateCoupons;
