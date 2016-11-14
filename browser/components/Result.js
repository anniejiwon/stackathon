import React, {Component} from 'react';
import axios from 'axios';


export default class Result extends React.Component {
      constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
       }
      handleChange(event) {
            this.setState({answer: event.target.value});
      }
      handleSubmit(event) {
            const textAnswers = this.props.answers.join(" ");
            return axios.post(`/v3/profile`, textAnswers)
            .then(function(res) {
                  res.json();
                  console.log(res.json());
            });
      }
      componentDidMount() {
            console.log('THIS.PROPS.ANSWERS: ', this.props.answers);
      }
      render() {
            return (
                  <div>
                        <h3>RESULTS!</h3>
                        <div>
                              <form onSubmit={this.handleSubmit}>
                                    <div>
                                          <textarea className="form-control" cols="40" rows="5" id="textSpace" onChange={this.handleChange} placeholder={this.props.answers}></textarea>
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

