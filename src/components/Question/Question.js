import React from 'react';
import Single from '../Single/Single';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {EyeSlashIcon } from '@heroicons/react/24/solid';

const Question = ({option}) => {
   const{options,question,correctAnswer}=option;
     const correctAns = (single) =>{
     if(correctAnswer===single){
        toast('Correct Answer')
      }
     else{
        toast.warning('Wrong Answer')
     }  
     }

     const showCorrectAns=()=>{
       toast.success(option.correctAnswer)
       }

    return (
        <div className='border bg-rose-200 my-5 w-[90%] mx-auto py-4'>
           <div className='flex justify-evenly'>
           <h2 className='text-xl mb-4 max-w-[80%]'>{question}</h2>
           <EyeSlashIcon onClick={showCorrectAns} className="h-8 w-12  text-rose-700 hover:bg-blue-200"/>
           </div>
            {
             options.map((single,idx)=><Single single={single} key={idx} correctAns={correctAns} correctAnswer={correctAnswer}></Single>)
            }

         </div>
    );
};

export default Question;