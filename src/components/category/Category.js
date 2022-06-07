import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Category.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

function Category() {
    return (
        <div className='category'>
            <div className="container">
                <div className="category-container">
                    <div className="wrapper-title">
                        <h2 className="title">May be you like</h2>
                    </div>
                    <div className="wrapper-category-list">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <div className="category-list">
                                    <div className="category-item">
                                        <div className="image">
                                            <img src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/ca-phe.png" alt="" />
                                        </div>
                                        <span className="category-name">Coffee</span>
                                    </div>
                                    <div className="category-item">
                                        <div className="image">
                                            <img src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/tra-trai-cay-tra-sua.png" alt="" />
                                        </div>
                                        <span className="category-name">Fruit tea</span>
                                    </div>
                                    <div className="category-item">
                                        <div className="image">
                                            <img src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/hi-tea.png" alt="" />
                                        </div>
                                        <span className="category-name">Hi-Tea</span>
                                    </div>
                                    <div className="category-item">
                                        <div className="image">
                                            <img src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/da-xa.png" alt="" />
                                        </div>
                                        <span className="category-name">Choco-Matcha</span>
                                    </div>
                                    <div className="category-item">
                                        <div className="image">
                                            <img src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/banh-snack.png" alt="" />
                                        </div>
                                        <span className="category-name">Snack</span>
                                    </div>
                                    <div className="category-item">
                                        <div className="image">
                                            <img src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/tra-trai-cay-tra-sua.png" alt="" />
                                        </div>
                                        <span className="category-name">For you</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="category-list">
                                    <div className="category-item">
                                        <div className="image">
                                            <img src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/ca-phe.png" alt="" />
                                        </div>
                                        <span className="category-name">Coffee</span>
                                    </div>
                                    <div className="category-item">
                                        <div className="image">
                                            <img src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/tra-trai-cay-tra-sua.png" alt="" />
                                        </div>
                                        <span className="category-name">Fruit tea</span>
                                    </div>
                                    <div className="category-item">
                                        <div className="image">
                                            <img src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/hi-tea.png" alt="" />
                                        </div>
                                        <span className="category-name">Hi-Tea</span>
                                    </div>
                                    <div className="category-item">
                                        <div className="image">
                                            <img src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/da-xa.png" alt="" />
                                        </div>
                                        <span className="category-name">Choco-Matcha</span>
                                    </div>
                                    <div className="category-item">
                                        <div className="image">
                                            <img src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/banh-snack.png" alt="" />
                                        </div>
                                        <span className="category-name">Snack</span>
                                    </div>
                                    <div className="category-item">
                                        <div className="image">
                                            <img src="https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/tra-trai-cay-tra-sua.png" alt="" />
                                        </div>
                                        <span className="category-name">For you</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category