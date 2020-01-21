const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Tests collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/testportal");

const testSeed = [
  {
    testName: "HIPAA",
    testCategory: "safety",
    testRequired: true,
    testCreatedBy: "Jamie",
    testCreatedDate: new Date(2019, 1, 1),
    testQuestions: [
      {
        questionText:
          "If someone works for the same agency as you, you are allowed to discuss information about your client.",
        questionAnswer: "False",
        questionOptionsGood: ["True"]
      },
      {
        questionText: "All of the following should remain confidential except:",
        questionAnswer: "reporting a fall to the nurse",
        questionOptionsGood: [
          "client diagnosis",
          "client social security number",
          "clients phone number"
        ]
      },
      {
        questionText:
          "Confidentiality is one of your clients rights on their Bill of Rights.",
        questionAnswer: "True",
        questionOptionsGood: ["False"]
      },
      {
        questionText: "If you share client confidential information you could:",
        questionAnswer: "All of the above",
        questionOptionsGood: [
          "Lose your job",
          "Face criminal charges",
          "Have a lawsuit"
        ]
      },
      {
        questionText:
          "What would you do if you witness someones breaking client confidentiality?",
        questionAnswer: "Report to supervisor",
        questionOptionsGood: ["Ignore it", "Laugh,", "Join in"]
      },
      {
        questionText:
          "If a client tells you that his left side is numb you must not tell anyone.",
        questionAnswer: "False",
        questionOptionsGood: ["True"]
      },
      {
        questionText:
          "It is okay to share client information with any part of the clients family.",
        questionAnswer: "False",
        questionOptionsGood: ["True"]
      },
      {
        questionText:
          "The following must be kept in a locked cabinet or a supervised area:",
        questionAnswer: "All of the above",
        questionOptionsGood: [
          "Medical records",
          "Personal files",
          "TB test results"
        ]
      },
      {
        questionText:
          "Your supervisor can share your annual evaluation results with your coworkers?",
        questionAnswer: "False",
        questionOptionsGood: ["True"]
      },
      {
        questionText:
          "HIPAA was passed by Congress and is a Federal Law to ensure all of us the confidentiality of our personal medical information.",
        questionAnswer: "True",
        questionOptionsGood: ["False"]
      }
    ]
  },
  {
    testName: "Activities of Daily Living",
    testCategory: "Health",
    testRequired: true,
    testCreatedBy: "Lizzy",
    testCreatedDate: new Date(2019, 6, 1),
    testQuestions: [
      {
        questionText:
          "Which of the following is not considered an activity of daily living (ADL)?",
        questionAnswer: "Cooking",
        questionOptionsGood: ["Bathing", "Toileting", "Transferring"]
      },
      {
        questionText:
          "All patients can improve in doing ADLs if they really want to.",
        questionAnswer: "False",
        questionOptionsGood: ["True"]
      },
      {
        questionText: "Which of the following is true about ADLs",
        questionAnswer:
          "They are the basic activities of caring for oneself that are essential for day to day living",
        questionOptionsGood: [
          "If you are unable to do any of them you are considered homebound",
          "They include such household chores as washing dishes and doing laundry",
          "All of the above."
        ]
      },
      {
        questionText:
          "Which of the following would be important for the home health aide to do in order to help the patient improve in doing ADLs?",
        questionAnswer: "All of the above are important",
        questionOptionsGood: [
          "Learn how to use the assistive devices the patient may need",
          "Encourage the patient to do as much for himself/herself as possible",
          "Provide enough time for the patient to do things"
        ]
      },
      {
        questionText: "Which ADL limitation is reported most often?",
        questionAnswer: "Requiring assistance with bathing",
        questionOptionsGood: [
          "Requiring assistance with eating",
          "Requiring assistance with toileting",
          "Requiring assistance with dressing"
        ]
      },
      {
        questionText:
          "Which of the following is not a common reason that people need help with ADLs?",
        questionAnswer: "Having a baby",
        questionOptionsGood: [
          "Having paralysis",
          "Having fractures",
          "Having chronic lung disease"
        ]
      },
      {
        questionText:
          "A key to success in improving ADL function is good communication between home health aide and professionals who are seeing the patient.",
        questionAnswer: "True",
        questionOptionsGood: ["False"]
      },
      {
        questionText: "How many activities are commonly called the ADLs?",
        questionAnswer: "Six",
        questionOptionsGood: ["Four", "Three", "Seven"]
      },
      {
        questionText:
          "Which of the following is considered to be one of the ADLs?",
        questionAnswer: "Transferring",
        questionOptionsGood: [
          "Using the telephone",
          "Doing laundry",
          "Washing dishes"
        ]
      },
      {
        questionText:
          "Which of the following diseases/conditions may cause a patient to need assistance with ADLs?",
        questionAnswer: "All of the above",
        questionOptionsGood: ["Stroke", "Severe arthritis", "Major surgery"]
      }
    ]
  }
];

db.Test.remove({})
  .then(() => db.Test.collection.insertMany(testSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
