import { combineReducers } from 'redux'
import axios from 'axios';

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
export function question(question = {}, action) {
    switch(action.type) {
        case GET_QUESTION:
            return action.question;

        default:
            return question;
    }
}

export function questions(questions = [], action) {
    switch(action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return action.questions;

        default:
            return questions;
    }
}

//-------------DISPATCHERS-------------

// export const loadQuestion = function (questionId) {
//     console.log('loadQuestion');
//   return function (dispatch) {
//     axios.get(`api/questions/${questionId}`)
//       .then(res => res.json())
//       .then(question => 
//         dispatch(getQuestion(question))
//       )
//       .catch(err => console.error(err));
//   };
// };


export const loadQuestion = (questionId) => ((dispatch) => {
	console.log("dispatching getQuestion")
	fetch(`api/questions/${questionId}`)
    .then(res => res.json())
    .then(question => {
    	console.log("QUESTION: ", question);
    	dispatch(getQuestion(question))
    });
})




const rootReducer = combineReducers({
  questions,
  question
});

export default rootReducer;



