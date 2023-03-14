import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"

import {FaDollarSign} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai"


import './style.css'

const HomeProductList = ({products, add}) => {
   
    const product = useSelector(state => state.products.product)
    const dispatch  = useDispatch();
    const addProduct = (id) => {
        add(id)
    }

    
    return (
        <div className="list_grid">
            {
                products.map(item =>
                    <div className="mb-4" key={item.id} >
                    <Card  className="card" >
                        <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                            <Card.Img variant="top" src={item.image} />
                        </div>
                        <Card.Body as={Link}  to={`catalog/${item.category}/${item.title}`}>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                <span className='fw-bold fs-2'>
                                    {item.price} <FaDollarSign/>
                                </span>
                            </Card.Text>
                        </Card.Body>
                        <Button className="btn btn-success" onClick={() => {addProduct(item.id)}}>В корзину</Button>
                        <Card.Footer>
                            <small className="text-muted ">{item.rating.rate}<AiFillStar className="rating_text_color"/></small>
                            <small className="text-muted mx-3">Categories: {item.category}</small>
                        </Card.Footer>
                    </Card>
                    </div>
                )
            }
        </div>
    )

}


export default HomeProductList;