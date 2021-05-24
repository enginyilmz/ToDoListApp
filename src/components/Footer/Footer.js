import React from 'react';
import Logo from '../../images/react.png'

const Footer = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <hr />
                <div className="d-flex justify-content-evenly">
                    <img src={Logo} alt="react" />
                    <i class="bi bi-bootstrap" style={{ fontSize: '64px' }} />
                </div>
            </div>
        </div>
    );
}

export default Footer;
