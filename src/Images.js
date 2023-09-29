import React, { useEffect, useState,useRef } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';

export default function Images () {
    const [images,setImages]=useState([]);    
    useEffect(()=>{
        
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res)=> res.json())
        .then((data)=> setImages(data))
        .catch((error)=>console.error('Error fetching data:',error));
    },[]);
  return (
    <>
        <p className='text-center mt-1 text-primary'> Images From API</p>
        <Container>
            <Row>
                {images.map((image)=>(
                    <Col xs={12} sm={12} md={6} lg={3}   key={image.id}>
                    <div className='image my-3 ' >
                            <Image src={image.url} alt={image.title} fluid/>
                    </div>
                    </Col>
                    
                ))}

            </Row>
        </Container>
    </>
  )
}
