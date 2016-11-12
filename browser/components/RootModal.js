import React, {Component} from 'react';
import { fetchNewQuestion } from '../reducer';

// export default ({currentQuestion}) => (
//       <div className="container">
//       <div className="modal fade" id="largeModal" tabIndex="-1" role="dialog" aria-labelledby="largeModal" aria-hidden="true">
//         <div className="modal-dialog modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//               <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
//               <h4 className="modal-title" id="myModalLabel">Large Modal</h4>
//             </div>
//             <div className="modal-body">
//               <h3>{currentQuestion}</h3>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
//               <button type="button" className="btn btn-primary">Microphone On</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
// )


export default class RootModal extends React.Component {
      constructor(props) {
        super(props);
      }

      render() {
        console.log('THIS.PROPS: ', this.props); // This is where I'm confused, becuase RootModalContainer should have mapped the currentQuestion to the props, but props is empty
        return (
            <div className="container">
            <div className="modal fade" id="largeModal" tabIndex="-1" role="dialog" aria-labelledby="largeModal" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 className="modal-title" id="myModalLabel">
                        Question goes here
                    </h4>
                  </div>
                  <div className="modal-body">
                    <h3>Input goes here</h3>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Microphone On</button>
                    <button type="button" className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
        )
      }
}