/* eslint-disable no-unused-vars */
import React from 'react';
import img3 from '../../assets/landingpage/Ellipse 2.png'
import './Success.css'

const Success = () => {
    return (
        <div className='success'>
            <img className='successImg' src={img3} alt="" />
            <div className='successDetails text-center text-white'>
                <h1 className='fs-3'>Success Stories</h1>
                <p className='fs-5'>Over the years, we have helped numerous startups successfully <br /> establish their captive development centers. Join the roster of our <br /> successful collaborations.</p>
            </div>
        </div>
    );
};

export default Success;