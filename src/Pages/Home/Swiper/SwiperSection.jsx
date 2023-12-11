import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const SwiperSection = () => {
    return (
        <div className='z-[-30]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div><img src='https://i.ibb.co/0h5MgNm/vino-li-P1-Ox3-ZHLa-D8-unsplash.jpg' alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src='https://i.ibb.co/Bs6w1VS/yerlin-matu-Gtwi-Bmt-Jva-U-unsplash.jpg' alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src='https://i.ibb.co/WHzSzvj/patrick-hendry-jd0h-S7-Vhn-A-unsplash.jpg' alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src='https://i.ibb.co/93pz8w9/patrick-hendry-e-Dg-Uy-Gu93-Yw-unsplash.jpg' alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src='https://i.ibb.co/SKpDHP7/mitchell-orr-PUY5x-Uszd3-Y-unsplash.jpg' alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src='https://i.ibb.co/Jx4bwZX/mike-burke-gxyf-JQg7-Lno-unsplash.jpg' alt="" /></div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperSection;


