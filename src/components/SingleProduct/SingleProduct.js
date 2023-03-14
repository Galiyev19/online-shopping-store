import React from 'react'
import {useParams} from 'react-router-dom'

import {useDispatch, useSelector} from "react-redux";
import {AiOutlineDollarCircle, AiFillStar} from 'react-icons/ai'


import {addShoppingCart} from "../../Features/shoppingCartSlice";


import "./SingleProduct.css"

const SingleProduct = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const products = useSelector(state => state.products.products)
    const product = products.find(item => item.title === id)

    const add = (id) => {
        const idx = products.findIndex(item => item.id === id)
        dispatch(addShoppingCart(products[idx]))
        // console.log(idx)
    }



    console.log(product)


    return (
        <div className="single_product_main_block">
            <div className="single_product_head">
                <div className="single_product_image">
                    <img src={product?.image} className="w-100 rounded"/>
                </div>
                <div className="single_product_head_desc">
                    <div className="d-flex w-100 justify-content-end mb-3">
                        <h2 className="text-white">{product?.price} <AiOutlineDollarCircle/></h2>
                    </div>
                    <button className="btn btn-success mt-2 mb-2" onClick={() => add(product.id)}>В КОРЗИНУ</button>
                    <div className="d-flex flex-column w-100 mt-2">
                        <div className="d-flex w-100 justify-content-between mt-3 mb-3 bg-secondary p-1 rounded">
                            <span className="text-white">Категория</span>
                            <span className="text-white">{product?.category}</span>
                        </div>
                        <div className="d-flex w-100 justify-content-between mt-3 mb-3 bg-secondary p-1 rounded">
                            <span className="text-white">Цена</span>
                            <span className="text-white">{product?.price}</span>
                        </div>
                        <div className="d-flex w-100 justify-content-between mt-3 mb-3 bg-secondary p-1 rounded">
                            <span className="text-white">Рейтинг</span>
                            <span className="text-white">{product?.rating?.rate} <AiFillStar /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column w-100">
                <h2 className="text-white">Описание</h2>
                <p className="text-white">{product?.description}</p>
            </div>
        </div>
    )
}

export default SingleProduct;