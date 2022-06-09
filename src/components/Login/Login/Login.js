import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    
    const onSubmit = async data => {
     
        toast("Wow so easy!");
        console.log(data)
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl mt-10">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form >
                        <div className="form-control w-full max-w-xs mb-3">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", { required: true })}
                            />
                        </div>

                        <div className="form-control w-full max-w-xs mb-3">
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", { required: true })}
                            />
                        </div>

                        <input className="btn w-full btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary" type="submit" value="Login" />
                    </form>
                    <Link to="/forgetpass" className='text-secondary text-center hover:underline text-xl'><small className='cursor-pointer'>Forget Passoword?</small></Link>
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