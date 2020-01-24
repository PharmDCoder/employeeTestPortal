import React from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import { Link } from "react-router-dom";
import "./testList.css";
import Greeting from "../../components/Greeting/greeting";

const TestList = ({ user, currentTests }) => {
  const checkTestRecord = test => {
    const foundRecord = user.testrecord.filter(testRecord => {
      return testRecord.testID === test._id;
    });
    return foundRecord.length > 0;
  };

  return (
    <div>
      <Greeting className="greeting" user={user} />
      <Container className="table-storage">
        <Row className="form-group">
          <Col size="12">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">Test Name</th>
                  <th scope="col">Due Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentTests &&
                  user &&
                  currentTests.map((test, index) => {
                    let foundRecord = checkTestRecord(test);
                    return (
                      <tr key={test._id + "1"}>
                        <th scope="row" key={test._id + "2"}>
                          {test.testName}
                        </th>
                        <td key={test._id + "3"}>1/1/21</td>
                        <td key={test._id + "4"}>
                          {foundRecord ? "Complete" : "Incomplete"}
                        </td>
                        <td key={test._id + "5"}>
                          {foundRecord ? (
                            <button
                              key={test._id + "btn1"}
                              className="btn btn-success"
                            >
                              View
                            </button>
                          ) : (
                            <button
                              key={test._id + "btn2"}
                              className="btn btn-primary"
                            >
                              <Link
                                key={test._id + "link2"}
                                to={{
                                  pathname: "/test",
                                  state: { testid: test._id }
                                }}
                                className="btnLink"
                              >
                                Start
                              </Link>
                            </button>
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
