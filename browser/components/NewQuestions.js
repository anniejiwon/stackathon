
import React, { Component } from 'react';
import Result from './Result'
// var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

export default class NewQuestions extends Component {
    constructor() {
        super();
        this.state= {
            question: '',
            answers: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.doSomething = this.doSomething.bind(this)
        }

    componentDidMount () {
        this.setState({
            question: randomQuestion()
        })
    }


    handleChange(event) {
        this.setState({answer: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({question: randomQuestion(), answers: this.state.answers.concat(this.state.answer), answer: ''});
    }
    doSomething() {
        if (event.keyCode == 13)
            document.getElementById('submitBtn').click()
    }


    render() {
        console.log(this.state)
        return (
            <div id="question" className="row">
                
                {
                    
                    (this.state.answers.length <= 10) ?  
                    <div id="questionInner">
                    <div className="questionThumbnail">
                    <div className="caption">
                    <h3 id="questionHeader">{this.state.question}</h3>
                    </div>
                    <div className="form-group">
                            <form onSubmit={this.handleSubmit}>
                            <div>
                                <input className="form-control" cols="40" rows="5" id="textSpace" autoComplete="off" onChange={this.handleChange} value={this.state.answer}></input>
                            </div>
                            <div id="submitButton">
                                <input id="submitBtn" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit" value="Submit" onKeyDown={this.doSomething}/>
                            </div>
                            </form>
                        </div>
                    </div>
                    </div>
                    :
                    <Result answers={this.state.answers}/>
                }
                    
            </div>
       )
    }
}


// <div className="jumbotron">
                
//                 {
                    
//                     (this.state.answers.length <= 10) ?  
//                     <div>
//                     <div>
//                     <h2 id="rootHeader">{this.state.question}</h2>
//                     </div>
//                     <div className="row text-center">
//                             <form onSubmit={this.handleSubmit}>
//                             <div>
//                                 <textarea cols="40" rows="5" id="textSpace" onChange={this.handleChange} value={this.state.answer}></textarea>
//                             </div>
//                             <div>
//                                 <input className="btn btn-block" type="submit" value="Submit" />
//                             </div>
//                             </form>
//                     </div>
//                     </div>
//                     :
//                     <Result />

//                 }
                    
//             </div>



const answeredQs =[];



function randomQuestion() {
    let questionsAsked = {};
    let question = questions[Math.floor(Math.random() * questions.length)]
    if (!questionsAsked[question]) {
        questions[question] = question
        return question
    } else {
        return randomQuestion
    }
}

const questions = [
  'What is your favorite hobby?',
  'What do you like to do for exercise?',
  'Do you like animals? If so, what is your favorite animal?',
  'Do you believe in an afterlife?',
  'What are you good at? What are you bad at?',
  'What do you think about rollercoasters?',
  'Do you like spicy food?',
  'What\'s your favorite food?',
  'What is your favorite holiday?',
  'Which academic subject is your favorite?',
  'What were you like in high school?',
  'What makes you happy?',
  'What makes you sad?',
  'What is your pet peeve?',
  'Would you rather permanently have only one eyebrow or half a mustache?',
  'Would you rather be a mermaid or a dragon?',
  'What would you do if you had a year to do anything you wanted?',
  'What do you like to shop for?',
  'Where would you most like to vacation?',
  'What do you think about sports? Just in general.',
  'Would you like to work as an entrepreneur?',
  'Are you good at spelling?',
  'What\'s the worst thing about living where you live?',
  'What is your favorite book?',
  'What kind of TV shows do you like?',
  'Would you shave your head for like 500 bucks?',
  'What are your thoughts on hot sauce?',
  'If you had a billion dollars, what would you do with them?',
  'What kind of clothes do you like to buy for yourself?',
  'Are you a good driver?',
  'What do you think about fake eyelashes?',
  'Do you think that free will exists or that humans just use the concept of free will to assign importance to our existence?',
  'If you could only wear one color for the rest of your life, which color would you choose?',
  'Ninjas vs. vikings, who would win?',
  'Could you beat Mark Zuckerberg in a fist fight?',
  'Which do you like better, babies or puppies?',
  'Capitalism. Hot or not?',
  'Do you litter?',
  'Is chapstick important to you?',
  'Do you have any tattoos?',
  'Would you rather be invisible or have super strength?',
  'What do you consider to be the best fictional universe?',
  'Do you like to wear cargo shorts?',
  'What is your least favorite organism?',
  'Who is your favorite historical figure?',
  'How do you feel about slam poetry?',
  'If you could choose a college major again, what would you choose?',
  'Thoughts on surfing?',
  'Would you enjoy being a farmer?',
  'What are you a snob about?',
  'How do you feel about the subway?',
  'How do you feel about Subway?',
  'What is your favorite holiday and why?',
  'With which fictional character do you most identify?',
  'Are you more of a Shrek or a Donkey?',
  'Describe your dream house.',
  'Would you rather eat salads or burritos for the rest of your life?',
  'Do you have any DIY hobbies?',
  'Do you like to play videogames?',
  'Do you believe in karma?'
]


