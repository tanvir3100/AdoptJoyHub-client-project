import usePet from "../../Hooks/usePet";
import { useForm } from 'react-hook-form';
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../Hooks/useAxios";
import Swal from 'sweetalert2'


const Details = () => {
    const { user } = useContext(AuthContext)
    const [pets] = usePet();
    const axiosSecure = useAxios();
    const { id } = useParams();
    const findItem = pets?.find(item => item._id === id);
    const { petImage, petName, petAge, petLocation } = findItem || {};

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const petItem = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            petImage,
            petName,
            petAge,
            petLocation
        }
        axiosSecure.post('/carts', petItem)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: 'Added to the cart',
                        showConfirmButton: false,
                        timer: 1700
                    });
                }
            })
            .then(() => {
                window.location.reload();
            })

    }




    return (
        <div className="card bg-base-100 shadow-xl rounded-none">
            <figure><img className="lg:w-[40%]" src={petImage} alt="pets" /></figure>
            <div className="card-body w-3/4">
                <div className="w-3/4">
                    <h2 className="card-title">Pet Name: {petName}</h2>
                    <p>Pet Age: {petAge}</p>
                    <p>Pet Location: {petLocation}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn bg-gradient-to-r from-lime-600 to-lime-300 text-black" onClick={() => document.getElementById('my_modal_5').showModal()}>Adopt</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="">
                                <form method="dialog">
                                    <div className="flex flex-col lg:flex-row gap-5">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="name" placeholder="name" defaultValue={user?.displayName} name="name" {...register("name", { required: true })} className="input input-bordered rounded-none" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" defaultValue={user?.email} {...register("email", { required: true })} name="email" className="input input-bordered rounded-none" required />
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row gap-5">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">phone</span>
                                            </label>
                                            <input type="phone" placeholder="phone" name="phone" className="input input-bordered rounded-none" {...register("phone", { required: true })} required />
                                            {errors.phone && <span className='text-red-700 mt-2'>This field is required</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">address</span>
                                            </label>
                                            <input type="address" placeholder="address" {...register("address", { required: true })} name="address" className="input input-bordered rounded-none" required />
                                            {errors.address && <span className='text-red-700 mt-2'>This field is required</span>}
                                        </div>
                                    </div>
                                    {/* if there is a button in form, it will close the modal */}
                                    <button onClick={handleSubmit(onSubmit)} className="btn mt-5">Submit</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Details;