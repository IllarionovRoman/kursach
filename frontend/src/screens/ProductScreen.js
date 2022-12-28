import React, { useState, useEffect}from 'react'
import { Container, Row, Col, Image, Button, ListGroup, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../products'
import axios from 'axios'
import {deleteProduct} from '../actions/productActions'
import { useSelector, useDispatch } from 'react-redux'

function ProductScreen({match}){
    const dispatch = useDispatch()
    const productDelete = useSelector(state => state.productDelete)

    const deleteHandler = (id) => {
        dispatch(deleteProduct(`${match.params.id}`))
    }
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProduct(){
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()

    },[dispatch])
    return (
        <div>
            <a href={'/'} className='btn btn-light my-3'>Go back</a>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Время: {product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Описание: {product.description}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Телефон: {product.brand}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={6}></Col>

                <button className='btn btn-light my-3' onClick={deleteHandler}>Удалить</button>

            </Row>
        </div>
    )
}
export default ProductScreen