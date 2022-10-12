import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const mainQuestions=useLoaderData()
    const questions = mainQuestions.data.questions;

    return (
        <div>
          <h1 className='text-3xl font-bold text-rose-500 mt-6  mb-8 underline underline-offset-8'>
           Quiz of {mainQuestions.data.name}
          </h1>
          {
            questions.map(option=><Question option={option} key={option.id}></Question>)
          } 
        </div>
    );
};

export default Quiz;