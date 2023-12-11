import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import TitleText from "../../../Shared/TitleText/TitleText";



import 'swiper/css';
import 'swiper/css/navigation';


const Testimonial = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('https://adopt-joy-hub-server-site.vercel.app/customer')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className=" w-4/5 mx-auto p-0 lg:p-10">
            <TitleText
                header={'Customer review'} />
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={true}
                history={{
                    key: 'slide',
                }}
                modules={[Navigation]}
                className="mySwiper mb-10"
            >
                <div>
                    {
                        reviews?.map(review => <SwiperSlide key={review._id}>
                            <div className="hero min-h-min">
                                <div className="hero-content flex-row lg:flex-row-reverse w-full p-0 lg:w-3/4">
                                    <img src={review.reviewImage} className="max-w-sm h-44 lg:h-96 rounded-lg shadow-2xl" />
                                    <div>
                                        <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">{review.name}</h1>
                                        <p className="py-6">{review.review}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper >
        </div >
    );
};

export default Testimonial;