import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';



const DonationDetails = () => {

    const [petDonation, setPetDonation] = useState();

    useEffect(() => {
        fetch('https://adopt-joy-hub-server-site.vercel.app/donation')
            .then(res => res.json())
            .then(data => {
                setPetDonation(data)
            })
    })



    const { id } = useParams();
    const findItem = petDonation?.find(item => item._id === id);
    const { petImage, petName, donatedAmount, maxDonationAmount } = findItem || {};





    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={petImage} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl mb-5 font-bold">Pet Name: {petName}</h1>
                        <button className='bnt btn-outline rounded-full bg-green-500 p-2'>
                            Max Donation Amount :{maxDonationAmount}
                        </button>
                        <button className='bnt btn-outline rounded-full bg-green-500 p-2'>
                            Donated Amount : {donatedAmount}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;