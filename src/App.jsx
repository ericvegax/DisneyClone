import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home.jsx";
import Header from "./component/Header.jsx";
import Login from "./component/Login.jsx";
import PageNotFound from "./component/PageNotFound.jsx";
import PageNotFoundHeader from "./component/PageNotFoundHeader.jsx";
import SignIn from "./component/SignIn.jsx";
import SignInFooter from "./component/SignInFooter.jsx";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<><Header /> <Login /></>} />
                    <Route path="/login" element={<><SignIn /> <SignInFooter /></>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="*" element={<><PageNotFoundHeader /> <PageNotFound /></>} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
