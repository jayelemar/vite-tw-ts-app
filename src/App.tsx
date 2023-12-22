import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer, Header, Layout, Sidebar } from "./components";
import { Home, NotFound, Product, Dashboard } from "./pages";
import { Forgot, Login, Register, Reset } from "./pages/auth";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_LOGIN } from "./store/redux/feature/authSlice";
import { getLoginStatus } from "./services/authService";

axios.defaults.withCredentials = true;

function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith("/dashboard");

    useEffect(() => {
        async function loginStatus() {
          const status = await getLoginStatus();
          dispatch(SET_LOGIN(status));
        }
        loginStatus();
      }, [dispatch]);
    

    return (
        <>
            {isAdminRoute ? null : <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="/resetpassword/:resetToken" element={<Reset />} />
                {/* <Route path="/resetpassword" element={<Reset />} /> */}

                <Route
                    path="/dashboard"
                    element={
                        <Sidebar>
                            <Layout>
                                <Dashboard />
                            </Layout>
                        </Sidebar>
                    }
                />
            </Routes>
            {isAdminRoute ? null : <Footer />}
            <ToastContainer />
        </>
    );
}

export default App;
