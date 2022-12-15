import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "../../context/ContextProvider";
import Header from "../Header";
import Navbar from "../Navbar";
import SideBar from "../Sidebar";
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
import { useNavigate } from "react-router-dom";

const UpdateCoupon = () => {
  // Hooks
  const [couponId, setCouponId] = useState("");
  const [couponName, setCouponName] = useState("");
  const [desc, setDesc] = useState("");
  const [couponType, setCouponType] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [couponUse, setCouponUse] = useState("");
  const [isActive, setisActive] = useState("0");
  const [couponValidFrom, setCouponValidFrom] = useState("");
  const [couponValidTo, setCouponValidTo] = useState("");
  const [allowedRedemption, setAllowedRedemption] = useState("");
  const [totalRedeemed, setTotalRedeemed] = useState("");
  const [miniCartAmount, setMiniCartAmount] = useState("");

  // Update Hooks
  const [uCouponId, setUCouponId] = useState("");
  const [uCouponName, setUCouponName] = useState("");
  const [uDesc, setUDesc] = useState("");
  const [uCouponType, setUCouponType] = useState("");
  const [uCouponValue, setUCouponValue] = useState("");
  const [uCouponCode, setUCouponCode] = useState("");
  const [uCouponUse, setUCouponUse] = useState("");
  const [uIsActive, setUIsActive] = useState("0");
  const [uCouponValidFrom, setUCouponValidFrom] = useState("");
  const [uCouponValidTo, setUCouponValidTo] = useState("");
  const [uAllowedRedemption, setUAllowedRedemption] = useState("");
  const [uTotalRedeemed, setUTotalRedeemed] = useState("");
  const [UMiniCartAmount, setUMiniCartAmount] = useState("");

  //   Loader Hook
  const [load, setLoad] = useState(false);

  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  // Fethching Data From Local Storage
  useEffect(() => {
    setCouponId(localStorage.getItem("ID"));
    setCouponName(localStorage.getItem("Name"));
    setDesc(localStorage.getItem("Description"));
    setCouponType(localStorage.getItem("Type"));
    setCouponValue(localStorage.getItem("Value"));
    setCouponCode(localStorage.getItem("Code"));
    setCouponUse(localStorage.getItem("Use"));
    setisActive(localStorage.getItem("IsActive"));
    setCouponValidFrom(localStorage.getItem("ValidFrom"));
    setCouponValidTo(localStorage.getItem("ValidTo"));
    setAllowedRedemption(localStorage.getItem("RedemptionALlowed"));
    setTotalRedeemed(localStorage.getItem("TotalRedeemed"));
    setMiniCartAmount(localStorage.getItem("MiniCartAmount"));
  }, []);

  //   Date COmponent Function
  const handleCouponStartChange = (newValue) => {
    setUCouponValidFrom(newValue);
  };
  const handleCouponEndChange = (newValue) => {
    setUCouponValidTo(newValue);
  };

  //   Switch Function
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const handleToggleChange = (event) => {
    setUIsActive(event.target.checked);
    if (event.target.checked) {
      setUIsActive("1");
    } else {
      setUIsActive("0");
    }
  };

  const handleUpdate = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      label: uCouponName,
      description: uDesc,
      coupon_type: uCouponType,
      coupon_value: uCouponValue,
      coupon_code: uCouponCode,
      use_per_customer: uCouponUse,
      valid_from: uCouponValidFrom,
      valid_to: uCouponValidTo,
      is_active: uIsActive,
      total_reedemtion_allowed: uAllowedRedemption,
      total_reedemed: uTotalRedeemed,
      min_cart_amount: UMiniCartAmount,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `https://team.flymingotech.in/azamDeals/public/api/coupons/${couponId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          Navigate("/listCoupon");
        } else {
          alert("Error");
        }
      })
      .catch((error) => console.log("error", error));
  };

  // Navigation
  let Navigate = useNavigate();

  // Cancel

  const handleCancel = () => {
    localStorage.removeItem("ID");
    localStorage.removeItem("Name")
    localStorage.removeItem("Description")
    localStorage.removeItem("Type");
    localStorage.removeItem("Value");
    localStorage.removeItem("Code");
    localStorage.removeItem("Use");
    localStorage.removeItem("IsActive");
    localStorage.removeItem("ValidFrom");
    localStorage.removeItem("ValidTo");
    localStorage.removeItem("RedemptionALlowed");
    localStorage.removeItem("TotalRedeemed");
    localStorage.removeItem("MiniCartAmount");
    Navigate("/listCoupon");
  };

  return (
    <>
      {console.log(couponId)}
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <div className="flex relative dark:bg-main-dark-bg">
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
              <Header category="Page" title="Update Coupons" />
              {/* {/_ Content _/} */}
              <div>
                <div className="flex items-center justify-end">
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
                    defaultValue={desc}
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
                      defaultValue={couponType}
                      onChange={(e) => setUCouponType(e.target.value)}
                    >
                      <option value="₹">₹ (Rupees)</option>
                      <option value="%">% (Percentage)</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                      htmlFor=""
                    >
                      Coupon Code
                    </label>
                    <input
                      className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                      type="text"
                      placeholder="eg. ₹499"
                      defaultValue={couponCode}
                      onChange={(e) => setUCouponCode(e.target.value)}
                    />
                  </div>
                </div>

                {/* Fifth Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-3 lg:gap-5 ">
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
                      defaultValue={couponUse}
                      onChange={(e) => setUCouponUse(e.target.value)}
                    />
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
                      placeholder="eg. 05"
                      defaultValue={couponValue}
                      onChange={(e) => setUCouponValue(e.target.value)}
                    />
                  </div>
                </div>

                {/* Sixth Row */}
                <div>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                    htmlFor=""
                  >
                    Minimum Cart Amount
                  </label>
                  <input
                    className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                    type="text"
                    placeholder="eg. ₹499"
                    defaultValue={miniCartAmount}
                    onChange={(e) => setUMiniCartAmount(e.target.value)}
                  />
                </div>

                {/* Seventh Row */}
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

                {/* Eighth Row */}
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
                        defaultValue={allowedRedemption}
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
                        defaultValue={totalRedeemed}
                        onChange={(e) => setUTotalRedeemed(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-5 flex justify-center md:justify-end">
                  <div className="ml-2 grid grid-cols-2 gap-2">
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
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default UpdateCoupon;
