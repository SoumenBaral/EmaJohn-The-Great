import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        const email = event.target.email.value;
        const password = event.target.password.value
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container  flex justify-center border-slate-400  mx-auto'>
            <div className='w-[600px] rounded-sm border  m-10'>
                <h2 className='form-title mt-3 text-2xl text-center font-semibold'>Login</h2>
                <form onSubmit={handleUserSignIn} className='text-lg m-10' >
                    <div className="mb-5">
                        <label className='block' htmlFor="email">Email</label>
                        <input className='w-[500px] border  h-[55px]' type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label className='block' htmlFor="password">Password</label>
                        <input className='w-[500px] border  h-[55px]' type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit w-[500px] h-[55px] bg-orange-400 mt-10 rounded-md hover:bg-orange-500 cursor-pointer text-white font-semibold' type="submit" value="Login" />
                </form>
                <p className='m-10'>
                    New to Ema-John? <Link className='form-link text-orange-600' to="/signup">Create an account</Link>
                </p>
                <div className='flex justify-center items-center'>
                    <div className=' w-[200px] h-[2px]  bg-slate-400 m-3'></div>
                    <div>
                        or
                    </div>
                    <div className=' m-3 w-[200px] h-[2px]  bg-slate-400 ' ></div>
                </div>
                <button className='w-[500px] h-[55px] border  font-semibold text-center m-10'><i className="fa-brands fa-google text-blue-700"></i> Continue with Google</button>
            </div>
        </div>




    );
};

export default Login;