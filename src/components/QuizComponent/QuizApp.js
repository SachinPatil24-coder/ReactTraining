import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Question from './Question';
import Card from '../UI/Card';
import "./QuizApp.css";

const QuizApp = (props) => {

    const { questions } = props;

    return (
        <Card className="quiz-app">
            <Header questionsCount={questions.length}/>
            {questions.map((question) => {
                return <Question key={question.id} question={question} questionsCount={questions.length}/>
            })}
            <Footer />
        </Card>

    );
};

export default QuizApp;
