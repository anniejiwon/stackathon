'use strict';

import { connect } from 'react-redux';
import RootModal from '../components/RootModal';
// import { fetchNewQuestion } from '../reducer';
import {loadQuestion} from '../reducer'


const mapStateToProps = ({allQuestions,question}) => (
    allQuestions,
    question
); 


const mapDispatchToProps = dispatch => ({
    getNewQuestion: (questionId) => dispatch(loadQuestion(questionId))
})

// const mapDispatchToProps = dispatch => ({
//     getNewQuestion(){
//     	dispatch(fetchNewQuestion());
//     }
// })

export default connect(mapStateToProps, mapDispatchToProps)(RootModal);