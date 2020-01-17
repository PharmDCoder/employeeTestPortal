import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup/signup";
import Login from "./pages/Login/login";
import Test from "./pages/Test/test";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Logout from "./components/Logout/logout";
import auth from "./services/authService";
import testRecords from "./services/testService";
import "./App.css";

function App() {
  const [userData, setuserData] = useState();

  useEffect(() => {
    const user = auth.getCurrentUser();
    if (user) {
      getEmployeeRecords(user);
    }
  }, []);

  const getEmployeeRecords = async user => {
    const employeeRecords = await testRecords.getTestRecords(user.id);
    setuserData(employeeRecords.data);
    console.log(employeeRecords.data);
  };

  document.title = "SembraCare Test Portal";
  return (
    <Router>
      <div>
        <Navbar user={userData} />
        <Wrapper>
          <Route exact path="/" component={Test} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/logout" component={Logout} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
