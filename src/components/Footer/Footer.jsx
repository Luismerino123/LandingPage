import React from "react";
import "./Footer.css";
import images from "../../../public/img/images";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

export default function Footer() {
    return (
        <Container fluid id="footer-content">
            <Stack direction="horizontal " gap={3} className="align-items-center">
                <div className="p-2"><h3>Foodies</h3></div>
                <div className="ms-auto d-none d-md-block">
                    <img src={images.Google} alt="Google Play" className="footer-icon" />
                </div>
                <div className="d-none d-md-block">
                    <img src={images.Apple} alt="Apple App Store" className="footer-icon" />
                </div>
            </Stack>
            <div id="text-content">
                <div id="Text">
                    <p>Conoce nuestras sucursales</p>
                    <p>Acerca de</p>
                    <p>Qué hablan de nosotros?</p>
                    <p>Conoce nuestras sucursales</p>
                </div>
            </div>
        </Container>
    );
}
