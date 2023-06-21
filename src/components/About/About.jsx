/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../assets/landingpage/Rectangle 8.png'
import './About.css'

const About = () => {
    return (
        <div>
            <Card className=" text-white about">
                <Card.Img src={img} className='aboutImg rounded-0' alt="Card image" />
                <Card.ImgOverlay className='aboutDetails'>
                    <Card.Title className='fs-2'>About Us</Card.Title>
                    <Card.Text className='fs-5'>
                        With over 3years of experience, we at Incubyte specialize in setting up captive development centers for growing startups, addressing key challenges and providing tailor-made solutions for your business needs.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default About;