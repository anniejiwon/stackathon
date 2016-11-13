import React, {Component} from 'react';
// import axios from 'axios';


// export default ({}) => {
//       console.log('IN RESULT, this.state: ', state)
//       return (
//       <div>
//       <h3>RESULTS!</h3>
//       </div>
// )}

// I just had to change this to a component to test something out, feel free to change it back
// export default class Result extends Component {
//     constructor(props) {
//         super();
//     }

//     componentDidMount() {
//         //this is where I'm planning to make the post to watson with the answers as a req.body
//     }

//     render() {
                
//       console.log('IN RESULT, this.state: ', this.state);

//       return (
//             <div>
//                   <h3>RESULTS!</h3>
                          
//             </div>
//        )
//     }
// }

// var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');



export default class Result extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  result: ""
            }
            
       }
       handleChange() {
            this.setState({result: event.target.value});
       }


      // var personality_insights = new PersonalityInsightsV3({
      //       username: 'anniejiwon@gmail.com',
      //       password: 'xx',
      //       version_date: '2016-10-19'
      //       });

      //       personality_insights.profile({
      //       text: {this.state.result},
      //       consumption_preferences: true
      //       },
      //       function (err, response) {
      //       if (err)
      //             console.log('error:', err);
      //       else
      //             console.log(JSON.stringify(response, null, 2));
      //       });

      
      render() {
            return (
            <div>
                  <h3>RESULTS!</h3>
                  <div>
                        <form onSubmit={this.handleSubmit}>
                        <div>
                        <textarea className="form-control" cols="40" rows="5" id="textSpace"  placeholder={this.props.answers}></textarea>
                        </div>
                        <div id="submitButton">
                        <input className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit" value="Submit" />
                        </div>
                        </form>
                  </div>
            </div>

      )
      }
}

