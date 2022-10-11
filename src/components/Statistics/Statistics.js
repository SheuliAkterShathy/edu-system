import React, { useEffect, useState } from 'react';
import axios from 'axios';
 import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [quiz,setQuiz] = useState([]);
    //  console.log(total)
    useEffect( ()=>{
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data=>{
            const quizLoaded =data.data.data;
            const quizData=quizLoaded.map(quiz=>{
                const single={
                    name:quiz.name,
                    total:quiz.total
                
                }
                return single;
            })
            setQuiz(quizData);
        })
    },[])

    return (
        
        <div>
            <h2 className='md:text-3xl font-bold mt-3'>Statistics on the basis of total quiz</h2>
            <div className='flex items-center justify-center w-[90%]'>
           
           <BarChart className='mt-12 ' width={400} height={400} data={quiz}>
         <Bar dataKey="total" fill="#ed919f" />
        <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
        </BarChart>
       </div>
         <h3 className='font-bold mr-6'>Figure:x-axis = name,YAxis = total </h3>
        </div>
    
    );
};

export default Statistics;