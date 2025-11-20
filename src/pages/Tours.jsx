import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { tours } from '../data/mockData';
import TourCard from '../components/common/TourCard';
import { FaSearch } from 'react-icons/fa';

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('all');

  const filteredTours = tours.filter(tour => 
    tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tour.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <section className="bg-primary-custom text-white py-5">
        <Container className="text-center">
          <h1 className="display-4 fw-bold mb-3">Explore Our Tours</h1>
          <p className="fs-5">Find your perfect adventure from our curated collection</p>
        </Container>
      </section>

      {/* Tours Listing */}
      <Container className="py-5">
        {/* Search & Filter */}
        <Row className="mb-4">
          <Col md={8}>
            <InputGroup size="lg">
              <InputGroup.Text className="bg-white">
                <FaSearch className="text-muted" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search tours by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col md={4}>
            <Form.Select 
              size="lg"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="all">All Tours</option>
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Results Count */}
        <p className="text-muted mb-4">
          Showing {filteredTours.length} {filteredTours.length === 1 ? 'tour' : 'tours'}
        </p>

        {/* Tours Grid */}
        <Row className="g-4">
          {filteredTours.map((tour) => (
            <Col key={tour.id} lg={4} md={6}>
              <TourCard tour={tour} />
            </Col>
          ))}
        </Row>

        {filteredTours.length === 0 && (
          <Row className="py-5">
            <Col className="text-center">
              <p className="text-muted fs-5">No tours found matching your criteria.</p>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Tours;