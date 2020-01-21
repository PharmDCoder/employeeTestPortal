import React from "react";
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
// import { Link } from "react-router-dom";

const TableList = ({ props, user, currentTests }) => {
  const checkTestRecord = test => {
    const foundRecord = user.testrecord.filter(testRecord => {
      return testRecord.testID === test._id;
    });
    return foundRecord.length > 0;
  };
  const columns = [
    {
      label: "Test Name",
      field: "id",
      sort: "asc"
    },
    {
      label: "Due Date",
      field: "first",
      sort: "asc"
    },
    {
      label: "Status",
      field: "last",
      sort: "asc"
    },
    {
      label: "Action",
      field: "handle",
      sort: "asc"
    }
  ];

  const rows_regular_btn = [
    {
      id: 1,
      "Due Date": "1/1/21",
      Status: "",
      Action: (
        <MDBBtn className="testList-button" color="purple" size="sm">
          Start
        </MDBBtn>
      )
    },
    {
      id: 2,
      first: "Jacob",
      last: (
        <MDBBtn color="purple" size="sm">
          Button
        </MDBBtn>
      ),
      handle: "@fat"
    },
    {
      id: 3,
      first: "Larry",
      last: "the Bird",
      handle: (
        <MDBBtn color="purple" size="sm">
          Button
        </MDBBtn>
      )
    }
  ];

  return (
    <MDBTable btn small>
      <MDBTableHead columns={columns} />
      <MDBTableBody rows={rows_regular_btn} />
    </MDBTable>
  );
};

export default TableList;
