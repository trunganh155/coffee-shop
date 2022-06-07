import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './Slider.scss'
import SlideItem from './SlideItem'
import { Pagination } from 'swiper'

function Slider() {
    return (
        <div className="slider">
            <div className="container">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <SlideItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    )
}

export default Slider