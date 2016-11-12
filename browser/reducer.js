import { combineReducers } from 'redux'

//-------------ACTIONS-------------

const GET_QUESTION = 'GET_QUESTION';
const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS'

//-------------ACTION CREATORS-------------

export const getQuestion = (question) => ({
	type: GET_QUESTION,
	question
})

export const receiveAllQuestions = (questions) => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
})

//-------CURRENT QUESTION REDUCER--------


// currentQuestion Reducer:
export function questionReducer(state = {}, action) {
    switch(action.type) {
        case GET_QUESTION:
            return action.question;

        default:
            return state;
    }
}

export function questionsReducer(state = [], action) {
    switch(action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return action.questions;

        default:
            return state;
    }
}

//-------------DISPATCHERS-------------

export const loadQuestion = function (questionId) {
  return function (dispatch) {
    fetch('/api/questions/' + questionId)
      .then(res => res.json())
      .then(question => 
        dispatch(getQuestion(question))
      )
      .catch(err => console.error(err));
  };
};

// export const fetchNewQuestion = () => ((dispatch) => {
// 	fetch(`/api/questions/1`)
//     .then(res => res.json())
//     .then(item => {
//     	dispatch(getQuestion(question))
//     });
// })


const rootReducer = combineReducers({
  allQuestions: questionsReducer,
  question: questionReducer
});

export default rootReducer;