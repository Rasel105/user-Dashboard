import React from 'react';
import { Link } from 'react-router-dom';
import { VscDashboard, VscHome, VscSignOut } from "react-icons/vsc";
import { TbLogin } from "react-icons/tb";
import { GiArchiveRegister } from "react-icons/gi";

const Navbar = () => {
    return (
        <div class="navbar bg-base-100 shadow-lg px-8 absolute z-10">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/" class="btn btn-ghost normal-case text-lg"><VscHome></VscHome></Link>
                        <Link to="/" class="btn btn-ghost normal-case text-lg">Dashboard <VscDashboard size={50} /></Link>
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case text-xl">SytiqHub</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <Link to="/" class="btn btn-ghost normal-case text-lg"><VscHome size={35}></VscHome></Link>
                    <Link to="/" class="btn btn-ghost normal-case text-lg">Dashboard <VscDashboard className='ml-2' size={35} /></Link>
                </ul>
            </div>
            <div class="navbar-end">
                <Link to="/register" class="btn mr-2 btn-primary text-white">Register <GiArchiveRegister className='ml-1' size={25} /></Link>
                <Link to="/login" class="btn btn-primary text-white">Login <TbLogin className='ml-1' size={25} /></Link>
            </div>
        </div>
    );
};

export default Navbar;