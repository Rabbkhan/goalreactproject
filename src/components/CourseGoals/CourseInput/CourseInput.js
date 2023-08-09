import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
const [isValid, SetIsValid] = useState(true);
const [isBtn , SetIsBtn] = useState(true);
  const goalInputChangeHandler = event => {

    if(event.target.value.trim().length >0){
      SetIsValid(true);
      SetIsBtn(true);
    }
   
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length ===0){
      SetIsValid(false)
      SetIsBtn(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid? 'invalid' : ''}`}>
        <label >Course Goal</label>
        <input  type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type className={`submit ${isBtn? 'blure' : ''}`}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
