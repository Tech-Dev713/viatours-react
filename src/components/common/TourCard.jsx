import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { FaStar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const TourCard = ({ tour }) => {
  // Format price with Indian numbering system
  const formatPrice = (price) => {
    return price.toLocaleString('en-IN');
  };

  return (
    <Card className="h-100 border-0 shadow-sm card-hover">
      <div className="position-relative overflow-hidden img-overlay" style={{ height: '240px' }}>
        <Card.Img 
          variant="top" 
          src={tour.image} 
          alt={tour.title}
          style={{ height: '100%', objectFit: 'cover' }}
        />
        {tour.rating && (
          <Badge 
            className="position-absolute top-0 end-0 m-3 px-3 py-2 badge-custom"
          >
            <FaStar className="text-warning me-1" />
            <span className="fw-bold">{tour.rating}</span>
          </Badge>
        )}
        <div className="position-absolute top-0 start-0 m-3">
          <Badge bg="danger" className="px-3 py-2 rounded-pill">
            🔥 Hot Deal
          </Badge>
        </div>
      </div>
      
      <Card.Body className="d-flex flex-column p-4">
        <Card.Title className="fw-bold text-dark mb-3" style={{ fontSize: '20px' }}>
          {tour.title}
        </Card.Title>
        <Card.Text className="text-muted flex-grow-1 mb-3">
          {tour.description}
        </Card.Text>
        
        <div className="d-flex justify-content-between text-muted small mb-4">
          {tour.duration && (
            <span className="d-flex align-items-center gap-2">
              <div className="p-2 rounded-circle bg-light">
                <FaClock className="text-gradient" />
              </div>
              <span className="fw-semibold">{tour.duration}</span>
            </span>
          )}
          {tour.location && (
            <span className="d-flex align-items-center gap-2">
              <div className="p-2 rounded-circle bg-light">
                <FaMapMarkerAlt className="text-gradient" />
              </div>
              <span className="fw-semibold">{tour.location.split(',')[0]}</span>
            </span>
          )}
        </div>
        
        <div className="d-flex justify-content-between align-items-center pt-3 border-top">
          <div>
            <small className="text-muted d-block mb-1">Starting from</small>
            <h4 className="text-gradient fw-bold mb-0">
              ₹{formatPrice(tour.price)}
            </h4>
          </div>
          <button className="btn btn-primary-custom btn-sm px-4">
            Book Now →
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TourCard;