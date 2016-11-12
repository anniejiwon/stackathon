
//-------------ACTIONS-------------

const GET_QUESTION = 'GET_QUESTION';

//-------------ACTION CREATORS-------------

export const getQuestion = (question) => ({
	type: GET_QUESTION,
	question
})


//-------CURRENT QUESTION REDUCER--------


// currentQuestion Reducer:
export function reducer(currentQuestion = 'What do you consider to be the best fictional universe?', action) {
    switch(action.type) {
        case GET_QUESTION:
            return action.question;

        default:
            return currentQuestion;
    }
}

//-------------DISPATCHERS-------------

export const fetchNewQuestion = () => ((dispatch) => {
	fetch(`/api/questions/1`)
    .then(res => res.json())
    .then(item => {
    	dispatch(getQuestion(question))
    });
})
