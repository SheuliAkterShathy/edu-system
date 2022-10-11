import React from 'react';
import Single from '../Single/Single';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {EyeSlashIcon } from '@heroicons/react/24/solid';

const Question = ({option}) => {
   const{options,question,correctAnswer}=option;
      console.log(option)
   
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
           <div className='flex items-center justify-evenly'>
           <h2 className='text-xl mb-4 max-w-[80%]'>{question}</h2>
            <EyeSlashIcon onClick={showCorrectAns} className="h-8 w-12  text-rose-700 hover:bg-blue-200"/>
           </div>
            
            {/* <p className='grid grid-cols-2 gap-3 mx-auto'>{options.map(single=><p  className='bg-slate-50 w-[50%] mx-auto'><input type="radio"onClick={correctAns}  /> {single} </p>)}</p> */}
          
          {
                options.map(single=><Single single={single} correctAns={correctAns} correctAnswer={correctAnswer}></Single>)
            }
         
          
        </div>
    );
};

export default Question;