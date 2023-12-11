/* eslint-disable no-useless-escape */
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateUserProfile(data.name, data.photoURL)
                    .then()
                    .catch(error => {
                        console.log(error)
                    })
            })
            .then(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="card flex-col lg:flex-row-reverse gap-40">
                <div className="text-center lg:text-left flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold mb-10">Sing Up!</h1>
                    <img className="w-[50%]" src="https://i.ibb.co/NpHp59P/b9c4eda00b3145312be158823eb8f378.jpg" alt="" />
                </div>
                <div className="shrink-0 w-full p-5 max-w-sm shadow-2xl rounded-none">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" {...register("name", { required: true })} className="input input-bordered rounded-none" required />
                            {errors.name && <span className='text-red-700 mt-2'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="photoURL" placeholder="photoURL" {...register("photoURL", { required: true })} className="input input-bordered rounded-none" required />
                            {errors.photo && <span className='text-red-700 mt-2'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered rounded-none" required />
                            {errors.email && <span className='text-red-700 mt-2'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true, minLength: 6, maxLength: 20,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/
                            })} name='password' placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "minLength" && (
                                <p className='text-red-700'>Password must be in 8 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className='text-red-700'>Password must have one number, one capital letter and one special character</p>
                            )}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 space-y-5">
                            <button className="btn bg-gradient-to-r from-pink-500 to-yellow-500 rounded-none font-bold text-white">Register</button>
                            <p className='w-full text-center font-bold'>Already Register ? Please <Link to='/login'><span className='hover:underline text-green-700'>LogIN</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;