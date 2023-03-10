import React, {useState} from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
function SearchBox(){
     const [keyword, setKeyword] = useState('')

     let history = useHistory()
     const submitHandler = (e) => {
        e.preventDefault()
        if(keyword){
            history.push(`/?keyword=${keyword}`)
        }else{
            history.push(history.push(history.location.pathname))
        }
     }

    return (
       <Form onSubmit={submitHandler} inline>

            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'>
            </Form.Control>


       </Form>

    )
}
export default SearchBox