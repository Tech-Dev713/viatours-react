import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { categories } from '../../data/mockData';

const Categories = () => {
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Tour Categories</h2>
            <p className="text-muted fs-5">Discover your next adventure</p>
          </Col>
        </Row>

        <Row className="g-4">
          {categories.map((category, index) => (
            <Col key={category.id} lg={4} md={6}>
              <div 
                className="position-relative rounded-4 overflow-hidden"
                style={{ 
                  height: '280px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div 
                  className="position-absolute w-100 h-100"
                  style={{ 
                    background: gradients[index % gradients.length],
                    opacity: 0.9
                  }}
                />
                
                <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white p-4 text-center">
                  <div className="display-1 mb-3">{category.icon}</div>
                  <h4 className="fw-bold mb-2">{category.name}</h4>
                  <p className="mb-3">{category.description}</p>
                  <span className="badge bg-white text-dark px-4 py-2">
                    {category.count} Tours
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Categories;