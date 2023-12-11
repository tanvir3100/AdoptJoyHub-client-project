import { useEffect, useState } from "react";
import usePet from "../../Hooks/usePet";
import TitleText from "../../Shared/TitleText/TitleText";
import Pet from '../PetListing/pet'
import { CiSearch } from "react-icons/ci";


const PetListing = () => {
    const [pets] = usePet();
    const [section, setSection] = useState([]);

    const handlePet = pet => {
        if (pet === '') {
            return setSection(pets)
        }
        if (pet === 'all') {
            return setSection(pets)
        } else {
            const findItem = pets?.filter(item => item.petType === pet);
            setSection(findItem)
        }
    }

    let handleSearch = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        if (lowerCase === '') {
            return setSection(pets)
        }
        if (lowerCase === 'all') {
            return setSection(pets)
        } else {
            const findItem = pets?.filter(item => item.petType === lowerCase);
            setSection(findItem)
        }
    };
    useEffect(() => {
        setSection(pets);
    }, [pets]);

    return (
        <div>
            <img className="bg-cover" src="https://i.ibb.co/3ymW0Mx/adam-griffith-s-Wkk-Ii-TJMYc-unsplash.jpg" alt="" />
            <div>
                <TitleText
                    header={'All available pets'} />
                <p className="text-red-600 underline text-center mb-5">Select any option to view pets</p>
                <div className="pb-5 flex-col lg:flex lg:gap-5 justify-between items-center px-10 lg:px-20 mx-auto">
                    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 text-center">
                        <li><a onClick={() => handlePet('all')}>All</a></li>
                        <li><a onClick={() => handlePet('dog')}>Dog</a></li>
                        <li><a onClick={() => handlePet('cat')}>Cat</a></li>
                        <li><a onClick={() => handlePet('cow')}>Cow</a></li>
                        <li><a onClick={() => handlePet('fish')}>Fish</a></li>
                        <li><a onClick={() => handlePet('goat')}>Goat</a></li>
                        <li><a onClick={() => handlePet('rabbit')}>Rabbit</a></li>
                    </ul>
                    <div className="flex justify-center items-center">
                        <input onChange={handleSearch} type="text" placeholder="Type here" className="input input-bordered relative w-full max-w-xs" />
                        <CiSearch className="text-3xl absolute ml-44" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                    {
                        section?.map(petOb => <Pet key={petOb._id} petOb={petOb}></Pet>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PetListing;