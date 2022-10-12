import React from 'react';
 import { useLoaderData } from 'react-router-dom';
 import Topic from '../Topic/Topic';

const Home = () => {
     const mainTopics = useLoaderData();
     const topics = mainTopics.data;
     
     return (
         <div className='relative'>
            <img className='w-[95%] mx-auto h-[80vh]' src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGVkdWNhdGlvbiUyMGJhY2tncm91bmR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
            <div className='absolute top-0'>
            <h1 className='text-6xl font-bold text-rose-800 mt-8'>Learn Your Skills</h1>
            <p className='w-[65%] m-auto text-xl md:text-4xl text-rose-500 font-semibold mt-7'>The purpose is to unlock people's potential to maximize their own performance, to improve employee performance in areas directly connected to achieving goals.</p>
             </div>
             <div className='md:flex'>
                {
                topics.map(topic=><Topic topic={topic} key={topic.id}></Topic>)
              }
             </div>
        </div>
        
     );
};

export default Home;