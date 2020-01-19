import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup/signup";
import Login from "./pages/Login/login";
import Test from "./pages/Test/test";
import TestList from "./pages/TestList/testList";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Logout from "./components/Logout/logout";
import auth from "./services/authService";
import testRecords from "./services/testService";
import "./App.css";

function App() {
  const [userData, setUserData] = useState();
  const [currentTests, setCurrentTests] = useState();

  useEffect(() => {
    const user = auth.getCurrentUser();
    if (user) {
      getEmployeeRecords(user);
      getCurrentTests();
    }
  }, []);

  const getEmployeeRecords = async user => {
    const { data: employeeRecords } = await testRecords.getTestRecords(user.id);
    setUserData(employeeRecords);
  };

  const getCurrentTests = async () => {
    const { data: currentTests } = await testRecords.getCurrentTests();
    setCurrentTests(currentTests);
  };

  document.title = "SembraCare Test Portal";
  return (
    <Router>
      <div>
        <Navbar user={userData} />
        <Wrapper>
          {userData && (<Route exact path="/"
            render={props => <TestList {...props} user={userData} currentTests={currentTests} />}
          />)
          }
          {!userData && (
            <Route exact path="/login" component={Login} />
          )
          }
          <Route exact path="/test"
            render={props => <Test {...props} user={userData} currentTests={currentTests} />}
          />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/testlist"
            render={props => <TestList {...props} user={userData} currentTests={currentTests} />}
          />
          <Route exact path="/logout" component={Logout} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
