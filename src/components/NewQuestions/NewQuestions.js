import React, { useState } from 'react'

import './NewQuestions.css';
import QuestionForm from './QuestionForm';

function NewQuestion(props) {

    const [isEditing, setisEditing] = useState(false);
    const savequestionhandler = (enteredquestiondata) => {
        const questiondata = {
            ...enteredquestiondata,
            id: Math.random().toString(),
        };
        props.addQuestion(questiondata);
        setisEditing(false);
    };
    const startEditing = () => {
        setisEditing(true);
    }

    const stopEditing = () => {
        setisEditing(false);
    }
   
    return (
        <div className="new-expense">

            {/* {!isEditing &&(
          <button onClick={startEditing}>Add New Question</button>
        )
      }
      {isEditing &&(
        <QuestionForm onquestionsave={savequestionhandler} onCancel={stopEditing}/>
      )
      } */}
            {
                isEditing ? <QuestionForm onquestionsave={savequestionhandler} onCancel={stopEditing} /> : <button onClick={startEditing}>Add New Question</button>
            }

        </div>
    )
}

export default NewQuestion