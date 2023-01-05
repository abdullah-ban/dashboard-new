import React from "react";
import { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useStateContext } from "../context/ContextProvider";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { de } from "date-fns/locale";
import { data } from "autoprefixer";


const AddCourse = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  // Hooks
  const [image, setImage] = useState([]);
  const [inputAdd, setInputAdd] = useState([]);




  // Categories
  const [getCat, setGetCat] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.files);
    for (let i = 0; i < e.target.files.length; i++) {
      const value = image;
      value.push({ URI: URL.createObjectURL(e.target.files[i]) });
      setImage(value);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    var idd = "id" + Math.random().toString(16).slice(2)
    let abc = [...inputAdd];
    abc.push({ id: idd, price:0 });
    setInputAdd([...abc]);
  };

  const handleDelete = (dataa, e) => {
    e.preventDefault();
    console.log("All data", inputAdd);
    console.log("id", dataa.id);

    let deletevalue = [...inputAdd];
    console.log("here", deletevalue);
    deletevalue =  deletevalue.filter(item =>
      item.id !== dataa.id
    );
    console.log("after delete", deletevalue);

    setInputAdd([...deletevalue]);
  };

  const handleChangeInputFields = () => {};

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
        setGetCat(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllCategories();
  }, []);

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
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <form>
              <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl mt-20 shadow-none md:shadow-xl lg:shadow-2xl">
                <Header category="Page" title="Add Product" />
                {/* Form */}
                <div>
                  {/* first Row */}
                  <div className="grid w-full grid-cols-1 gap-2 md:gap-3 lg:gap-5 md:grid-cols-2 lg:grid-cols-2">
                    <div className="">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400 mx-2"
                        htmlFor=""
                      >
                        product name
                      </label>
                      <input
                        className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                        type="text"
                        placeholder="eg. Kadha"
                      />
                    </div>
                    <div className="">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                        htmlFor=""
                      >
                        product SKU
                      </label>
                      <input
                        className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                        type="text"
                        placeholder="eg. A1B23"
                      />
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="grid w-full grid-cols-1 gap-2 md:gap-3 lg:gap-5 md:grid-cols-2 lg:grid-cols-3 mt-2 md:mt-5 lg:mt-5">
                    <div>
                      <label
                        htmlFor="countries"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                      >
                        Category
                      </label>
                      <select
                        id="countries"
                        className="bg-gray-200 border text-gray-700 border-gray-200  text-sm rounded focus:ring-emerald-500 focus:bg-white focus:border-emerald-500 w-full py-3 px-4 mb-3 leading-tight dark:bg-main-dark-bg dark:text-white"
                      >
                        {getCat &&
                          getCat.map((el, index) => {
                            return <option key={index}>{el.name}</option>;
                          })}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="countries"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                      >
                        In stock
                      </label>
                      <select
                        id="countries"
                        className="bg-gray-200 border text-gray-700 border-gray-200  text-sm rounded focus:ring-emerald-500 focus:bg-white focus:border-emerald-500 w-full py-3 px-4 mb-3 leading-tight dark:bg-main-dark-bg dark:text-white"
                      >
                        <option defaultValue>Select Yes or No</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                        htmlFor=""
                      >
                        Available Quantity
                      </label>
                      <input
                        className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                        type="text"
                        placeholder="write quantity eg. 11"
                      />
                    </div>
                  </div>

                  {/* Third Row */}
                  <div className="mt-2 md:mt-5 lg:mt-5">
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                        htmlFor=""
                      >
                        Description
                      </label>
                      <textarea
                        className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                        name=""
                        placeholder="write description here"
                        cols="30"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>

                  {/* Fourth Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-5 lg:gap-5 mt-2 md:mt-5 lg:mt-5">
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                        htmlFor=""
                      >
                        Base price
                      </label>
                      <input
                        className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                        type="text"
                        placeholder="eg. ₹149"
                      />
                    </div>

                    <div className="flex items-center gap-5">
                      <div>
                        <label
                          htmlFor=""
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                        >
                          Add variations
                        </label>
                        <input
                          className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 py-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                          placeholder="Tap on icon to add variations"
                          disabled
                        />
                      </div>
                      <div>
                        <button onClick={handleAdd}>
                          <BsFillPlusCircleFill className="mt-4 text-[#4CAF50] text-4xl" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Form Builder */}
                  {inputAdd.map((data, i) => {
                    return (
                      <div key={data.id} className="border-2 border-emerald-500 rounded-md mt-5">
                        <div className="flex justify-end px-3 bg-emerald-500 text-white">
                          <button
                            className="rounded-full"
                            onClick={(e) => handleDelete(data, e)}
                          >
                            X
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-3 lg:gap-5 mt-2 md:mt-5 lg:mt-5 px-5">
                          <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400">
                              Label
                            </label>
                            <input
                              className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                              placeholder="eg. Kadha"
                              // value={data}
                              onChange={(e) => handleChangeInputFields(e, i)}
                            />
                          </div>
                          <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400">
                              price
                            </label>
                            <input
                              className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                              placeholder="eg. ₹149"
                              // value={data}
                            />
                          </div>
                        </div>
                        <div className="px-5">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400">
                            Desc
                          </label>
                          <textarea
                            className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                            rows={3}
                            placeholder="write Description here..."
                            // value={data}
                          ></textarea>
                        </div>
                      </div>
                    );
                  })}
                  {/* Fifth Row */}
                  <div className="mt-2 md:mt-5 lg:mt-5"></div>

                  {/* Sixth Row */}
                  <div className="mt-2 md:mt-5 lg:mt-5">
                    <div>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-400"
                        htmlFor="multiple_files"
                      >
                        Product Images
                      </label>
                      <input
                        className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500 dark:bg-main-dark-bg dark:text-white"
                        id="multiple_files"
                        type="file"
                        onChange={handleChange}
                        multiple
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-8">
                      {image &&
                        image.map((el, index) => {
                          return (
                            <div key={index}>
                              <img
                                className="mt-2 rounded-lg"
                                src={el.URI}
                                alt="dfdf"
                              />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
                {/* Form End */}
                <div className="mt-5 flex justify-center md:justify-end">
                  <button
                    className="p-3 hover:drop-shadow-xl rounded-lg text-white transition duration-500 ease-in-out hover:bg-amber-400 mb-5 hover:text-white transform hover:-translate-y-1 hover:scale-110"
                    style={{ background: currentColor }}
                  >
                    Add Course
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddCourse;
