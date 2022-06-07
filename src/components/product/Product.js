import React from 'react'
import { Link } from 'react-router-dom'
import './Product.scss'

function Product() {
    return (
        <div className='product product--new'>
            <Link to='/detail'>
                <div className="image">
                    <div className="label-new">New</div>
                    <img src="https://cookiesforlove.com/wp-content/uploads/2019/03/shutterstock_152661341.jpg" alt="" />
                </div>
            </Link>
            <p className="name">Black coffeeBlack</p>
            <div className="wrapper-slide">
                <div className="wrapper">
                    <span className="price">32.000 đ</span>
                    <div className="actions">
                        <button title='Buy now' className='buy'>
                            <span className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </span>
                        </button>
                        <button title='Add to cart' className='cart'>
                            <span className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product