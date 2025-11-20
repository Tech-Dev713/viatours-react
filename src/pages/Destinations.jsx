import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { destinations } from '../data/mockData';
import { FaMapMarkerAlt, FaSuitcase, FaArrowRight, FaGlobe } from 'react-icons/fa';

const Destinations = () => {
  return (
    <div>
      {/* Attractive Header */}
      <section 
        className="py-5 text-white position-relative overflow-hidden" 
        style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: '400px'
        }}
      >
        {/* Animated Background Pattern */}
        <div 
          className="position-absolute w-100 h-100 top-0 start-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.3
          }}
        />
        
        <Container className="position-relative" style={{ zIndex: 1 }}>
          <Row className="align-items-center min-vh-50">
            <Col lg={8} className="mx-auto text-center fade-in-up">
              {/* <Badge bg="light" text="dark" className="mb-4 px-4 py-2 rounded-pill">
                <FaGlobe className="me-2" /> Explore Destinations
              </Badge> */}
              <h1 className="display-3 fw-bold mb-4">
                Top Travel Destinations 🌍
              </h1>
              <p className="fs-4 mb-4 opacity-75" style={{ maxWidth: '700px', margin: '0 auto' }}>
                Discover the world's most amazing places and create memories that last a lifetime
              </p>
              
              {/* Stats */}
              <Row className="mt-5 g-4">
                <Col md={4}>
                  <div className="p-4 rounded-4" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                    <h2 className="fw-bold mb-1">150+</h2>
                    <p className="mb-0 opacity-75">Countries</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="p-4 rounded-4" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                    <h2 className="fw-bold mb-1">500+</h2>
                    <p className="mb-0 opacity-75">Destinations</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="p-4 rounded-4" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                    <h2 className="fw-bold mb-1">100K+</h2>
                    <p className="mb-0 opacity-75">Travelers</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Destinations Grid */}
      <Container className="py-5">
        <Row className="g-4">
          {destinations.map((destination, index) => (
            <Col key={destination.id} lg={6} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="border-0 shadow-sm overflow-hidden card-hover h-100">
                <Row className="g-0 h-100">
                  <Col md={6} className="position-relative">
                    <div className="img-overlay" style={{ height: '100%', minHeight: '300px' }}>
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      />
                      <Badge 
                        className="position-absolute top-0 start-0 m-3 px-3 py-2"
                        style={{ 
                          background: 'rgba(255,255,255,0.95)',
                          color: '#333',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}
                      >
                        ⭐ Popular
                      </Badge>
                    </div>
                  </Col>
                  
                  <Col md={6}>
                    <Card.Body className="d-flex flex-column justify-content-center h-100 p-4">
                      <div className="mb-3">
                        <Badge 
                          className="px-3 py-2 rounded-pill mb-3"
                          style={{ 
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            fontSize: '12px'
                          }}
                        >
                          🌟 Featured
                        </Badge>
                      </div>
                      
                      <h3 className="fw-bold mb-3" style={{ fontSize: '28px' }}>
                        {destination.name}
                      </h3>
                      
                      <p className="text-muted mb-4 d-flex align-items-start">
                        <FaMapMarkerAlt className="text-gradient mt-1 me-2 flex-shrink-0" />
                        <span>{destination.description}</span>
                      </p>
                      
                      <div className="d-flex align-items-center gap-2 mb-4 p-3 bg-light rounded-3">
                        <div 
                          className="p-2 rounded-circle"
                          style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                        >
                          <FaSuitcase className="text-white" size={18} />
                        </div>
                        <div>
                          <span className="fw-bold text-dark">{destination.tours}</span>
                          <span className="text-muted ms-2">Available Tours</span>
                        </div>
                      </div>
                      
                      <Button className="btn-primary-custom w-100 d-flex align-items-center justify-content-center gap-2">
                        <span>Explore {destination.name}</span>
                        <FaArrowRight />
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Destinations;