import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader';


const Dashboard = () => {
    const { pathname } = useLocation();
    const [user, loading] = useAuthState(auth);
    console.log(user);
    if (loading) {
        <Loader />
    }
    return (
        <div className='px-4 mb-[-20px]'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col px-4">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                    {pathname === '/dashboard' &&
                        <div className='border rounded-lg h-full flex justify-center items-center'>
                            <div className='text-center'>
                                <h1 className='-mt-40 text-secondary font-semibold text-4xl'>Welcome To Dashboard {user?.displayName}</h1>
                                <p className='mt-1 text-gl font-semibold'>Here is your email: {user?.email}</p>
                            </div>
                        </div>
                    }
                </div>
                <div className="drawer-side border border-gray-200 rounded-lg shadow-lg pt-20">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <>
                            <li className='mb-3 text-lg shadow-md rounded-md'><Link to='/dashboard/add-product'>Add IOT Item</Link></li>
                            <li className='mb-3 text-lg shadow-md rounded-md'><Link to='/dashboard/manage-product'>Manage IOT Items</Link></li>
                        </>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;