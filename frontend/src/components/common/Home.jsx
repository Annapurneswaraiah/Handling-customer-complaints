import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import landingImage from '../../Images/landing.png';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="landing-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#">ComplaintCare</a>
          <div className="ms-auto">
            <a className="nav-link text-white d-inline-block me-3" href="/">Home</a>
            <a className="nav-link text-white d-inline-block me-3" href="/signup">SignUp</a>
            <a className="nav-link text-white d-inline-block" href="/login">Login</a>
          </div>
        </div>
      </nav>

      <section className="hero-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right">
              <img src={landingImage} alt="landing" className="img-fluid rounded shadow" />
            </Col>
            <Col md={6} data-aos="fade-left" className="text-md-start text-center mt-md-0 mt-4">
              <h1 className="display-5 fw-bold">Resolve Now</h1>
              <p className="lead text-secondary">
                Exceed Customer Expectations: Discover our <br /> Complaint Management Solution
              </p>
              <div className="d-flex justify-content-md-start justify-content-center flex-wrap gap-3">
                <Button href="/signup" variant="primary" size="lg">
                  Register your Complaint
                </Button>
                <Button href="/admin/dashboard" variant="outline-secondary" size="lg">
                  Admin Dashboard
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-4">
            <h2 data-aos="fade-up" className="fw-bold">Why Choose Us?</h2>
            <p data-aos="fade-up" className="text-muted">Fast. Reliable. Transparent.</p>
          </Row>
          <Row>
            <Col md={4} className="text-center" data-aos="zoom-in">
              <i className="bi bi-lightning-charge-fill display-4 text-primary"></i>
              <h5 className="mt-3">Quick Complaint Resolution</h5>
              <p>Fast ticket assignment and escalation to reduce waiting time.</p>
            </Col>
            <Col md={4} className="text-center" data-aos="zoom-in" data-aos-delay="200">
              <i className="bi bi-chat-dots-fill display-4 text-success"></i>
              <h5 className="mt-3">Real-Time Chat Support</h5>
              <p>Communicate directly with agents using our secure messaging system.</p>
            </Col>
            <Col md={4} className="text-center" data-aos="zoom-in" data-aos-delay="400">
              <i className="bi bi-bar-chart-fill display-4 text-warning"></i>
              <h5 className="mt-3">Track Status Anytime</h5>
              <p>Get real-time updates on your complaints from submission to resolution.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="bg-dark text-white text-center py-4">
        <Container>
          <p className="mb-0">&copy; {new Date().getFullYear()} Resolve Now. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
