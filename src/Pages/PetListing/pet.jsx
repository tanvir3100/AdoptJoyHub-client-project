/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import Details from '../Details/Details';

const pet = ({ petOb }) => {
    const { petImage, petName, petAge, petLocation, _id } = petOb;
    return (
        <div className="card bg-base-100 shadow-xl rounded-none">
            <figure className="p-2"><img className="h-64" src={petImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Pet Name:{petName}</h2>
                <p>Pet Age:{petAge}</p>
                <p>Pet Location:{petLocation}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                        <button className="btn bg-gradient-to-r from-orange-400 to-orange-700 rounded-none text-white font-bold border-none px-5 mt-5">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default pet;