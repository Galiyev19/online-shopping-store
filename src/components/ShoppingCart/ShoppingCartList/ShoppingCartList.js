import React, {useState} from 'react'
import { useDispatch} from "react-redux"
import { FaDollarSign } from "react-icons/fa"
import {BsTrash} from 'react-icons/bs'
import { increaseCount, decreaseCount, deleteItem } from '../../../Features/shoppingCartSlice'
import "./ShoppingCartList.css"

const ShoppingCartList = ({ shoppingCart }) => {

    // console.log(shoppingCart)
    const dispatch = useDispatch()

    const increase = (id) => {
        dispatch(increaseCount(id))
    }


    const deacrease = (id) => {
        dispatch(decreaseCount(id))
    }


    const deleteCart = (id) => {
        dispatch(deleteItem(id))
    }


    return (
        <div className="shopping_cart_block_product_item">
            {
                shoppingCart.map(item =>
                    <div className="shopping_cart_block_product_item_info" key={item.id}>
                        <img alt="product image" className='img_shoppingCart' src={item.product.image} />
                        <div className="shopping_cart_block_product_item_info__item">
                            <div className="d-flex flex-column m-3 w-50">
                                <span className="title">{item.product.title}</span>
                                <span className="title">{item.product.price} <FaDollarSign /> <span className="price_des">за шт.</span></span>
                            </div>
                            <div className="d-flex flex-row align-items-center m-3 w-25">
                                <button className="btn btn-danger"  onClick={() =>  { deacrease(item.id)}}>-</button>
                                <span className="count">{item.count}</span>
                                <button className="btn btn-success" onClick={() =>  { increase(item.id) }}>+</button>
                            </div>
                            <div className="d-flex align-items-center">
                                <span  className="price">{item.total}</span> <FaDollarSign/>
                            </div>
                        <BsTrash className="trash" onClick={() => {deleteCart(item.id)}}/>
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default ShoppingCartList;