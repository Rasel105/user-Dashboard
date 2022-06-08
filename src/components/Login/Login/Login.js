import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl mt-10">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form >
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>

                        <div className="form-control w-full max-w-xs mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                            />
                            {/* <Link to="/forgetpass" className='mt-1 text-secondary text-center hover:underline text-xl mb-3'><small className='cursor-pointer'>Forget Passoword?</small></Link> */}
                        </div>
                        <input className="btn w-full btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary" type="submit" value="Login" />
                    </form>
                    <p className='text-center'><small>New to SyntiqHub Portal? <Link to={"/register"} className="text-secondary">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        // onClick={() => signInWithGoogle()}
                        className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;