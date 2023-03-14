import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import HomeProductList from './HomeProdcustList';
import { addShoppingCart } from '../../Features/shoppingCartSlice';

const Home = () => {
    const products = useSelector(state => state.products.products)

    const dispatch  = useDispatch();
  

    const add = (id) => {
        const idx = products.findIndex(item => item.id === id)
        dispatch(addShoppingCart(products[idx]))
        // console.log(idx)
    }

    return(
        <div className="d-flex flex-column justify-content-center text-uppercase m-3">
            <h1 className="text_header">Добро пожаловать</h1>
            <div className="d-flex flex-wrap my-3">
                <HomeProductList products={products} add={add}  />
            </div>
        </div>
    )
}

export default Home;