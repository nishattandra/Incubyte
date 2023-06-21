/* eslint-disable no-unused-vars */
import React from 'react';
import './Expertise.css'
import bgImg from '../../assets/landingpage/Rectangle 9.png'
import { Card } from 'react-bootstrap';

const Expertise = () => {
    return (
        <div>
            <h2 className='text-center fs-2 fw-bold' style={{ color: 'slateblue' }}>Our Expertise</h2>
            <div className='expertise'>
                <div className='d-md-flex justify-content-center mt-5 gap-5'>
                    <Card className=" text-black  cardExpertise">
                        <Card.Img src={bgImg} className='rounded-3 img' />
                        <Card.ImgOverlay>
                            <Card.Title className='text-center mt-5 fs-3 fw-semibold'>Hiring</Card.Title>
                            <Card.Text className='fs-5 p-2'>
                                Leveraging our deep understanding of the talent landscape, we devise effective hiring strategies to attract the best tech professionals.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className=" text-black cardExpertise" >
                        <Card.Img src={bgImg} className='rounded img' />
                        <Card.ImgOverlay>
                            <Card.Title className='text-center mt-5 fs-3 fw-semibold'>Human Resources <br /> Management</Card.Title>
                            <Card.Text className='fs-5 p-2'>
                                We ensure a healthy and productive work environment by implementing efficient HR practices tailored to the unique needs of your startup.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>

                </div>
                <div className='d-md-flex justify-content-center gap-5 mt-5 expertise1'>
                    <Card className=" text-black cardExpertise">
                        <Card.Img src={bgImg} className='rounded img' />
                        <Card.ImgOverlay>
                            <Card.Title className='text-center mt-5 fs-3 fw-semibold'>Taxation</Card.Title>
                            <Card.Text className='fs-5 p-2'>
                                Our team navigates through the complexities of the tax system, ensuring compliance while optimizing financial efficiency. 
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className=" text-black cardExpertise">
                        <Card.Img src={bgImg} className='rounded img' />
                        <Card.ImgOverlay>
                            <Card.Title className='text-center mt-5 fs-3 fw-semibold'>Regulatory Guidance</Card.Title>
                            <Card.Text className='fs-5 p-2'>
                                We stay abreast of the ever-changing regulatory landscape, providing timely advice to ensure your startup&apos;s operations stay within legal boundaries.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default Expertise;