import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import {getSingleCategory} from '../../Features/categoriesSlice'
import {useNavigate} from "react-router";
import {Link}  from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import "./Categories.css"

const Catalog = () => {

    const categories = useSelector(state => state.categories.categories)
    const category = useSelector(state => state.categories.category)


    const dispatch  = useDispatch();
  
    const onClick = (name) => {
        dispatch(getSingleCategory(name))
    }

    


    return (
        <div className="d-flex flex-column justify-content-center text-center">
            <h1 className="m-3 fw-bold text-white">Выберите категорию</h1>
            <div className="menu_block">
                {
                    categories.map(item => {
                        return (
                            <Link to={`/catalog/${item.categories}`}  key={Math.random()} className="menu_block_item" style={{backgroundImage: `url(${item.img})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
                                <span  className="name_categories">{item.categories}</span>
                            </Link>
                        )
                })
                }
            </div>

        </div>
    )

}

export default Catalog;