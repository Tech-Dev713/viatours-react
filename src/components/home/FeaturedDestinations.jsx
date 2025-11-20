import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { destinations } from '../../data/mockData';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const FeaturedDestinations = () => {
  return (
    <section className="py-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      {/* Decorative Background Elements */}
      <div 
        className="position-absolute w-100 h-100 top-0 start-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3
        }}
      />

      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="text-center mb-5 fade-in-up">
          <Col>
            <div className="mb-3">
              <span 
                className="d-inline-block px-4 py-2 rounded-pill mb-3"
                style={{ 
                  background: 'rgba(102, 126, 234, 0.1)',
                  color: '#667eea',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                🌍 EXPLORE THE WORLD
              </span>
            </div>
            <h2 className="display-4 fw-bold mb-3">
              <span className="text-gradient">Featured</span> Destinations
            </h2>
            <p className="text-muted fs-5 mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Discover breathtaking locations and create unforgettable memories at the world's most stunning destinations
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {destinations.map((destination, index) => (
            <Col 
              key={destination.id} 
              lg={4} 
              md={6} 
              className="fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="position-relative overflow-hidden rounded-4 shadow-lg"
                style={{ 
                  height: '450px',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Image - FIXED */}
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-100 h-100"
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.6s ease',
                    imageRendering: '-webkit-optimize-contrast',
                    backfaceVisibility: 'hidden'
                  }}
                />

                {/* Gradient Overlay - LIGHTER */}
                <div 
                  className="position-absolute w-100 h-100 top-0 start-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
                    transition: 'opacity 0.3s ease'
                  }}
                />

                {/* Top Badge */}
                <div className="position-absolute top-0 start-0 m-4" style={{ zIndex: 3 }}>
                  <span 
                    className="px-3 py-2 rounded-pill"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#333',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}
                  >
                    ⭐ {destination.country}
                  </span>
                </div>

                {/* Content */}
                <div 
                  className="position-absolute bottom-0 start-0 end-0 p-4 text-white"
                  style={{ zIndex: 3 }}
                >
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <FaMapMarkerAlt className="me-2 text-warning" size={20} />
                      <span className="small fw-semibold opacity-75">Popular Destination</span>
                    </div>
                    <h3 className="fw-bold mb-2" style={{ fontSize: '36px', lineHeight: '1.2' }}>
                      {destination.name}
                    </h3>
                    <p className="mb-3 opacity-90" style={{ fontSize: '15px' }}>
                      {destination.description}
                    </p>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <div 
                      className="px-4 py-2 rounded-pill"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      <span className="fw-semibold">✈️ {destination.tours} Tours</span>
                    </div>
                    <button 
                      className="btn btn-light rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-semibold"
                      style={{
                        transition: 'all 0.3s ease',
                        border: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(5px)';
                        e.currentTarget.style.background = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      Explore
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* View All Destinations Button */}
        <Row className="mt-5">
          <Col className="text-center">
            <Link to="/destinations" style={{ textDecoration: 'none' }}>
              <button 
                className="btn btn-lg px-5 py-3 rounded-pill fw-semibold d-inline-flex align-items-center gap-3"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                  fontSize: '16px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
                }}
              >
                View All Destinations
                <FaArrowRight />
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedDestinations;