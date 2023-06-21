/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../assets/landingpage/Creative team-pana 1.png'
import bgImg from '../../assets/landingpage/Rectangle 9.png'
import img1 from '../../assets/landingpage/Ellipse 1-1.png'
import img2 from '../../assets/landingpage/Ellipse 1.png'
import img3 from '../../assets/landingpage/Ellipse 2.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className=''>
            <Card className=" text-black banner">
                <Card.Img src={bgImg} className='rounded-0 img' />
                <Card.ImgOverlay>
                    <Card.Title className='text-center mt-5 fs-1 fw-bold'>Welcome to <span style={{ color: 'slateblue' }}>Incubyte</span></Card.Title>
                    <Card.Text className='text-center fw-semibold'>
                        Building bridges to success in the tech ecosystem.
                    </Card.Text>
                    <div className='d-flex justify-content-center'>
                        <img src={img} className=' img2' alt="" />
                    </div>
                </Card.ImgOverlay>
            </Card>
            <img src={img1} className='ellipse1' alt="" />
            <img src={img2} className='ellipse2 ' alt="" />
            <img src={img3} className='ellipse3 ' alt="" />
        </div>
    );
};

export default Banner;