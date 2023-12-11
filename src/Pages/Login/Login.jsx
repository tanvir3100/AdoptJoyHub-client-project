import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'


const Login = () => {

    const { signInUser, googleUser, gitUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire("Login Successful");
            })
            .then(error => {
                console.error(error.message)
            })

    }

    const handleGoogle = () => {
        googleUser()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .then(error => {
                console.error(error)
            })
    }
    const handleGithub = () => {
        gitUser()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .then(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="card flex-col lg:flex-row-reverse gap-40">
                <div className="text-center lg:text-left flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold mb-10">Login now!</h1>
                    <img className="w-[50%]" src="https://i.ibb.co/NpHp59P/b9c4eda00b3145312be158823eb8f378.jpg" alt="" />
                </div>
                <div className="shrink-0 w-full p-5 max-w-sm shadow-2xl rounded-none">
                    <form className="" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered rounded-none" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 space-y-5">
                            <button className="btn bg-gradient-to-r from-pink-500 to-yellow-500 rounded-none font-bold text-white">Login</button>
                            <button className="btn btn-outline hover:bg-gradient-to-r from-green-100 to-green-500 font-bold hover:text-white hover:border-none rounded-none" onClick={handleGoogle}><FcGoogle className="text-3xl" />Login With Google</button>
                            <button className="btn btn-outline font-bold text-white bg-black hover:border-none rounded-none" onClick={handleGithub}><FaGithub className="text-3xl" />Login With GitHub</button>
                            <p className='w-full text-center font-bold'>Have No Account ? Please <Link to='/register'><span className='hover:underline text-green-700'>Register</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;