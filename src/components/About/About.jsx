import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        {/* <Title title="Sobre mí" /> */}
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={4} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div
                className="about-wrapper__info"
                style={{ paddingTop: '15px', justifyContent: 'flex-start' }}
              >
                <h2 className="section-title" style={{ textAlign: 'start' }}>
                  Sobre mí
                </h2>
                <p className="about-wrapper__info-text" style={{ fontSize: '24px' }}>
                  {paragraphOne || (
                    <span>
                      Fana de Harry Potter y del diseño. Me desafío día a día a poder comunicar una
                      idea clara con mínimos recursos.
                    </span>
                  )}
                </p>
                <p
                  className="about-wrapper__info-text"
                  style={{ paddingTop: '20px', fontSize: '24px' }}
                >
                  {paragraphTwo || (
                    <div>
                      <span>
                        <i>"Menos es más" </i>
                      </span>
                      <br />
                      <p style={{ fontSize: '16px' }}>es mí frase de cabecera.</p>
                      {/* <span>
                        Me encanta poder combinar estos dos mundos para así lograr crear un espacio
                        en el que el usuario tenga una experiencia interactiva en un sitio web o
                        aplicación
                      </span> */}
                    </div>
                  )}
                </p>
                <p className="about-wrapper__info-text" style={{ fontSize: '16px' }}>
                  {paragraphThree || (
                    <div>
                      {/* <span>es mí frase de cabecera.</span> */}
                      {/* <span>
                        Disfruto mucho de mí trabajo ya que es mí pasión, me gusta aprender cosas
                        nuevas para así crecer profesionalmente.
                      </span> */}
                    </div>
                  )}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Curriculum
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
