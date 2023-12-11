import { NavLink, Outlet } from "react-router-dom";
import { LuShoppingCart } from 'react-icons/lu';
import { FaHome, FaWallet } from 'react-icons/fa';
import { PiGitPullRequestBold } from "react-icons/pi";
import { GiHospitalCross } from "react-icons/gi";
import { TbBuildingHospital } from "react-icons/tb";
import TitleText from "../Shared/TitleText/TitleText";



const Dashboard = () => {
    return (

        <div className="flex max-w-7xl mx-auto min-h-screen">
            <div className="w-64 min-h-full bg-emerald-500">
                <ul className="menu p-4 gap-2">
                    <li>
                        <NavLink to='/dashboard/addPets'>
                            <LuShoppingCart className="text-2xl" />
                            Add a pet
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/petCart'>
                            <FaHome className="text-2xl" />
                            My added pets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment'>
                            <PiGitPullRequestBold className="text-2xl" />
                            Adoption Request
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment'>
                            <GiHospitalCross className="text-2xl" />
                            Create Donation Campaign
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment'>
                            <TbBuildingHospital className="text-2xl" />
                            My Donation Campaigns
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment'>
                            <FaWallet className="text-2xl" />
                            My Donations
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard contain */}
            <div className="flex-1">
                <div className="w-4/5 mx-auto mb-10">
                    <TitleText
                        header={'Welcome to Dashboard'} />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;