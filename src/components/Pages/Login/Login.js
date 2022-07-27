import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from './../../../firebase.init';
import Loading from './../../Shared/Loading';
import useToken from './../../../hooks/useToken';
const Login = () => {
    const [globalUser] = useAuthState(auth);
    const [forgetPass, setForgetPass] = useState(false);
    const [forgetPassText, setForgetPassText] = useState("");
    const [passwordError, setPasswordError] = useState('');
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [currentUser, setCurrentUser] = useState({});
    // React hook forms element
    const { register, formState: { errors }, handleSubmit } = useForm();

    // Error State
    const navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    // globalUser is [user]= useAuthState(auth)
    const [showPassword, setShowPassword] = useState(false);
    const token = useToken(globalUser);
    const tokenInLStorage = localStorage.getItem('accessToken');
    useEffect(() => {
        if ((tokenInLStorage + "").length > 4) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from, tokenInLStorage])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
    };
    return (
        <div >
            <div className=" flex justify-center items-center pt-20">
                <div className=" md:w-1/4 flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body">
                                <h1 className='text-5xl font-bold text-center mb-10'>Login</h1>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-xl">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" name='email' className="input input-bordered text-xl" {...register("email",
                                        { required: true })} />
                                    <label className="label">
                                        {errors?.email?.type === 'required' && <span className="label-text-alt text-lg">{errors.email.message}</span>}
                                    </label>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Password</span>
                                    </label>

                                    <input type={showPassword ? "text" : "password"} placeholder="Password" name='password' className="input input-bordered text-xl" {...register("password",
                                        {
                                            required: true,
                                        })} />
                                    <div className='text-xl flex justify-end items-center'>
                                        <label className="label cursor-pointer">
                                            <span className="label-text text-lg">&nbsp; Show Password &nbsp;</span>
                                            <input onChange={() => setShowPassword(!showPassword)} type="checkbox" checked={showPassword} className="checkbox" />
                                        </label>
                                    </div>


                                    {/* Forget password area  */}
                                    <div className=''>

                                        {
                                            forgetPass && <input onBlur={() => setForgetPass(false)} value={forgetPassText} onChange={(e) => setForgetPassText(e.target.value)} type="text" placeholder="Enter your Email" className="mt-5 input input-bordered text-xl w-full" />
                                        }
                                        <br />
                                        <div className='flex flex-col md:flex-row-reverse xs:gap-3 xs:my-0 justify-between'>
                                            <div >
                                                <label className="my-2">
                                                    <button onClick={() => setForgetPass(!forgetPass)} className=" hover:text-accent font-semibold text-lg"><span >Forgot password?</span></button>
                                                </label>
                                            </div>
                                            <div>
                                                <label className="">
                                                    <Link to="/register" className=" pointer hover:text-accent font-semibold  text-lg">New here? Sign Up
                                                    </Link>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Error Shows here */}
                                <div>
                                    {
                                        passwordError && <p className='text-red-500'>{passwordError}</p>
                                    }
                                    {
                                        gError && <p value={gError} className='text-red-500 font-bold'>{gError.message.slice(9)}</p>

                                    }
                                    {
                                        error && <p className='text-red-500 font-bold'>{error.message.slice(9)}</p>
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    {
                                        loading
                                            ?
                                            <button type="submit" className="btn btn-primary font-bold text-lg loading text-white">Login</button>
                                            :
                                            <button type="submit" className="btn btn-primary font-bold text-lg text-white">Login</button>
                                    }
                                </div>

                                <div className="flex flex-col w-full border-opacity-50">
                                    <div className="divider">OR</div>
                                </div>
                                <div className="form-control ">
                                    <button onClick={() => signInWithGoogle()} className="btn   hover:text-white  font-bold text-lg bg-zinc-600 text-white">Continue With Google</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

        </div >
    )

};

export default Login;