import React from 'react';
import Card from '../UI/Card';
import Options from './Options';

const Question = (props) => {

    const { question, questionsCount } = props;

    return (
        <Card>
            <h3>{"Q" + question.id + ": " + question.statement}</h3>
            <Options options={question.options} questionId={question.id} />
            <span>{question.id} of {questionsCount}</span>
            <hr />
        </Card>
    );
};

export default Question;
