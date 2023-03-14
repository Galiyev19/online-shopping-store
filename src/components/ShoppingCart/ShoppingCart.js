import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import ShoppingCartList from "./ShoppingCartList/ShoppingCartList"
import { FaDollarSign } from "react-icons/fa"
import { AddOrder } from "../../Features/orderSlice"
import { clearShoppingCart } from "../../Features/shoppingCartSlice"
import auth from "../../FireBase/FIreBase"
import { useAuthState } from "react-firebase-hooks/auth"
import { IoCheckmarkDoneSharp } from "react-icons/io5"

import "./ShoppingCart.css"

const ShoppingCart = () => {
    const shoppingCart = useSelector(state => state.shoppingCart.shoppingCart)
    const [total, setTotal] = useState(null)

    const dispatch = useDispatch()
    const [user] = useAuthState(auth)

    const add = () => {
        if (user !== null) {
            dispatch(AddOrder(shoppingCart))
            dispatch(clearShoppingCart())
            setShow(true)
        } else {
            alert("Для оформление заказа необходимо войти или зарегистроваться")
        }

    }

    useEffect(() => {
        const res = shoppingCart.reduce((acc, item) => acc + item.total, 0)
        setTotal(res)
    }, [shoppingCart])


    const [show, setShow] = useState(false)




    return (
        <div className="d-flex flex-column w-100 py-3">
            <h1 className="text-white">Корзина</h1>
            <div className="d-flex flex-row">
                <div className="d-flex w-50 m-2">
                    {shoppingCart.length !== 0 ? <ShoppingCartList shoppingCart={shoppingCart} /> : <h2 className="text-white">Пусто</h2>}
                </div>
                <div className="d-flex flex-column w-50 h-25 m-2 border border-light p-2 rounded">
                    <h2 className="text-white">Итого</h2>
                    <div className="d-flex justify-content-between mb-3">
                        <span className="text-white"><span className="fw-bold text-white">{shoppingCart.length}</span> товара на сумму</span>
                        <div className="d-flex align-items-center">
                            <span className="total_text text-white">{total}</span>
                            <FaDollarSign className="text-white" />
                        </div>
                    </div>
                    <div className="d-flex align-items-start">
                        <span className="fs-2 text-white">К оплате</span>
                        <div className="d-flex align-items-center">
                            <span className="fs-2  mx-3 text-white">{total}</span>
                            <FaDollarSign className="fs-3 text-white" />
                        </div>
                    </div>
                    <button className="btn btn-success mt-5 mb-2" disabled={shoppingCart.length === 0} onClick={add} >Оформить заказ</button>
                </div>
            </div>
            <div style={{display: show ? 'block' : "none"}}>
                <div className="d-flex flex-row align-items-center justify-content-center w-100 mt-5">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center">
                        <h2 className="text-white">Спасибо</h2>
                        <h3 className="text-white">Заказ сформирован</h3>
                        <h3 className="text-white">Для дополнительной информации зайдите личный кабинет или заказы</h3>
                        <IoCheckmarkDoneSharp className="icons" />
                    </div>
                </div>
            </div>
        </div>
    )

}


export default ShoppingCart;