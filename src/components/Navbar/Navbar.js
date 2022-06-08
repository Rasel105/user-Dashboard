import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div class="navbar bg-base-100 shadow-2xl px-8">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/" class="btn btn-ghost normal-case text-lg">Home</Link>
                        <Link to="/" class="btn btn-ghost normal-case text-lg">Dashboard</Link>
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case text-xl">SytiqHub</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <Link to="/" class="btn btn-ghost normal-case text-lg">Home</Link>
                    <Link to="/" class="btn btn-ghost normal-case text-lg">Dashboard</Link>
                </ul>
            </div>
            <div class="navbar-end">
                <Link to="/" class="btn mr-2 btn-primary text-white">Register</Link>
                <Link to="/" class="btn btn-primary text-white">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;