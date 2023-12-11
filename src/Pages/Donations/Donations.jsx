import { useEffect, useState } from "react";
import TitleText from "../../Shared/TitleText/TitleText";
import { Link } from "react-router-dom";


const Donations = () => {
    const [petDonation, setPetDonation] = useState();

    useEffect(() => {
        fetch('https://adopt-joy-hub-server-site.vercel.app/donation')
            .then(res => res.json())
            .then(data => {
                setPetDonation(data)
            })
    })

    return (
        <div>
            <img src="https://i.ibb.co/y4ghqVh/yerlin-matu-Gtwi-Bmt-Jva-U-unsplash.jpg" alt="" />
            <div>
                <TitleText
                    header={'Donations Section'} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl px-10 lg:px-0 mx-auto mb-10">
                    {
                        petDonation?.map(donation => <div key={donation._id} className="card bg-base-100 shadow-xl rounded-none">
                            <figure className="p-2"><img className="h-64" src={donation.petImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Pet Name:{donation.petName}</h2>
                                <p>Donate Amount:{donation.donatedAmount}</p>
                                <p>max Donation Amount:{donation.maxDonationAmount}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/donationDetails/${donation._id}`}>
                                        <button className="btn bg-gradient-to-r from-orange-400 to-orange-700 rounded-none text-white font-bold border-none px-5 mt-5">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Donations;