import React from 'react'
import Question from './Question'
import RootModal from './RootModal'

export default ({}) => (
  <div>
        <h1></h1>
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
