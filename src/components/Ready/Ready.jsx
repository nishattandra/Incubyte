/* eslint-disable no-unused-vars */
import React from 'react';
import './Ready.css'
import bgImg from '../../assets/landingpage/Rectangle 9.png'

const Ready = () => {
    return (
        <div className='ready'>
            <img src={bgImg} alt="" />
            <div className='readyDetails'>
                <h1 className='fs-3'>Ready to Scale Up?</h1>
                <p className='fs-5'>Experience the Incubyte advantage today. Let us help you navigate the challenges and scale up your operations smoothly and efficiently.</p>
                <button className='btn'>Contact Us</button>
            </div>
        </div>
    );
};

export default Ready;