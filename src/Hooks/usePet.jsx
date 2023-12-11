import { useEffect, useState } from "react";


const usePet = () => {
    const [pets, setPets] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://adopt-joy-hub-server-site.vercel.app/pets')
            .then(res => res.json())
            .then(data => {
                setPets(data)
                setLoading(false)
            })
    }, [])
    return [pets, loading]
};

export default usePet;