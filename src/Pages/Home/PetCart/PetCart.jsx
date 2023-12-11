import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { RiDeleteBinLine } from "react-icons/ri";
import useAxios from "../../../Hooks/useAxios";
import TitleText from "../../../Shared/TitleText/TitleText";

const PetCart = () => {
    const axiosSecure = useAxios();
    const [pets, setPets] = useState([])
    useEffect(() => {
        fetch('https://adopt-joy-hub-server-site.vercel.app/carts')
            .then(res => res.json())
            .then(data => {
                setPets(data)
            })
    })
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="bg-white mx-auto p-4">
            <TitleText
            header={'My cart section'}/>

            <div className="overflow-x-auto">
                <table className="table mt-5">
                    {/* head */}
                    <thead className="bg-[#D1A054] ">
                        <tr>
                            <th>
                                COUNT
                            </th>
                            <th>PET IMAGE</th>
                            <th>PET NAME</th>
                            <th>AGE</th>
                            <th>Email & phone</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pets.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-3w-20">
                                            <img src={item.petImage} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.petName}
                                </td>
                                <td>{item.petAge}</td>
                                <td>{item.email}
                                 <br />   <span>{item.phone}</span></td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn bg-[#B91C1C] w-10 h-10 flex items-center justify-center btn-xs"><RiDeleteBinLine className="text-2xl text-white" /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PetCart;