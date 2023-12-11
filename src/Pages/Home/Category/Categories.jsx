import { useEffect, useState } from "react";
import TitleText from "../../../Shared/TitleText/TitleText";
import { Link } from 'react-router-dom'

const Categories = () => {
    const [categories, setCategories] = useState([])
    console.log(categories)

    useEffect(() => {
        fetch('https://adopt-joy-hub-server-site.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <TitleText
                header={'categories'} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl px-10 lg:px-0 mx-auto">
                {
                    categories?.map(category => <div key={category.id} className="card bg-base-100 shadow-xl">
                        <figure><img className="h-64" src={category.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{category.category}</h2>
                            <div className="card-actions justify-end">
                                <Link to={`/${category.category}`}>
                                <button className="btn bg-gradient-to-r from-orange-400 to-orange-700 text-white rounded-full font-bold border-none px-5 mt-5">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;