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
export default class Result extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        //this is where I'm planning to make the post to watson with the answers as a req.body
    }

    render() {
                
      console.log('IN RESULT, this.state: ', this.state);

      return (
            <div>
                  <h3>RESULTS!</h3>
                          
            </div>
       )
    }
}