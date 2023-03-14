import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useParams, Link} from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"
import {FaDollarSign} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai"


import {addShoppingCart} from '../../../Features/shoppingCartSlice';

import "./SingleCategory.css"


const SingleCategory = () => {
    const {category} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    console.log(data)

    const add = (id) => {
        const idx = products.findIndex(item => item.id === id)
        dispatch(addShoppingCart(products[idx]))
    }

    return (
        <div className="d-flex flex-column p-2">
            <h1 className="text-white text-uppercase">{category}</h1>
            <div className="single_category">
                {
                    data.map(item =>
                        <div className="mb-4" key={item.id} >
                        <Card className="card" >
                            <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                            <Card.Img variant="top" src={item.image} />
                            </div>
                            <Card.Body as={Link}  to={`/catalog/${item.category}/${item.title}`}>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                        <span className='fw-bold fs-2'>
                                            {item.price} <FaDollarSign/>
                                        </span>
                                </Card.Text>
                            </Card.Body>
                            <Button className="btn btn-success" onClick={() => {
                                add(item.id)
                            }}>В корзину</Button>
                            <Card.Footer>
                                <small className="text-muted ">{item.rating.rate}<AiFillStar
                                    className="rating_text_color"/></small>
                                <small className="text-muted mx-3">Categories: {item.category}</small>
                            </Card.Footer>
                        </Card>
                        </div>
                    )
                }
            </div>
        </div>
    )
}


export default SingleCategory;