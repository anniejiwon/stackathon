import React from 'react'
import Question from './Question'
import RootModal from './RootModal'

export default ({}) => (
      <div>
            <div>
            <h3 id="welcome">Welcome!</h3>
            <p id="intro1">R. Bulman and A. Won have teamed up with Dr. Watson to bring to you LETS GET PERSONAL. </p>
            <p id="intro1">Here we will test your knowledge of math and science and will determine if your personality is sutiable for humanity.</p>
            <p id="intro1">Good luck!</p>
            </div>
            <div className="jumbotron">
            <div>
            <h1 id="rootHeader">Do you have a personality?</h1>
            <div>
                  <div className="row text-center">
            <a href="#" className="btn btn-lg btn-primary" data-toggle="modal" data-target="#largeModal">Click to find out!</a>
      </div>
            </div>
            <div>
            <RootModal />
            </div>
            <Question />
            </div>
            </div>
      </div>

            

)
