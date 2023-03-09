import React, { } from 'react';
import './QuestionFilter.css';

function Questionfilter(props) {

    const dropdownChangeHandler = (event) => {
        props.onChangefilter(event.target.value);
    };
    return (
        <div className="question-filter">
         
            <div className='number-question'>
                <h2>Filter by Categories</h2>
                <div className='time'>
                    <select className='dropop' value={props.selected} onChange={dropdownChangeHandler}>
                        <option value="technical">Technology</option>
                        <option value="general">General</option>
                        <option value="science">Science</option>
                        <option value="math">Mathematic</option>
                        <option value="all">All</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Questionfilter;
