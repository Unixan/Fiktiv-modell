const model = {
  //state, login adminView createQuestion answerQuestion answerSent
  app: { state: "login" },
  loggedInUser: "",

  //input
  login: { loginId: "", loginPwd: "" },
  createQuestion: {
    question: "",
    answers: [],
    freeText: false,
  },
  //data
  questions: [
    {
      id: 1,
      questionTxt: "Hvordan trives du i ditt daglige gjøremål?",
      questionType: "single choice",
      alternatives: [
        { QId: 1, altId: 1, txt: "Ikke så godt", isChecked: false },
        { QId: 1, altId: 2, txt: "Greit nok", isChecked: false },
        { QId: 1, altId: 3, txt: "Godt", isChecked: false },
        { QId: 1, altId: 4, txt: "Helt topp!", isChecked: false },
        {
          QId: 1,
          altId: 5,
          txt: "Annet",
          freeText: { isChecked: false, value: "" },
        },
      ],
    },
    {
      id: 2,
      questionTxt: "Har du noen forslag til forbedringer?",
      questionType: "free text",
      alternatives: [{ QId: 2, altId: 1, answer: "Bedre kaffemaskin" }],
    },
  ],
  users: [
    { id: 1, role: "admin", psw: 123 },
    { id: 2, role: "user" },
  ],

  answeredQuestions: [],
  completedUsersCurrent: [],
  previousPolls: [
    {
      pollId: 1,
      question: "Hvilken ukedag passer best for deg å ha julebord?",
      answers: [
        { PId: 1, day: "Mandag", count: 3 },
        { PId: 1, day: "Tirsdag", count: 2 },
        { PId: 1, day: "Onsdag", count: 5 },
        { PId: 1, day: "Torsdag", count: 1 },
        { PId: 1, day: "Fredag", count: 10 },
        { PId: 1, day: "Lørdag", count: 12 },
        { PId: 1, day: "Søndag", count: 1 },
      ],
      customAnswers: [
        { PId: 1, text: "Vil det serveres veganske retter?" },
        { PId: 1, text: "Vil det være tilpasset muslimske?" },
      ],
      participants: 12,
      participantsAsked: 15,
      dateAndTimeCompleted: "12:00 01.03.2021",
    },
  ],
};
