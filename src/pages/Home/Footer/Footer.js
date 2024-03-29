import React from 'react';
import logo from '../../../resources/images/signature-logo-1.png';
import github from '../../../resources/images/icons/github1.png';
import whatsapp from '../../../resources/images/icons/whatsapp.png';
import linkedin from '../../../resources/images/icons/linkedin.png';
import Zoom from 'react-reveal/Zoom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-box3 mt-5'>
            <Zoom right>
            <footer className='text-center text-white py-5'>
                    <img src={logo} alt="" /><br />
                    All right reserved &copy; BM. Zahidul Islam {year}
                    <br />
                    Email address : bmzahidulislam@outlook.com
                    <br />
                    Contact number : +880 1675633294
                    <h4><span className='text-warning'>A Personal</span> Portfolio Website</h4>
                    <p>
                        <a href="https://github.com/Zahid-BM" target={'_blank'}
                            rel={'noopener noreferrer'}><img className='me-4 hover1' src={github} alt="" /></a>
                        <a href="https://www.linkedin.com/in/bm-zahidul-islam-9250a4156/" target={'_blank'} rel={'noopener noreferrer'}><img className='me-4 hover1' src={linkedin} alt="" /></a>
                        <a href="https://wa.me/1675633294" target={'_blank'}
                            rel={'noopener noreferrer'}><img className='me-4 hover1' src={whatsapp} alt="" /></a>
                    </p>
                </footer>
            </Zoom>
        </div>
    );
};

export default Footer;