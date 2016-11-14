import React from 'react';
import {loadQuestion} from '../reducer';
import {Link} from "react-router";


export default ({getFirstQuestion, question}) => (
      <div id="homepage" className="row">
            <div id="homepageInner">
                  <div className="thumbnail">
                        <div className="caption">
                              <h2 id="rootHeader">What does your future hold?</h2>
                              <div>
                              <p>
                              <Link to="/newQuestions" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" role="button">Click to find out!</Link>
                              </p>
                              </div>
                        </div>
                  </div>
            </div>
      </div>

)

