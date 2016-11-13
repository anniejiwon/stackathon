import React from 'react'
import Question from './Question'
import RootModal from './RootModal'
import {loadQuestion} from '../reducer';
import {Link} from "react-router";

// const consolelog = function() {
//       console.log('question: ', question);
// }

// export default ({getFirstQuestion, question}) => (
//       <div>
//         <h1></h1>
//         <div className="jumbotron">
//         <div>
//         <h1 id="rootHeader">Do you have a personality?</h1>
//         <div>
//             <div className="row text-center">
//       <Link to="newQuestions" className="btn btn-lg btn-primary" >Click to find out!</Link> 
//       </div>
//         </div>
//         <div>
//         <RootModal />
//         </div>
//         <Question />
//       </div>
//       </div>
//       </div>

// )

export default ({getFirstQuestion, question}) => (
      <div className="jumbotron">
        <div>
            <h1 id="rootHeader">What's your future?</h1>
            </div>
            <div className="row text-center">
                  <Link to="/newQuestions" >Click to find out!</Link> 
            </div>
      </div>

)