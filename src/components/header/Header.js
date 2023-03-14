import React from 'react'
import {Link} from 'react-router-dom'
import auth from "../../FireBase/FIreBase"
import {useAuthState} from "react-firebase-hooks/auth"
import {signInWithRedirect, GoogleAuthProvider} from "firebase/auth"
import GoogleButton from 'react-google-button'
import {signOut} from "firebase/auth"


import {AiFillCodeSandboxCircle} from "react-icons/ai"
import {FaShoppingCart} from "react-icons/fa"

import Dropdown from 'react-bootstrap/Dropdown';
import {Navbar, NavLink, Nav, Container} from "react-bootstrap"

import ItemsInCart from './ItemsInCart/ItemsInCart'

import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const Header = () => {

    const [user] = useAuthState(auth)

    console.log(user)

    const login = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }


    const logOut = () => {
        signOut(auth)
    }

    return (
        <>
            <Navbar bg='light' expand="lg" className="px-2">
                <Container>
                    <div className='d-flex'>
                        <NavLink as={Link} to="/" className="fw-bold mx-3 fs-4">Store</NavLink>
                        <NavLink as={Link} to="/catalog" className="fw-bold fs-4">Каталог</NavLink>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="mx-5 d-flex justify-content-between w-100">
                            <input className="form-control w-50" placeholder="Введите имя товара"/>
                            <div className="d-flex flex-row align-items-center mx-2">
                                <NavLink as={Link} to="/shopping-cart"
                                         className="fw-bold d-flex flex-column align-items-center">
                                    <div className="d-flex flex-row align-items-center">
                                        <FaShoppingCart className="fs-4"/>
                                        <ItemsInCart/>
                                    </div>
                                    Корзина
                                </NavLink>
                                {
                                    user !== null ?
                                        <div className="d-flex flex-row">
                                            <NavLink as={Link} to="/order"
                                                     className="fw-bold mx-2 d-flex flex-column text-center align-items-center"><AiFillCodeSandboxCircle
                                                className="fs-4"/> Заказы </NavLink>
                                            <div className="user_img_block">
                                                <img alt="user img" src={user.photoURL} className="img_user"/>
                                            </div>
                                            <div className="d-flex align-items-center m-2">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        {user.displayName}
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item as={Link} to="/profile">Личный
                                                            кабинет </Dropdown.Item>
                                                        <Dropdown.Item onClick={logOut}>Выйти</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        :
                                        <GoogleButton onClick={login}/>
                                }
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;