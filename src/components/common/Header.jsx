import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaPlane } from 'react-icons/fa';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar 
      bg="white" 
      expand="lg" 
      className={`sticky-top transition-all ${scrolled ? 'shadow-lg py-2' : 'shadow-sm py-3'}`}
      expanded={expanded}
      style={{ transition: 'all 0.3s ease' }}
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold d-flex align-items-center"
          style={{ fontSize: '28px' }}
        >
          <div className="d-flex align-items-center">
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
            <span className="text-gradient">ViaTours</span>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`mx-2 fw-semibold position-relative ${isActive('/') ? 'text-gradient' : 'text-dark'}`}
              onClick={() => setExpanded(false)}
              style={{ fontSize: '16px' }}
            >
              Home
              {isActive('/') && (
                <div 
                  className="position-absolute bottom-0 start-50 translate-middle-x"
                  style={{
                    width: '30px',
                    height: '3px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '2px'
                  }}
                />
              )}
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/tours" 
              className={`mx-2 fw-semibold position-relative ${isActive('/tours') ? 'text-gradient' : 'text-dark'}`}
              onClick={() => setExpanded(false)}
              style={{ fontSize: '16px' }}
            >
              Tours
              {isActive('/tours') && (
                <div 
                  className="position-absolute bottom-0 start-50 translate-middle-x"
                  style={{
                    width: '30px',
                    height: '3px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '2px'
                  }}
                />
              )}
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/destinations" 
              className={`mx-2 fw-semibold position-relative ${isActive('/destinations') ? 'text-gradient' : 'text-dark'}`}
              onClick={() => setExpanded(false)}
              style={{ fontSize: '16px' }}
            >
              Destinations
              {isActive('/destinations') && (
                <div 
                  className="position-absolute bottom-0 start-50 translate-middle-x"
                  style={{
                    width: '30px',
                    height: '3px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '2px'
                  }}
                />
              )}
            </Nav.Link>
            
            <Button className="btn-primary-custom ms-lg-3 mt-2 mt-lg-0">
              Book Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;