import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { VscDashboard, VscHome, VscSignOut } from "react-icons/vsc";
import { TbLogin } from "react-icons/tb";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    // loader 
    if (loading) {
        <Loader />
    }
    console.log(user);

    // signout 
    const handleSignOut = () => {
        signOut(auth);
        toast("Signout Successfully")
        navigate("/login")
    };

    return (
        <div class="navbar bg-base-100 shadow-lg px-8 absolute z-10">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/" class="btn btn-ghost normal-case text-lg mb-2"><VscHome size={35}></VscHome></Link>
                        <Link to="/dashboard" class="btn btn-ghost normal-case text-lg">Dashboard <VscDashboard size={35} /></Link>
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case text-xl">SytiqHub</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <Link to="/" class="btn btn-ghost normal-case text-lg"><VscHome size={35}></VscHome></Link>
                    {user && <Link to="/dashboard" class="btn btn-ghost normal-case text-lg">Dashboard <VscDashboard className='ml-2' size={35} /></Link>}
                </ul>
            </div>
            <div class="navbar-end">

                {
                    user ? <button onClick={handleSignOut} class="btn btn-primary text-white">Signout <TbLogin className='ml-1' size={25} /></button> : <Link to="/login" class="btn btn-primary text-white">Login <TbLogin className='ml-1' size={25} /></Link>
                }
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div >
    );
};

export default Navbar;