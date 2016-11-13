'use strict';

import { connect } from 'react-redux';
import Root from '../components/Root';
// import { fetchNewQuestion } from '../reducer';
import { loadQuestion } from '../reducer'


const mapStateToProps = ({allQuestions,question}) => (
    allQuestions,
    question
); 


const mapDispatchToProps = dispatch => ({
    getFirstQuestion: () => {
        console.log('OnClick GetFirst Question')
        dispatch(loadQuestion(1))
    }
})

// const mapDispatchToProps = dispatch => ({
//     getNewQuestion(){
//     	dispatch(fetchNewQuestion());
//     }
// })

export default connect(mapStateToProps, mapDispatchToProps)(Root);