import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       
<div className="navbar bg-rose-400">
  <div className=" navbar-center md:navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
        <li><Link to ='/'>Home</Link></li>
        <li tabIndex={0}>
          <Link to='/' className="justify-between">
            Topics
          </Link>
         </li>
        <li><Link to='/statistics'>Statistics</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </ul>
    </div>
    
    <Link to='/' className="btn btn-ghost normal-case text-xl font-bold">EduSystem</Link>
    
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0 font-bold">
      <li><Link to ='/'>Home</Link></li>
      <li tabIndex={0}>
        <Link to='/'>
          Topics
          {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg> */}
        </Link>
        

      </li>
      <li><Link to='/statistics'>Statistics</Link>
      </li>
     
      <li><Link to='/blog'>Blog</Link>
      </li>
    </ul>
  </div>
  
</div>
    );
};

export default Header;