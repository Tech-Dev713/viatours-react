import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { testimonials } from '../../data/mockData';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className="py-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <Container>
        <Row className="text-center mb-5 fade-in-up">
          <Col>
            {/* <Badge bg="primary" className="mb-3 px-4 py-2 rounded-pill">
              💬 Testimonials
            </Badge> */}
            <h2 className="display-5 fw-bold mb-3 section-title">What Our Travelers Say</h2>
            <p className="text-muted fs-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Real experiences from real travelers around the world
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col key={testimonial.id} lg={4} md={6} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="h-100 border-0 shadow-sm testimonial-card p-4">
                <Card.Body>
                  <div 
                    className="p-3 rounded-circle d-inline-flex mb-4"
                    style={{ 
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      width: '60px',
                      height: '60px',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <FaQuoteLeft className="text-white" size={24} />
                  </div>
                  
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-warning me-1" />
                    ))}
                  </div>
                  
                  <Card.Text className="text-muted mb-4 fst-italic" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                    "{testimonial.comment}"
                  </Card.Text>
                  
                  <div className="d-flex align-items-center border-top pt-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="rounded-circle me-3 shadow-sm"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6 className="mb-1 fw-bold">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.location}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;