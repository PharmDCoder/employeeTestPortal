import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { FaExclamationCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import Greeting from "../../components/Greeting/greeting";
import { Link } from "react-router-dom";
import "./testListMdb.css";

const TableList = ({ user, currentTests }) => {
  const [testData, setTestData] = useState();
  console.log(currentTests);

  useEffect(() => {
    try {
      console.log("Creating Test Data");
      let testDataHold = [];
      if (currentTests) {
        currentTests.forEach(test => {
          let testRecord = checkTestRecord(test);
          let testDate;
          if (testRecord.found) {
            testDate = new Date(testRecord.foundRecord[0].testFinish);
            testDate.setDate(testDate.getDate() + 364);
          }
          console.log(testRecord);
          let testObject = {
            required: test.testRequired ? <FaExclamationCircle /> : "",
            name: test.testName,
            dueDate: test.testRequired
              ? testRecord.found
                ? testDate.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "numeric",
                    year: "2-digit"
                  })
                : "1/1/21"
              : "-",
            grade: testRecord.found
              ? testRecord.foundRecord[0].testScore + "%"
              : "-",
            actions: testRecord.found ? (
              <Link
                key={test._id + "link1"}
                to={{
                  pathname: "/testView",
                  state: { testid: test._id }
                }}
                className="btnLink"
              >
                <button key={test._id + "btn1"} className="btn btn-success">
                  {/* View
              <br/> */}
                  {testRecord.foundRecord[0].testScore + "%"}
                </button>
              </Link>
            ) : (
              <Link
                key={test._id + "link2"}
                to={{
                  pathname: "/testLanding",
                  state: { testid: test._id }
                }}
                className="btnLink"
              >
                <button
                  key={test._id + "btn2"}
                  className="btn btn-primary open-test-button"
                >
                  Start
                </button>
              </Link>
            )
          };
          testDataHold.push(testObject);
        });
        setTestData({ columns: data.columns, rows: testDataHold });
        console.log({ columns: data.columns, rows: testDataHold });
      }
    } catch (ex) {}
  }, [user, currentTests]);

  const checkTestRecord = test => {
    const foundRecord = user.testrecord.filter(testRecord => {
      return testRecord.testID === test._id;
    });
    return { found: foundRecord.length > 0, foundRecord: foundRecord };
  };

  const data = {
    columns: [
      {
        label: "",
        field: "required",
        width: 20
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150
      },
      {
        label: "DueDate",
        field: "dueDate",
        sort: "asc",
        width: 100
      },
      // {
      //   label: 'Grade',
      //   field: 'grade',
      //   sort: 'asc',
      //   width: 100
      // },
      {
        label: "",
        field: "actions",
        sort: "asc",
        width: 100
      }
    ],
    rows: [
      {
        required: "Michael Bruce",
        name: "Javascript Developer",
        dueDate: "Singapore",
        actions: "29"
      }
    ]
  };

  return (
    <IconContext.Provider
      value={{ color: "red", size: "1.5em", className: "global-class-name" }}
    >
      <React.Fragment>
        {/* <Greeting className="greeting" user={user} /> */}
        <MDBDataTable
          data={testData}
          className="bg-light mb-5 pt-2 text-center test-view-table"
          displayEntries={false}
          noBottomColumns="false"
          searchLabel="Search Test"
        />
      </React.Fragment>
    </IconContext.Provider>
  );
};

export default TableList;
