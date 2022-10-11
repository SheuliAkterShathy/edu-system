import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const mainQuestions=useLoaderData()
    
     const questions = mainQuestions.data.questions;
    return (
        <div>
          {
            questions.map(option=><Question option={option} key={option.id}></Question>)
          } 
        </div>
    );
};

export default Quiz;