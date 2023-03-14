import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { FaDollarSign } from "react-icons/fa"

const Order = () => {

    const orders = useSelector(state => state.order.orders)

    console.log(orders)
    return (
        <div>
            <h1 className="text-white">Заказы</h1>
            {
                orders.length <= 0 ? <h2 className="text-white">Пусто</h2> :
                    <div className='d-flex flex-row flex-wrap'>
                        {
                            orders.map(item =>
                                <div key={item.id} className="d-flex flex-column mx-3 border rounded p-3">
                                    <h2 className="text-white">Номер заказа: {item.id}</h2>
                                    <h3 className="text-white">Дата заказа: {item.dateOrder}</h3>
                                    <h3 className="text-white">Сумма заказа: {item.totalOrdersPrice} <FaDollarSign/> </h3>
                                </div>
                            )
                        }
                    </div>
            }

            <div>
            </div>
        </div>
    )

}


export default Order;