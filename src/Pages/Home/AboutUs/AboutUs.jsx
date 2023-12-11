import TitleText from "../../../Shared/TitleText/TitleText";
import { PiBirdDuotone } from "react-icons/pi";
import { MdOutlinePets } from "react-icons/md";
import { FaDog, FaCommentMedical } from "react-icons/fa6";




const AboutUs = () => {
    return (
        <div className="max-w-6xl px-10 lg:px-0 mx-auto relative">
            <TitleText
                header={'About us'} />
            <div className="hero h-full lg:min-h-[70vh] bg-[#96AEFF]">
                <div className="hero-content text-center text-neutral-content">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="w-44 h-44 bg-white flex justify-center items-center">
                            <div className="text-center w-full">
                                <PiBirdDuotone className="text-black text-5xl text-center w-full" />
                                <h3 className="text-xl text-black">Rescue pets</h3>
                            </div>
                        </div>
                        <div className="w-44 h-44 bg-white flex justify-center items-center">
                            <div className="text-center w-full">
                                <MdOutlinePets className="text-black text-5xl text-center w-full" />
                                <h3 className="text-xl text-black">Caring for Every Creature</h3>
                            </div>
                        </div>
                        <div className="w-44 h-44 bg-white flex justify-center items-center">
                            <div className="text-center w-full">
                                <FaDog className="text-black text-5xl text-center w-full" />
                                <h3 className="text-xl text-black">Responsible Adoption</h3>
                            </div>
                        </div>
                        <div className="w-44 h-44 bg-white flex justify-center items-center">
                            <div className="text-center w-full">
                                <FaCommentMedical className="text-black text-5xl text-center w-full" />
                                <h3 className="text-xl text-black">Community-Centric Approach</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;