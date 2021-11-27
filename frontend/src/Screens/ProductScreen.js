import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card} from "react-bootstrap";
import products from "../products";
import Rating from "../Components/Rating";
import axios from "axios";

const ProductScreen = ({match}) => {

    const [product, setProduct] = useState({})
    console.log(match.params.id)

    useEffect(() =>{
        async  function fetchProduct(){
            const {data} = await axios.get(`/api/product/${match.params.id}`)
            setProduct(data)
            console.log(data)
        }
        fetchProduct()

    },[])


    return(
        <div>
            <Link to="/" className="btn btn-light my-3 rounded">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name}/>
                </Col>
                <Col md={3} >
                    <ListGroup variant="flush">

                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value = {product.rating} text= {`${product.numReviews} reviews`} color={'#f8e825'}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price : ${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description : ${product.description}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description
                        </ListGroup.Item>

                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col> Price </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col> Status </Col>
                                    <Col>
                                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}

                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className="btn-block rounded" type = "button" disabled={product.countInStock==0}> Add To Cart</Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen