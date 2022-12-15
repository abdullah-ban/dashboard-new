import React, { useState } from "react";
import moment from "moment";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Header from "./Header";
import { useStateContext } from "../context/ContextProvider";
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

const Admission = () => {
  // Hooks
  const [couponName, setCouponName] = useState("");
  const [desc, setDesc] = useState("");
  const [couponType, setCouponType] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [couponUse, setCouponUse] = useState("");
  const [couponValidFrom, setCouponValidFrom] = useState("");
  const [couponValidTo, setCouponValidTo] = useState("");
  const [isActive, setisActive] = useState("0");
  const [allowedRedemption, setAllowedRedemption] = useState("");
  const [totalRedeemed, setTotalRedeemed] = useState("");
  const [minCartAmount, setMinCartAmount] = useState("");

  // Loader
  const [load, setload] = useState(false);

  // Error Catch
  const [error, setError] = useState();

  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  // Loader State
  const handleClose = () => {
    setOpen(false);
  };

  const handleCouponStartChange = (newValue) => {
    setCouponValidFrom(newValue);
  };
  const handleCouponEndChange = (newValue) => {
    setCouponValidTo(newValue);
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  // API Integrations
  const handleAddCoupon = async () => {
    setError("");
    setload(true);

    if (couponName === "") {
      setError("please fill all the fields");
      setload(false);
    } else if (desc === "") {
      setError("please fill all the fields");
      setload(false);
    } else if (couponType === "") {
      setError("please fill all the fields");
      setload(false);
    } else if (couponValue === "") {
      setError("please fill all the fields");
      setload(false);
    } else if (couponUse === "") {
      setError("please fill all the fields");
      setload(false);
    } else if (couponValidFrom === "") {
      setError("please fill all the fields");
      setload(false);
    } else if (couponValidTo === "") {
      setError("please fill all the fields");
      setload(false);
    } else if (isActive === "") {
      setError("please fill all the fields");
      setload(false);
    } else if (allowedRedemption === "") {
      setError("please fill all the fields");
      setload(false);
    } else if (totalRedeemed === "") {
      setError("please fill all the fields");
      setload(false);
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        label: couponName,
        description: desc,
        coupon_type: couponType,
        coupon_value: couponValue,
        coupon_code: couponCode,
        use_per_customer: couponUse,
        valid_from: couponValidFrom,
        valid_to: couponValidTo,
        is_active: isActive,
        total_reedemtion_allowed: allowedRedemption,
        total_reedemed: totalRedeemed,
        min_cart_amount: minCartAmount,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch(process.env.REACT_APP_BASE_URL + "coupons", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.status === 200) {
            toast.success("Coupon Added Successfully!", {
              theme: "light",
              autoClose: "2000",
            });
            setload(false);
            setCouponName("");
            setDesc("");
            setCouponType("");
            setCouponValue("");
            setCouponCode("");
            setCouponUse("");
            setAllowedRedemption("");
            setTotalRedeemed("");
            setMinCartAmount("");
          } else {
            toast.error("Something Went Wrong", {
              theme: "light",
              autoClose: "2000",
            });
            setload(false);
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  // Toggle

  const handleToggleChange = (event) => {
    setisActive(event.target.checked);
    if (event.target.checked) {
      setisActive("1");
    } else {
      setisActive("0");
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
            <div className="sticky top-0 z-100 bg-transparent dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-2xl">
              <Header category="Page" title="Add Coupons" />
              <hr className="border border-[#4CAF50]" />
              {/* Page Start */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="mt-2 mb-5">
                    {error && (
                      <div className="text-red-500 bg-red-50 p-2 border-2 border-red-500 rounded-md">
                        {error}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-start md:justify-end lg:justify-end mb-2 md:mb-0 lg:mb-0 items-center mt-5 md:mt-5 lg:mt-5">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400 mt-2"
                      htmlFor=""
                    >
                      Is Active
                    </label>
                    <Switch
                      {...label}
                      color="success"
                      value={""}
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
                    value={couponName || ""}
                    onChange={(e) => setCouponName(e.target.value)}
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
                    value={desc || ""}
                    onChange={(e) => setDesc(e.target.value)}
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
                      onChange={(e) => setCouponType(e.target.value)}
                      value={couponType || ""}
                    >
                      <option defaultChecked>Select Type</option>
                      <option value={"₹"}>₹ (Rupees)</option>
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
                      placeholder="eg. SKU143"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
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
                      value={couponUse || ""}
                      onChange={(e) => setCouponUse(e.target.value)}
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
                      placeholder="eg. ₹499"
                      value={couponValue || ""}
                      onChange={(e) => setCouponValue(e.target.value)}
                    />
                  </div>
                </div>
                {/* Seventh Row */}
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
                    value={minCartAmount || ""}
                    onChange={(e) => setMinCartAmount(e.target.value)}
                  />
                </div>

                {/* Sixth Row */}
                <div className="mt-0 md:mt-5 lg:mt-4">
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
                            value={couponValidFrom || ""}
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
                            value={couponValidTo || ""}
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
                        value={allowedRedemption || ""}
                        onChange={(e) => setAllowedRedemption(e.target.value)}
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
                        value={totalRedeemed || ""}
                        onChange={(e) => setTotalRedeemed(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-5 flex justify-center md:justify-end">
                  <button
                    className="p-3 hover:drop-shadow-xl rounded-lg text-white transition duration-500 ease-in-out hover:bg-amber-400 mb-5 hover:text-white transform hover:-translate-y-1 hover:scale-110"
                    style={{ background: currentColor }}
                    onClick={handleAddCoupon}
                  >
                    Add Coupon
                  </button>
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

export default Admission;
