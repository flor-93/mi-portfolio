import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setCategory] = useState(null);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  return (
    <section id="projects">
      <Container>
        <div id="section-button">
          <button
            className="section-button cta-btn cta-btn--hero"
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            onClick={() => setCategory('branding')}
          >
            Branding
          </button>

          <button
            className="section-button cta-btn cta-btn--hero"
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            onClick={() => setCategory('web')}
          >
            Web
          </button>

          <button
            className="section-button cta-btn cta-btn--hero"
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            onClick={() => setCategory('editorial')}
          >
            Editorial
          </button>

          <button
            className="section-button cta-btn cta-btn--hero"
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            onClick={() => setCategory('imprenta')}
          >
            Imprenta
          </button>

          <button
            className="section-button cta-btn cta-btn--hero"
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            onClick={() => setCategory('socialMedia')}
          >
            Social Media
          </button>

          <button
            className="section-button cta-btn cta-btn--hero"
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            onClick={() => setCategory(null)}
          >
            Todos
          </button>
        </div>

        <div className="project-wrapper">
          <Title title="Proyectos" />
          {filteredProjects.map((project) => {
            const { title, subtitle, info, info2, url, manual, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <h4 className="resalt">{subtitle || '2000'}</h4>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="resalt mb-4">{info2 || ''}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        Ver Proyecto
                      </a>

                      {manual && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={manual}
                        >
                          Manual de Marca
                        </a>
                      )}

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Código Fuente
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
