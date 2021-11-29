import React, { useEffect} from "react"
import { Link } from "react-router-dom"
import { Row, Col, ListGroup, Image, Card, Button, Form} from "react-bootstrap";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import {useDispatch} from "react-redux";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({match, location, history}) => {
    const dispatch = useDispatch()
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    },[productId, qty])

    return(
        <div>
            CartScreen
        </div>
    )
}

export  default CartScreen;