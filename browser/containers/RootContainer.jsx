'use strict';

import { connect } from 'react-redux';
import Root from '../components/Root';
// import { fetchNewQuestion } from '../reducer';


const mapStateToProps = ({allQuestions,question}) => (
    allQuestions,
    question
); 

const loadQuestion = function (questionId) {
  return function (dispatch) {
    fetch('/api/questions/' + questionId)
      .then(res => res.json())
      .then(question => 
        dispatch(getQuestion(question))
      )
      .catch(err => console.error(err));
  };
};

const mapDispatchToProps = dispatch => ({
    getFirstQuestion: () => dispatch(loadQuestion(1))
})

export default connect(mapStateToProps, mapDispatchToProps)(Root);