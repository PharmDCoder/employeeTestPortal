import React from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import { Link } from "react-router-dom";
import Greeting from "../../components/Greeting/greeting";
import "./testList.css";

const TestList = ({ user, currentTests }) => {
  const checkTestRecord = test => {
    const foundRecord = user.testrecord.filter(testRecord => {
      return testRecord.testID === test._id;
    });
    return foundRecord;
  };

  return (
    <div>
      <Greeting className="greeting" user={user} />
      <Container className="table-storage">
        <Row className="testList-form-group">
          <Col size="12">
            <table className="table table-sm">
              <thead>
                <tr className="text-center">
                  <th scope="col">Test Name</th>
                  <th scope="col">Due</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentTests &&
                  user &&
                  currentTests.map((test, index) => {
                    let foundRecord = checkTestRecord(test);
                    console.log(foundRecord)
                    return (
                      <tr key={test._id + "1"} className="text-center">
                        <th scope="row" key={test._id + "2"} className="align-middle">
                          {test.testName}
                        </th>
                        <td key={test._id + "3"} className="align-middle">1/1/21</td>
                        <td key={test._id + "4"} className="align-middle">
                          {foundRecord.length > 0 ? foundRecord[0].testScore + "%" : "-"}
                        </td>
                        <td key={test._id + "5"} className="align-middle">
                          {foundRecord.length > 0 ? (
                            <button
                              key={test._id + "btn1"}
                              className="btn btn-success"
                            >
                              View
                            </button>
                          ) : (
                            <Link key={test._id + "link2"} to={{ pathname: "/testLanding", state: { testid: test._id } }} className="btnLink">
                              <button key={test._id + "btn2"} className="btn btn-primary">          
                                  Start     
                              </button>
                            </Link>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TestList;
