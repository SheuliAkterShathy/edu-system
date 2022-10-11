import React from 'react';

const Blog = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <h2 className='text-3xl font-semibold mt-5 mb-8'>Answer of some questions</h2>
            <div className='bg-rose-200 my-5 p-4 rounded-md'>
                <h3 className='text-xl font-semibold mb-2'>Question no 1:What is the purpose of React Router?</h3>
                <p>Answer:React Router is a standard library for routing in React.React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
                </div>

              <div className='bg-rose-200 mb-5 p-4 rounded-md'>
              <h3 className='text-xl font-semibold mb-2'>Question no 2:How does Context API works?</h3>
                <p>Answer:The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.thatmeans Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
              </div>


               <div className='bg-rose-200 mb-5 p-4 rounded-md'>
               <h3 className='text-xl font-semibold mb-2'>Question no 3: What do you mean by useRef hook in React?</h3>
                <p>Answer:The useRef Hook allows you to persist values between renders.
                It can be used to store a mutable value that does not cause a re-render when updated.
                It can be used to access a DOM element directly.
                useRef() only returns one item. It returns an Object called current.
                When we initialize useRef we set the initial value: useRef(0).</p>
               </div>
            
        </div>
    );
};

export default Blog;