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
        <Title title="Sobre mí" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne || (
                    <span>
                      En mis tiempos libres me gusta salir a andar en bici, soy fan de Harry Potter
                      y el ambiente del diseño y desarrollo me apasiona.
                    </span>
                  )}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo || (
                    <div>
                      <span>
                        Siento que es un desafío poder comunicar una idea clara con pocos recursos
                        gráficos y a su vez ricos.
                      </span>
                      <br />
                      <span>
                        <i>"Menos es más" </i>
                        es mí frase de cabecera.
                      </span>
                      <br />
                      <span>
                        Me encanta poder combinar estos dos mundos para así lograr crear un espacio
                        en el que el usuario tenga una experiencia interactiva en un sitio web o
                        aplicación
                      </span>
                    </div>
                  )}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || (
                    <div>
                      <span>
                        Disfruto mucho de mí trabajo ya que es mí pasión, disfruto aprender
                        constantemente y crecer profesionalmente.
                      </span>
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
