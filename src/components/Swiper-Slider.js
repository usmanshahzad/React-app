import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Pagination } from "swiper";

export default function Slider() {

    const [data, setData] = useState([]);

    const productAPI = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> {
        console.log(json);
        setData(json)
    });
    }

    useEffect(() => {
        productAPI();
    },[])


    return (
        <>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={16}
                grabCursor={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper">
                {data.slice(0,8).map(item =>
                    <SwiperSlide key={item.id}>
                        <div className="items-list">
                            <div className="sale">
                                <h4>SALE</h4>
                            </div>
                            <div className="items-list-img">
                                <img src={item.image} alt={item.title}/>
                            </div>
                            <div className="items-list-content">
                                <h4>{item.title.split(' ').slice(0,2).join(' ')}</h4>
                                <h5>{item.category}</h5>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )};
            </Swiper>
        </>
      );
    }