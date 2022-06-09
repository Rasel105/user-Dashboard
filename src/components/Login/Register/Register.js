import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword();

    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        await createUserWithEmailAndPassword();
        console.log(data);
    };

    return (
        <div className='flex h-screen justify-center items-center pt-10'>
            <div className="card w-96 bg-base-100 shadow-2xl mt-14">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs mb-3">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", { required: true })}
                            />
                        </div>
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
                        <div className="form-control w-full max-w-xs mb-3">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("confirmpass", { required: true })}
                            />
                        </div>
                        <input className="btn w-full btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary" type="submit" value="Register" />
                    </form>
                    <p className='text-center'><small>Already have SyntiqHub Portal? <Link to={"/login"} className="text-secondary">Login</Link></small></p>
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

export default Register;