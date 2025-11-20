import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto">
      <Container className="py-5">
        <Row className="g-4">
          {/* About Section */}
          <Col lg={3} md={6}>
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div 
                  className="p-2 rounded-circle me-2"
                  style={{ 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaPlane 
                    className="text-white" 
                    style={{ transform: 'rotate(-45deg)', fontSize: '20px' }} 
                  />
                </div>
                <h4 className="mb-0 fw-bold text-white">ViaTours</h4>
              </div>
              <p className="text-white-50 mb-4">
                Your gateway to amazing travel experiences around the world. Discover, explore, and create unforgettable memories.
              </p>
              <div className="d-flex gap-3">
                <a 
                  href="#" 
                  className="text-white d-flex align-items-center justify-content-center rounded-circle"
                  style={{ 
                    width: '40px', 
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FaFacebook size={18} />
                </a>
                <a 
                  href="#" 
                  className="text-white d-flex align-items-center justify-content-center rounded-circle"
                  style={{ 
                    width: '40px', 
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FaTwitter size={18} />
                </a>
                <a 
                  href="#" 
                  className="text-white d-flex align-items-center justify-content-center rounded-circle"
                  style={{ 
                    width: '40px', 
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FaInstagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="text-white d-flex align-items-center justify-content-center rounded-circle"
                  style={{ 
                    width: '40px', 
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-4 text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link 
                  to="/" 
                  className="text-white-50 text-decoration-none d-inline-block"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.paddingLeft = '10px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="mb-3">
                <Link 
                  to="/tours" 
                  className="text-white-50 text-decoration-none d-inline-block"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.paddingLeft = '10px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  Tours
                </Link>
              </li>
              <li className="mb-3">
                <Link 
                  to="/destinations" 
                  className="text-white-50 text-decoration-none d-inline-block"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.paddingLeft = '10px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  Destinations
                </Link>
              </li>
              <li className="mb-3">
                <a 
                  href="#" 
                  className="text-white-50 text-decoration-none d-inline-block"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.paddingLeft = '10px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  About Us
                </a>
              </li>
              <li className="mb-3">
                <a 
                  href="#" 
                  className="text-white-50 text-decoration-none d-inline-block"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.paddingLeft = '10px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  Blog
                </a>
              </li>
            </ul>
          </Col>

          {/* Support */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-4 text-white">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a 
                  href="#" 
                  className="text-white-50 text-decoration-none d-inline-block"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.paddingLeft = '10px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  FAQ
                </a>
              </li>
              <li className="mb-3">
                <a 
                  href="#" 
                  className="text-white-50 text-decoration-none d-inline-block"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.paddingLeft = '10px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  Help Center
                </a>
              </li>
              <li className="mb-3">
                <a 
                  href="#" 
                  className="text-white-50 text-decoration-none d-inline-block"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.paddingLeft = '10px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li className="mb-3">
                <a 
                  href="#" 
                  className="text-white-50 text-decoration-none d-inline-block"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.paddingLeft = '10px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-3">
                <a 
                  href="#" 
                  className="text-white-50 text-decoration-none d-inline-block"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.paddingLeft = '10px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-4 text-white">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <div 
                  className="p-2 rounded-circle me-3 flex-shrink-0"
                  style={{ 
                    background: 'rgba(102, 126, 234, 0.2)',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaMapMarkerAlt className="text-white" size={16} />
                </div>
                <span className="text-white-50" style={{ fontSize: '14px', lineHeight: '1.7' }}>
                  123 Raipur, Chhattisgarh 12345
                </span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <div 
                  className="p-2 rounded-circle me-3 flex-shrink-0"
                  style={{ 
                    background: 'rgba(102, 126, 234, 0.2)',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaPhone className="text-white" size={16} />
                </div>
                <a 
                  href="tel:+91 123456789" 
                  className="text-white-50 text-decoration-none"
                  style={{ fontSize: '14px', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
                >
                  +91 123456789
                </a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <div 
                  className="p-2 rounded-circle me-3 flex-shrink-0"
                  style={{ 
                    background: 'rgba(102, 126, 234, 0.2)',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaEnvelope className="text-white" size={16} />
                </div>
                <a 
                  href="mailto:info@viatours.com" 
                  className="text-white-50 text-decoration-none"
                  style={{ fontSize: '14px', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
                >
                  info@viatours.com
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row className="mt-5 pt-4 border-top border-secondary">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="text-white-50 mb-0" style={{ fontSize: '14px' }}>
              &copy; 2025 ViaTours. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="text-white-50 mb-0" style={{ fontSize: '14px' }}>
              Designed with <span className="text-danger">❤️</span> for travelers
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;