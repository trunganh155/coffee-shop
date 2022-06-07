import React from 'react'
import Product from './Product'
import './ProductList.scss'

function ProductList() {
    return (
        <div className='product-list'>
            <div className="container">
                <div className="wrapper-produc-list">
                    {
                        new Array(8).fill(0).map(item => (
                            <div className="product-item">
                                <Product />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList