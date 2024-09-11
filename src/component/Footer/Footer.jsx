import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer className="text-light py-4" style={{ backgroundColor: "#822570" }}>
            <Container>
                <Row className="mb-4">
                    <Col md={6}>
                        <h4>About Us</h4>
                        <p>
                            Welcome to our platform where you can share your thoughts and connect with others.
                        </p>
                    </Col>
                    <Col md={2}>
                    
                    </Col>
                    <Col md={4}>
                        <h4>Follow Us</h4>
                        <ul className="list-unstyled d-flex justify-content-start mb-0">
                            <li className="me-3">
                                <a href="https://www.facebook.com" className="text-light">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li className="me-3">
                                <a href="https://www.twitter.com" className="text-light">
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" className="text-light">
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-3">
                        <p>&copy; 2024 YourWebsiteName. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
