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
        <div className="card bg-base-100 shadow-xl rounded-none">
            <figure><img className="w-[50%]" src={petImage} alt="pets" /></figure>
            <div className="card-body">
                <h2 className="card-title">Pet Name: {petName}</h2>
                <div className="flex justify-end items-center">
                    <div className="flex justify-center items-center gap-3">
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