import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MainLayout from '../Layout/MainLayout'
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";
import PetListing from "../Pages/PetListing/PetListing";
import Details from "../Pages/Details/Details";
import Cat from "../Pages/Cat/Cat";
import Dog from "../Pages/Dog/Dog";
import Fish from "../Pages/Home/Fish/Fish";
import Goat from "../Pages/Goat/Goat";
import Rabbit from "../Pages/Rabbit/Rabbit";
import Cow from "../Pages/Cow/Cow";
import Dashboard from "../Layout/Dashboard";
import PetCart from "../Pages/Home/PetCart/PetCart";
import Donations from "../Pages/Donations/Donations";
import DonationDetails from "../Pages/Home/DonationDetails/DonationDetails";
import AddPets from "../Pages/AddPets/AddPets";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/petListing',
                element: <PetListing />
            },
            {
                path: '/details/:id',
                element: <Details />
            },
            {
                path: '/cats',
                element: <Cat />
            },
            {
                path: '/dogs',
                element: <Dog />
            },
            {
                path: '/fish',
                element: <Fish />
            },
            {
                path: '/goats',
                element: <Goat />
            },
            {
                path: '/rabbits',
                element: <Rabbit />
            },
            {
                path: '/cows',
                element: <Cow />
            },
            {
                path: '/donations',
                element: <Donations />
            },
            {
                path: '/donationDetails/:id',
                element: <DonationDetails />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <div className="bg-[#F6F6F6] min-h-screen"><Dashboard /></div>,
        children: [
            {
                path: 'petCart',
                element: <PetCart />
            },
            {
                path: 'addPets',
                element: <AddPets />
            }
        ]
    }
]);
export default router;