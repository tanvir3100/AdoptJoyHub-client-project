import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
// import { LuShoppingCart } from 'react-icons/lu';
// import useCart from '../../../Hooks/useCart';



const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    // const [cart] = useCart();
    const { logOut, user } = useContext(AuthContext)

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        }
        else {
            setTheme('light')
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const themeLocal = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', themeLocal)
    }, [theme])
    const handleLogOut = () => {
        logOut()
            .then()
            .then()
    }
    const navOption = <>
        <li><Link to='/' className="font-bold text-black lg:border-r-2 lg:border-slate-900">HOME</Link></li>
        <li><Link to='/petListing' className="font-bold text-black lg:border-r-2 lg:border-slate-900">PET LISTING</Link></li>
        <li><Link to='/donations' className="font-bold text-black lg:border-r-2 lg:border-slate-900">DONATION CAMPINGS</Link></li>
        {
            user ? <li><a onClick={handleLogOut} className="font-bold text-black lg:border-r-2 lg:border-slate-900">LOGOUT</a></li> :
                <li><Link to='/login' className="font-bold text-black lg:border-r-2 lg:border-slate-900">LOGIN</Link></li>

        }
    </>

    return (
        <div className="navbar z-10 bg-opacity-60 bg-white dark:bg-black fixed flex items-center justify-between">
            <div className="w-[30%]">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 text-black w-52 bg-opacity-60">
                        {navOption}
                    </ul>
                </div>
                <img className='w-[80%] md:w-[40%] lg:w-[70%]' src="https://i.ibb.co/bLrsk89/replicate-prediction-2sfadgbbmpton3mpzis6fethua.png" alt="" />
            </div>
            <label className="swap swap-rotate text-black">
                <input type="checkbox" onChange={handleToggle} />
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
            </label>
            <div className="navbar-end w-full hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1 gap-2 flex justify-center items-center">
                    {navOption}
                </ul>
            </div>
            <div className="dropdown dropdown-end border-l-2 lg:border-[#FF7D05] ml-5">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-5">
                    <div className="w-10 rounded-full">
                        {
                            user?.photoURL ? < img src={user.photoURL} /> : <img src="https://i.ibb.co/BqwpN6t/profile.png" />
                        }
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 w-52 bg-opacity-60">
                    <li>
                        <a className="justify-between text-black">
                            Profile
                            <span className="badge text-black">New</span>
                        </a>
                    </li>
                    <li><Link to='dashboard'><a className="text-black">DashBoard</a></Link></li>
                    <li><Link to='/register' className="text-black">Sign Up</Link></li>
                    <li><a onClick={handleLogOut} className="text-black">Logout</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;