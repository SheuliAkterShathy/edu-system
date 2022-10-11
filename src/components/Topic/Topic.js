import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({topic}) => {
  
const navigate= useNavigate();
const handleQuiz=()=>{
   navigate(`/topic/${id}`)
}

    const {id,name,logo,total} = topic
    return (
    <div className='w-[90%] m-4'>
     <div className="card card-compact bg-rose-200 shadow-xl">
       <figure><img className='bg-slate-200 h-44 w-full' src={logo} alt="logo" /></figure>
      <div className="card-body">
       <h2 className="card-title">Name:{name}</h2>
      <p className='text-start'>Total Questions:{total}</p>
     <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>handleQuiz(id)}>Start Quiz</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Topic;