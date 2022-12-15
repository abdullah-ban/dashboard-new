import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import AddCoupons from './components/AddCoupons'
import Registration from './Pages/Registration';
import AddBatch from './components/ListOrders';
import AddCategory from './components/category/AddCategory';
import ListCategory from './components/category/ListCategory';
import CreateOrder from './components/Orders/CreateOrder';
import ListCoupon from './components/ListCoupon';
import ListProduct from './components/ListProduct';
import ListCustomers from './components/ListCustomers';
import AbondondCart from './components/AbondondCart';
import AddAgent from './components/Agent/AddAgent';
import ListAgent from './components/Agent/ListAgent';
import Profile from './components/Profile/Profile';
import UpdateCoupon from './components/Update/UpdateCoupon';
import Login from './Pages/Login';
import './App.css';
import { RiContactsBookLine } from 'react-icons/ri';
import UpdateCategory from './components/Update/UpdateCategory';
import UpdateAgent from './components/Update/UpdateAgent';

function App() {

    // const [validEntry, setvalidEntry] = useState()
    // const [hideRoute, setHideRoute] = useState(false)
    // const validation = () => {
    //     let ifLogout = localStorage.getItem("LoggedOut")
    //     setvalidEntry(ifLogout)
    //     if (validEntry === "yes" ) {
    //         setHideRoute(true)
    //     }
    // }
    // useEffect(() => {
    //     validation();
    // }, [])

    return (
        <>
            <div>
                {/* Routing */}
                <BrowserRouter>
                    <Routes>

                        <>
                            {/* LOGIN, REGISTRATION & DASHBOARD */}
                            <Route exact path='/' element={<Login />} />
                            <Route exact path='/registration' element={<Registration />} />

                            {/* {hideRoute && */}
                            <>
                                {/* Dashboard */}
                                <Route path='/dashboard' element={<Dashboard />} />

                                {/* Catlog */}
                                <Route path='/addproduct' element={<AddProduct />} />
                                <Route path='/listProduct' element={<ListProduct />} />

                                {/* Orders */}
                                <Route path='/createOrder' element={<CreateOrder />} />
                                <Route path='/listOrders' element={<AddBatch />} />

                                {/* Coupons */}
                                <Route path='/addcoupons' element={<AddCoupons />} />
                                <Route path='/listCoupon' element={<ListCoupon />} />
                                <Route path='/updateCoupon' element={<UpdateCoupon />} />

                                {/* Customers & Carts */}
                                <Route path='/listCustomers' element={<ListCustomers />} />
                                <Route path='/abondondCart' element={<AbondondCart />} />

                                {/* Category */}
                                <Route path='/addCategory' element={<AddCategory />} />
                                <Route path='/listCategory' element={<ListCategory />} />
                                <Route path='/updateCategory' element={<UpdateCategory />} />

                                {/* UserManagment */}
                                <Route path='/addAgent' element={<AddAgent />} />
                                <Route path='/ListAgent' element={<ListAgent />} />
                                <Route path='/updateAgent' element={<UpdateAgent />} />

                                {/* UserProfile */}
                                <Route path='/profile' element={<Profile />} />
                            </>
                            {/* } */}
                        </>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
