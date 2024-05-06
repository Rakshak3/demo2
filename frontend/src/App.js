import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import AppNavBar from "./component/Navbar/AppNavBar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
// import ForgotPassword from "./pages/ForgetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile/Profile";
import Faq from "./pages/faq/Faq";
import { useState } from "react";
import Termscondition from "./pages/TermsCondition/Termscondition";
import InterviewRoom from './pages/InterviewRoom/InterviewRoom';
import AIAssist from "./pages/InterviewRoom/AIAssist";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="background">
      <BrowserRouter>
        <ToastContainer />
        <AppNavBar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
        />
        <div>
          <Routes>
            <Route path="/" exact
              element={
                <Home  />
                // isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
              }
            />
           
            <Route path="/register" exact
              element={
                <Register
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  setName={setName}
                  setEmail={setEmail}
                />
              }
            />
            <Route path="/login" exact
              element={
                <Login
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  setName={setName}
                  setEmail={setEmail}
                />
              }
            />
            <Route path="/faq" exact
              element={<Faq/>}
            />
            <Route path="/termscondition" exact
              element={<Termscondition/>}
              // isLoggedIn={isLoggedIn} name={name} email={email} 
            />
            <Route path="/InterviewRoom"
              element={<InterviewRoom/>}
            />
            <Route path="/aiassist"
              element={<AIAssist/>}
            />
            <Route path="/profile" exact
              element={
                <Profile/>
                // isLoggedIn={isLoggedIn} name={name} email={email} 
              }
            />
          </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
};

export default App;