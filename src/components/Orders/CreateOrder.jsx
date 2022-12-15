import React from "react";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "../../context/ContextProvider";
import Header from "../Header";
import Navbar from "../Navbar";
import SideBar from "../Sidebar";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const CreateOrder = () => {
  // Form Hooks
  const [customerId, setCustomerId] = useState();
  const [addressId, setAddressId] = useState();
  const [productId, setProductId] = useState();
  const [totalOrder, setTotalOrder] = useState();
  const [Quantity, setQuantity] = useState();
  const [Discount, setDiscount] = useState();
  const [CouponId, setCouponId] = useState();
  const [VariationId, setVariationId] = useState();

  // Loader
  // const [open, setOpen] = useState(true);
  const [load, setload] = useState(false);

  // Error
  const [error, seterror] = useState();

  //   ContextProvider
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  //   API Integrations
  const handleCreate = async () => {

    setload(true);
    if (customerId === "") {
      seterror("please fill all the fields");
      setload(false);
    } else if (addressId === "") {
      seterror("please fill all the fields");
      setload(false);
    } else if (productId === "") {
      seterror("please fill all the fields");
      setload(false);
    } else if (totalOrder === "") {
      seterror("please fill all the fields");
      setload(false);
    } else if (Quantity === "") {
      seterror("please fill all the fields");
      setload(false);
    } else if (Discount === "") {
      seterror("please fill all the fields");
      setload(false);
    } else if (CouponId === "") {
      seterror("please fill all the fields");
      setload(false);
    } else if (VariationId === "") {
      seterror("please fill all the fields");
      setload(false);
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        customer_id: customerId,
        address_id: addressId,
        product_id: productId,
        total_order: totalOrder,
        quantity: Quantity,
        discount: Discount,
        coupon_id: CouponId,
        variation_id: VariationId,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch(
        "https://team.flymingotech.in/azamDeals/public/api/order_route",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.Status === 1) {
            toast.success("Order Added Successfully", {
              theme: "light",
              autoClose: "2000",
            });
            setload(false);
            setCustomerId("");
            setAddressId("");
            setProductId("");
            setTotalOrder("");
            setQuantity("");
            setDiscount("");
            setCouponId("");
            setVariationId("");
          } else {
            setload(false);
            toast.error("Something Went Wrong", {
              theme: "light",
              autoClose: "2000",
            });
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  // Loader
  const handleClose = () => {
    setOpen(false);
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
              <SideBar />
            </div>
          ) : (
            <div className="w-0 fixed sidebar dark:bg-secondary-dark-bg">
              <SideBar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
                  ${activeMenu ? "md:ml-72" : "flex-2"}`}
          >
            <div className="fixed md:static bg-transparent dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl mt-20 shadow-2xl">
              <Header category="Page" title="Create Orders" />
              {/* Content */}
              <div>
                {/* First Row */}
                <div>{error && <div className="bg-red-50 text-red-500 p-2 rounded-md border border-red-500 text-sm text-center">{error}</div>}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-3 lg:gap-5">
                  <div className="mt-2 md:mt-5 lg:mt-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400">
                      Customer ID
                    </label>
                    <input
                      className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                      placeholder="eg. 15"
                      defaultValue={customerId}
                      onChange={(e) => setCustomerId(e.target.value)}
                    />
                  </div>
                  <div className="mt-2 md:mt-5 lg:mt-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400">
                      Address ID
                    </label>
                    <input
                      className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                      placeholder="eg. 15"
                      defaultValue={addressId}
                      onChange={(e) => setAddressId(e.target.value)}
                    />
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-3 lg:gap-5">
                  <div className="mt-2 md:mt-5 lg:mt-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400">
                      Product ID
                    </label>
                    <input
                      className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                      placeholder="Quality"
                      defaultValue={productId}
                      onChange={(e) => setProductId(e.target.value)}
                    />
                  </div>
                  <div className="mt-2 md:mt-5 lg:mt-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400">
                      Total Order
                    </label>
                    <input
                      className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                      placeholder="eg. 149"
                      defaultValue={totalOrder}
                      onChange={(e) => setTotalOrder(e.target.value)}
                    />
                  </div>
                </div>

                {/* Third Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-3 lg:gap-5">
                  <div className="mt-2 md:mt-5 lg:mt-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400">
                      Quantity
                    </label>
                    <input
                      className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                      placeholder="eg. 499"
                      defaultValue={Quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <div className="mt-2 md:mt-5 lg:mt-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400">
                      Discount
                    </label>
                    <input
                      className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                      placeholder="eg. 211"
                      defaultValue={Discount}
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-3 lg:gap-5">
                  <div className="mt-2 md:mt-5 lg:mt-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400">
                      Coupon ID
                    </label>
                    <input
                      className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                      placeholder="eg. 211"
                      defaultValue={CouponId}
                      onChange={(e) => setCouponId(e.target.value)}
                    />
                  </div>
                  <div className="mt-2 md:mt-5 lg:mt-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400">
                      Variation Id
                    </label>
                    <input
                      className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                      placeholder="eg. 211"
                      defaultValue={VariationId}
                      onChange={(e) => setVariationId(e.target.value)}
                    />
                  </div>
                </div>

                {/* Button */}
                <div className="mt-5 flex justify-center md:justify-end">
                  <button
                    className="p-3 hover:drop-shadow-xl rounded-lg text-white transition duration-500 ease-in-out hover:bg-amber-400 mb-5 hover:text-white transform hover:-translate-y-1 hover:scale-110"
                    style={{ background: currentColor }}
                    onClick={handleCreate}
                  >
                    Create Order
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

export default CreateOrder;
