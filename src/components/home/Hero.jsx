import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt, FaCalendar, FaUsers } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-section text-white py-5 position-relative">
      <div className="hero-content">
        <Container className="py-5">
          <Row className="text-center mb-5 fade-in-up">
            <Col>
              <h1 className="display-3 fw-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Explore the World with <span className="d-block mt-2">ViaTours ✈️</span>
              </h1>
              <p className="lead fs-4 mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
                Discover amazing destinations and create unforgettable memories with our curated travel experiences
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap mb-5">
                <div className="stats-badge">
                  <h3 className="fw-bold mb-0">1000+</h3>
                  <small>Destinations</small>
                </div>
                <div className="stats-badge">
                  <h3 className="fw-bold mb-0">50K+</h3>
                  <small>Happy Travelers</small>
                </div>
                <div className="stats-badge">
                  <h3 className="fw-bold mb-0">4.9⭐</h3>
                  <small>Rating</small>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="slide-in-left">
            <Col lg={10} className="mx-auto">
              <div className="glass-effect p-4">
                <Row className="g-3">
                  <Col md={3}>
                    <InputGroup className="border rounded-pill overflow-hidden bg-white">
                      <InputGroup.Text className="bg-white border-0">
                        <FaMapMarkerAlt className="text-gradient" />
                      </InputGroup.Text>
                      <Form.Control 
                        placeholder="Where to?" 
                        className="border-0 shadow-none"
                      />
                    </InputGroup>
                  </Col>

                  <Col md={3}>
                    <InputGroup className="border rounded-pill overflow-hidden bg-white">
                      <InputGroup.Text className="bg-white border-0">
                        <FaCalendar className="text-gradient" />
                      </InputGroup.Text>
                      <Form.Control 
                        type="date" 
                        className="border-0 shadow-none"
                      />
                    </InputGroup>
                  </Col>

                  <Col md={3}>
                    <InputGroup className="border rounded-pill overflow-hidden bg-white">
                      <InputGroup.Text className="bg-white border-0">
                        <FaUsers className="text-gradient" />
                      </InputGroup.Text>
                      <Form.Select className="border-0 shadow-none">
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4+ Guests</option>
                      </Form.Select>
                    </InputGroup>
                  </Col>

                  <Col md={3}>
                    <Button className="w-100 btn-secondary-custom d-flex align-items-center justify-content-center gap-2">
                      <FaSearch />
                      <span>Search</span>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .stats-badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 20px 30px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          min-width: 150px;
        }
      `}</style>
    </section>
  );
};

export default Hero;