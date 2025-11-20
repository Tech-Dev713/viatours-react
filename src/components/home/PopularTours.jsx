import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { tours } from '../../data/mockData';
import TourCard from '../common/TourCard';
import { FaArrowRight } from 'react-icons/fa';

const PopularTours = () => {
  // Show only first 6 tours on home page
  const popularTours = tours.slice(0, 6);

  return (
    <section className="py-5">
      <Container>
        <Row className="text-center mb-5">
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
                🔥 HOT DEALS
              </span>
            </div>
            <h2 className="display-4 fw-bold mb-3">
              Popular <span className="text-gradient">Tours</span>
            </h2>
            <p className="text-muted fs-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Handpicked tours for unforgettable experiences around the world
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {popularTours.map((tour) => (
            <Col key={tour.id} lg={4} md={6}>
              <TourCard tour={tour} />
            </Col>
          ))}
        </Row>

        {/* View All Button */}
        <Row className="mt-5">
          <Col className="text-center">
            <Link to="/tours" style={{ textDecoration: 'none' }}>
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
                View All Tours
                <FaArrowRight />
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PopularTours;