import React from 'react';
import logo from '../../image/logo.png';
import fb from '../../image/social-logo/facebook.png';
import insta from '../../image/social-logo/instagram.png';
import twt from '../../image/social-logo/linkedin.png';
import linkd from '../../image/social-logo/twitter.png';
import cr from '../../image/social-logo/copyright.png';

const Footer = () => {
    return (
        <div className='container mt-5 pt-5'>
            <div>
                <div className='d-flex align-items-center justify-content-center'>
                    <img src={logo} alt="" />
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div>
                        <h2 className='d-flex align-items-center justify-content-center fs-1 fw-bold mb-3'>Contact <span className='text-primary'>.</span> </h2>
                        <small>For all business and collaboration opportunities.</small>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center mt-5 mb-5 pb-5'>
                    <img className='mx-3' src={fb} alt="" />
                    <img className='mx-3' src={insta} alt="" />
                    <img className='mx-3' src={twt} alt="" />
                    <img className='mx-3' src={linkd} alt="" />
                </div>
                <small className='d-flex align-items-center justify-content-center mb-5 pb-5'><img className='me-2' src={cr} alt="" />2022 Driip. All rights reserved</small>
            </div>
        </div>
    );
};

export default Footer;