import React, { useEffect, useState } from "react";
import "mdbreact";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
import { Modal } from "react-bootstrap";
// import HIPAA from "../../constants/materials.js";
import testService from "../../services/testService";
import SignatureCanvas from "react-signature-canvas";
import ADL from "../../components/TestingTests/adl.js";
import OralHygiene from "../../components/TestingTests/oralHygiene";
import BackSafety from "../../components/TestingTests/backSafety";
import DressingAndGrooming from "../../components/TestingTests/dressingAndGrooming";
import FootCare from "../../components/TestingTests/footCare";
import HandHygiene from "../../components/TestingTests/handHygiene";
import InfectionControl from "../../components/TestingTests/infectionControl";
import MealPlanning from "../../components/TestingTests/mealPlanning";
import SafeTransfers from "../../components/TestingTests/safeTransfers";
import HomeEnvironmentSafety from "../../components/TestingTests/homeEnvironmentSafety";
import "./test.css";

const Test = ({ location, user }) => {
  const [currentTest, setCurrentTest] = useState();
  const [currentQuestionObject, setCurrentQuestionObject] = useState();
  const [correctAnswerCount, setCorrectAnswerCount] = useState();
  const [wrongAnswerCount, setWrongAnswerCount] = useState();
  const [startTime, setStartTime] = useState();
  const [questionList, setQuestionsList] = useState([]);
  const [questionError, setQuestionError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [finalizeTest, setFinalizeTest] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [empSignature, setEmpSignature] = useState(false);
  let empSignaturePad = {};

  useEffect(() => {
    try {
      setStartTime(new Date());
      const test = location.state.test;
      test.testQuestions = shuffleFunction(test.testQuestions);

      setCurrentTest(test);
      setCurrentQuestionObject({
        currentQuestion: test.testQuestions[0],
        currentQuestionIndex: 0,
        currentQuestionOptions: scrambleOptions(test.testQuestions[0]),
        selectedAnswer: ""
      });
      setCorrectAnswerCount(0);
      setWrongAnswerCount(0);
    } catch (ex) {}
  }, [location]);

  function shuffleFunction(testQuestions) {
    for (let i = testQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [testQuestions[i], testQuestions[j]] = [
        testQuestions[j],
        testQuestions[i]
      ];
    }
    return testQuestions;
  }

  function scrambleOptions(currentQuestion) {
    let questionArr = [];
    questionArr.push(currentQuestion.questionAnswer);
    if (currentQuestion.questionOptionsGood.length === 1) {
      questionArr.push(currentQuestion.questionOptionsGood[0]);
    } else {
      setCurrentQuestionObject({
        ...currentQuestionObject,
        currentQuestion: {
          questionOptionsGood: shuffleFunction(
            currentQuestion.questionOptionsGood
          ),
          questionOptionsBad: shuffleFunction(
            currentQuestion.questionOptionsBad
          )
        }
      });
      questionArr.push(currentQuestion.questionOptionsGood[0]);
      questionArr.push(currentQuestion.questionOptionsGood[1]);
      questionArr.push(currentQuestion.questionOptionsBad[0]);
    }
    return shuffleFunction(questionArr);
  }

  const handleNext = async e => {
    e.preventDefault();
    setQuestionError(false);
    const {
      selectedAnswer,
      currentQuestion,
      currentQuestionIndex
    } = currentQuestionObject;

    if (selectedAnswer === "") {
      setErrorMessage("Please select an Answer");
      setQuestionError(true);
      return;
    }

    if (correctAnswerCount + wrongAnswerCount <= 10) {
      if (selectedAnswer === currentQuestion.questionAnswer) {
        setCorrectAnswerCount(correctAnswerCount + 1);
        setQuestionsList([
          ...questionList,
          {
            testQuestionText: currentQuestion.questionText,
            testQuestionAnswer: currentQuestion.questionAnswer,
            testQuestionCorrect: true
          }
        ]);
      } else {
        setWrongAnswerCount(wrongAnswerCount + 1);
        if (currentQuestion.questionOptionsBad.indexOf(selectedAnswer) > -1) {
          setQuestionsList([
            ...questionList,
            {
              testQuestionText: currentQuestion.questionText,
              testQuestionAnswer: currentQuestion.questionAnswer,
              testQuestionCorrect: false,
              testQuestionBad: true,
              testQuestionExplanation: currentQuestion.questionExplanation
            }
          ]);
        } else {
          setQuestionsList([
            ...questionList,
            {
              testQuestionText: currentQuestion.questionText,
              testQuestionAnswer: currentQuestion.questionAnswer,
              testQuestionCorrect: false,
              testQuestionExplanation: currentQuestion.questionExplanation
            }
          ]);
        }
      }
    }

    if (currentQuestionIndex + 1 < 10) {
      setCurrentQuestionObject({
        currentQuestionIndex: currentQuestionIndex + 1,
        currentQuestion: currentTest.testQuestions[currentQuestionIndex + 1],
        currentQuestionOptions: scrambleOptions(
          currentTest.testQuestions[currentQuestionIndex + 1]
        ),
        selectedAnswer: ""
      });
    } else {
      setFinalizeTest(true);
    }
  };

  const handleAnswerSelect = async e => {
    setCurrentQuestionObject({
      ...currentQuestionObject,
      selectedAnswer: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const currentTestScore =
        (correctAnswerCount / (correctAnswerCount + wrongAnswerCount)) * 100;
      const testRecord = {
        testScore: currentTestScore,
        testPass: currentTestScore >= 70,
        testStart: startTime,
        testFinish: new Date(),
        testID: currentTest._id,
        testQuestionList: questionList,
        testSignature: empSignature
      };
      testService.postTestRecord(testRecord, user.id);

      window.location = "/testlist";
    } catch (ex) {
      if (ex.response) {
        setErrorMessage(ex.response.data);
        setQuestionError(true);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const signatureClear = () => {
    empSignaturePad.clear();
  };

  const signatureSave = () => {
    setEmpSignature(empSignaturePad.getTrimmedCanvas().toDataURL("image/png"));
    setShowModal(false);
  };

  const renderSwitch = testName => {
    switch (testName) {
      case "HIPAA":
        return <DressingAndGrooming />;
      case "Activities of Daily Living":
        return <ADL />;
      case "Foot Care":
        return <FootCare />;
      case "Back Safety":
        return <BackSafety />;
      case "Hand Hygiene":
        return <HandHygiene />;
      case "Infection Control":
        return <InfectionControl />;
      case "Nutrition":
        return <MealPlanning />;
      case "Oral Hygiene":
        return <OralHygiene />;
      case "Preventing Falls":
        return <HomeEnvironmentSafety />;
      case "Safe Transfers":
        return <SafeTransfers />;
      default:
        return <ADL />;
    }
  };

  return (
    <React.Fragment>
      <Modal className="modal" show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Employee Signature:</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <SignatureCanvas
            canvasProps={{ width: 300, height: 200, className: "sigCanvas" }}
            ref={ref => {
              empSignaturePad = ref;
            }}
          />
          <button class="modal-clear-btn" onClick={signatureClear}>
            Clear
          </button>
          <button class="modal-save-btn" onClick={signatureSave}>
            Save
          </button>
        </Modal.Body>
      </Modal>

      <MDBContainer className="carousel-container">
        {/* <h1 className="title">{Hipaa.title}</h1> */}
        <MDBCarousel
          className="z-depth-1 carousel"
          activeItem={1}
          length={2}
          showControls={false}
          showIndicators={true}
          interval={false}
        >
          <div className="carousel-content">
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView className="text-left">
                  {currentTest && renderSwitch(currentTest.testName)}
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                {currentQuestionObject && (
                  <MDBView>
                    <h3>
                      {currentQuestionObject.currentQuestion.questionText}
                    </h3>
                    {currentQuestionObject.currentQuestionOptions.map(
                      option => {
                        return (
                          <React.Fragment>
                            <hr />
                            <label className="radio-inline" for={option}>
                              <input
                                id={option}
                                type="radio"
                                name="currentAnswers"
                                value={option}
                                checked={
                                  currentQuestionObject.selectedAnswer ===
                                  option
                                }
                                onChange={handleAnswerSelect}
                              />
                              {option}
                            </label>
                          </React.Fragment>
                        );
                      }
                    )}
                    <hr />
                    {questionError && (
                      <div class="alert alert-danger p-1" role="alert">
                        <strong>{errorMessage}</strong>
                      </div>
                    )}
                    {!finalizeTest && (
                      <button className="btn-next" onClick={handleNext}>
                        Next
                      </button>
                    )}
                    {finalizeTest && !empSignature && (
                      <React.Fragment>
                        <h6 className="you-scored">
                          You scored a:{" "}
                          {(100 * correctAnswerCount) /
                            (correctAnswerCount + wrongAnswerCount)}
                          %
                        </h6>
                        <button className="btn-next" onClick={openModal}>
                          Finish Test
                        </button>
                      </React.Fragment>
                    )}
                    {empSignature && (
                      <button className="btn-submit" onClick={handleSubmit}>
                        Submit Test{" "}
                        {(100 * correctAnswerCount) /
                          (correctAnswerCount + wrongAnswerCount)}
                        %
                      </button>
                    )}
                  </MDBView>
                )}
              </MDBCarouselItem>
              {/* <MDBCarouselItem itemId="3">
                 <ADL />
              </MDBCarouselItem> */}
            </MDBCarouselInner>
          </div>
        </MDBCarousel>
      </MDBContainer>
    </React.Fragment>
  );
};

export default Test;
