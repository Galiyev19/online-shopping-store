import React, { useEffect } from "react"
import { useSelector } from "react-redux"

import "./ItemsInCart.css"

const ItemsInCart = () => {
    const ShoppingCart = useSelector((state) => state.shoppingCart.shoppingCart)
    const quantity = ShoppingCart.length

    return quantity > 0 ? (

        <span className="items-in-cart">
            {quantity}
        </span>

    ) : null

}

export default ItemsInCart   