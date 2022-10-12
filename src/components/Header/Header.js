import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       
<div className="navbar bg-rose-400">
  <div className=" navbar-center md:navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-rose-300 rounded-box w-52 font-bold">
        <li><Link to ='/' className='active:bg-rose-500'>Home</Link></li>
        <li tabIndex={0}>
          <Link to='/' className="justify-between active:bg-rose-500" >
            Topics
          </Link>
         </li>
        <li><Link to='/statistics' className='active:bg-rose-500'>Statistics</Link></li>
        <li><Link to='/blog' className='active:bg-rose-500'>Blog</Link></li>
      </ul>
    </div>
    
   <img className='w-7 rounded-3xl mx-3' src=" https://c8.alamy.com/comp/2BKGC4H/bright-education-logo-2BKGC4H.jpg" alt="" />


    <Link to='/' className="btn btn-ghost normal-case text-xl font-bold">EduSystem</Link>
    
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0 font-bold">
    <li> <Link  to ='/' className='active:bg-rose-500'>Home</Link></li>
      <li tabIndex={0}>
        <Link to='/' className='active:bg-rose-500'>
          Topics
        </Link>
        

      </li>
      <li><Link to='/statistics' className='active:bg-rose-500'>Statistics</Link>
      </li>
     
      <li><Link to='/blog' className='active:bg-rose-500'>Blog</Link>
      </li>
    </ul>
  </div>
  
</div>
    );
};

export default Header;