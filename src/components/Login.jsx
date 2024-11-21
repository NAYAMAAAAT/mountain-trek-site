import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Login = () => {
    const navigate = useNavigate();
    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/')
            })
            .catch(error => {
                console.log('ERROR', error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => console.log('ERROR', error.message))
    }
    const notify = () => {
      
        toast.warn("Wrong information!Sign up", {
          position: "top-center"
        });

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="{email}" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover"><Link to="/forgotten" className='text-blue-500'>Forgot password?</Link></a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={notify} className="btn btn-primary">Login</button>
                            <ToastContainer />
                        </div>
                    </form>
                    <p className='ml-4 mb-4'>
                        New to this website? please <Link to="/register" className='text-blue-500'>Register</Link>
                    </p>
                    <p>
                        <button onClick={handleGoogleSignIn} className='btn btn-ghost bg-blue-300 ml-16'>Log in with Google</button>
                      
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;