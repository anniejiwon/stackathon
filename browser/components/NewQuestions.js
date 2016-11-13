
import React, { Component } from 'react';
import Result from './Result'

export default class NewQuestions extends Component {
    constructor() {
        super();
        this.state= {
            question: '',
            answers: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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


    render() {
        console.log(this.state)
        return (
            <div className="jumbotron">
                
                {
                    
                    (this.state.answers.length <= 10) ?  
                    <div>
                    <div>
                    <h2 id="rootHeader">{this.state.question}</h2>
                    </div>
                    <div className="row text-center">
                            <form onSubmit={this.handleSubmit}>
                            <div>
                                <textarea cols="40" rows="5" id="textSpace" onChange={this.handleChange} value={this.state.answer}></textarea>
                            </div>
                            <div>
                                <input className="btn btn-block" type="submit" value="Submit" />
                            </div>
                            </form>
                    </div>
                    </div>
                    :
                    <Result />

                }
                    
            </div>
       )
    }
}



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








// import React, { Component } from 'react';

// export default class NewQuestions extends Component {
//   componentDidMount() {
//     this.nextQuestion()
//   }

//   nextQuestion = () =>
//     this.setState({
//       question: randomQuestion(),
//       answered: false,
//     })

//   answer = () => {
//     this.setState({answered: true})
//   }

//   render() {
//     if (!this.state) { return null }

//     const {question, answered} = this.state    
//     return (
//       <div onClick={answered ? this.nextQuestion : this.answer}>
//         <h1>{question.q}</h1>
//         {answered && <h2>{question.a}</h2>}
//       </div>
//     )
//   }
// }

// function randomQuestion() {
//   return questions[Math.floor(Math.random() * questions.length)]
// }

// const questions = [
//   'What is your favorite hobby?',
//   'What do you like to do for exercise?',
//   'Do you like animals? If so, what is your favorite animal?',
//   'Do you believe in an afterlife?',
//   'What are you good at? What are you bad at?',
//   'What do you think about rollercoasters?',
//   'Do you like spicy food?',
//   'What\'s your favorite food?',
//   'What is your favorite holiday?',
//   'Which academic subject is your favorite?',
//   'What were you like in high school?',
//   'What makes you happy?',
//   'What makes you sad?',
//   'What is your pet peeve?',
//   'Would you rather permanently have only one eyebrow or half a mustache?',
//   'Would you rather be a mermaid or a dragon?',
//   'What would you do if you had a year to do anything you wanted?',
//   'What do you like to shop for?',
//   'Where would you most like to vacation?',
//   'What do you think about sports? Just in general.',
//   'Would you like to work as an entrepreneur?',
//   'Are you good at spelling?',
//   'What\'s the worst thing about living where you live?',
//   'What is your favorite book?',
//   'What kind of TV shows do you like?',
//   'Would you shave your head for like 500 bucks?',
//   'What are your thoughts on hot sauce?',
//   'If you had a billion dollars, what would you do with them?',
//   'What kind of clothes do you like to buy for yourself?',
//   'Are you a good driver?',
//   'What do you think about fake eyelashes?',
//   'Do you think that free will exists or that humans just use the concept of free will to assign importance to our existence?',
//   'If you could only wear one color for the rest of your life, which color would you choose?',
//   'Ninjas vs. vikings, who would win?',
//   'Could you beat Mark Zuckerberg in a fist fight?',
//   'Which do you like better, babies or puppies?',
//   'Capitalism. Hot or not?',
//   'Do you litter?',
//   'Is chapstick important to you?',
//   'Do you have any tattoos?',
//   'Would you rather be invisible or have super strength?',
//   'What do you consider to be the best fictional universe?',
//   'Do you like to wear cargo shorts?',
//   'What is your least favorite organism?',
//   'Who is your favorite historical figure?',
//   'How do you feel about slam poetry?',
//   'If you could choose a college major again, what would you choose?',
//   'Thoughts on surfing?',
//   'Would you enjoy being a farmer?',
//   'What are you a snob about?',
//   'How do you feel about the subway?',
//   'How do you feel about Subway?',
//   'What is your favorite holiday and why?',
//   'With which fictional character do you most identify?',
//   'Are you more of a Shrek or a Donkey?',
//   'Describe your dream house.',
//   'Would you rather eat salads or burritos for the rest of your life?',
//   'Do you have any DIY hobbies?',
//   'Do you like to play videogames?',
//   'Do you believe in karma?'
// ]
//   .reduce((all, row, i) =>
//     i % 2 === 0
//     ? [...all, {q: row}]
//     : [...all.slice(0, all.length - 1), Object.assign({a: row}, all[all.length - 1])],
//     [])