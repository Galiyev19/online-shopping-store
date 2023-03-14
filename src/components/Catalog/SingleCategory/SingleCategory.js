import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button"
import { FaDollarSign } from "react-icons/fa"
import { AiFillStar } from "react-icons/ai"
import {  useDispatch,useSelector } from "react-redux"
import { addShoppingCart } from '../../../Features/shoppingCartSlice';

const SingleCategory = () => {
    const { category } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    const add = (id) => {
        const idx = products.findIndex(item => item.id === id)
        dispatch(addShoppingCart(products[idx]))
        console.log(idx)
    }

    return (
        <div className="d-flex flex-wrap m-3">
            <h1 className="text-white text-uppercase">{category}</h1>
            <Row xs={3} md={4} className="g-4">
                {
                    data.map(item =>
                        <Col key={item.id} >
                            <Card className="card">
                                <Card.Img variant="top" src={item.image} className='image' />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        <span className='fw-bold fs-2'>
                                            {item.price} <FaDollarSign />
                                        </span>
                                    </Card.Text>
                                </Card.Body>
                                <Button className="btn btn-success" onClick={() => {add(item.id)}}>В корзину</Button>
                                <Card.Footer>
                                    <small className="text-muted ">{item.rating.rate}<AiFillStar className="rating_text_color" /></small>
                                    <small className="text-muted mx-3">Categories: {item.category}</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </div>

    )
}


export default SingleCategory;