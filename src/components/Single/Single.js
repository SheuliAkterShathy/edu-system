import React from 'react';
import { ToastContainer } from 'react-toastify';

const Single = ({single,correctAns,correctAnswer}) => {
   return (
        <div className=''  onClick={()=>correctAns(single)}>
           <p className='bg-blue-100 my-5 w-[70%] mx-auto rounded-md cursor-pointer hover:bg-rose-100'> <input type="radio" className=''/> {single}</p>
            <ToastContainer/>
        </div>
    );
};

export default Single;