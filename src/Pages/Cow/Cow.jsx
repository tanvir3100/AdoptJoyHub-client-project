import usePet from "../../Hooks/usePet";
import TitleText from "../../Shared/TitleText/TitleText";
import { Link } from 'react-router-dom'


const Cow = () => {
    const [pets] = usePet();
    const cows = pets.filter(pet => pet.petType === 'cow');
    return (
        <div>
            <div className="max-w-6xl px-10 lg:px-0 mx-auto mb-10">
                <div className="p-20">
                    <TitleText
                        header={'Cow Section'} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        cows.map(petItem => <div key={petItem._id}>
                            <div className="card bg-base-100 shadow-xl rounded-none">
                                <figure className="p-2"><img className="h-64" src={petItem.petImage} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Pet Name:{petItem.petName}</h2>
                                    <p>Pet Age:{petItem.petAge}</p>
                                    <p>Pet Location:{petItem.petLocation}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/details/${petItem._id}`}>
                                            <button className="btn bg-gradient-to-r from-orange-400 to-orange-700 rounded-none text-white font-bold border-none px-5 mt-5">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cow; 