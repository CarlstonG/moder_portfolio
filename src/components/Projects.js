import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { DesignCard } from "./DesignCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/lidekahome.PNG";
import projImg3 from "../assets/img/csharp1.png";
import projImg4 from "../assets/img/4.PNG";
import projImg5 from "../assets/img/2.png";
import projImg6 from "../assets/img/3.jpg";
import Design1 from "../assets/img/dan1.png"
import Map1 from "../assets/img/map.png"
import Vizdak from "../assets/img/vizdak.png"
import Game1 from "../assets/img/Illustration18.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const designs = [
    {
      title: "Fitness App and Web",
      description: "Adobe XD",
      code: "https://www.dropbox.com/sh/c72tr5mrop2zn6b/AABzFXc-crHZs9S5p5cubFIpa?dl=0",
      imgUrl: Design1,

    },
    {
      title: "Gigwire First Iteration",
      description: "Adobe XD",
      code: "https://www.dropbox.com/sh/c72tr5mrop2zn6b/AABzFXc-crHZs9S5p5cubFIpa?dl=0",
      imgUrl: projImg1,

    },
    {
      title: "Ecomm",
      description: "Figma",
      code: "https://www.dropbox.com/sh/c72tr5mrop2zn6b/AABzFXc-crHZs9S5p5cubFIpa?dl=0",
      imgUrl: projImg2,

    },
    {
      title: "Art Concept 1",
      description: "Game illustration, Photoshop, Clipart",
      code: "https://drive.google.com/drive/folders/1AdSNURWvVrQdHsKMFRA6NcP9qZ2nxBIW?usp=sharing",
      imgUrl: Map1,

    },
    {
      title: "Art Concept 2",
      description: "Game illustration, Photoshop, Clipart",
      code: "https://drive.google.com/drive/folders/1AdSNURWvVrQdHsKMFRA6NcP9qZ2nxBIW?usp=sharing",
      imgUrl: Vizdak,

    },
    {
      title: "Art Concept 3",
      description: "Game illustration, Photoshop, Clipart",
      code: "https://drive.google.com/drive/folders/1AdSNURWvVrQdHsKMFRA6NcP9qZ2nxBIW?usp=sharing",
      imgUrl: Game1,

    },

  ]


  const projects = [
    {
      title: "GIGWIRE (Discontinued and was changed)",
      description: "VUE, Laravel, PHP, SQL ",
      imgUrl: projImg1,
      source: 'https://github.com/CarlstonG/gigware-web',
      code: 'https://store.allcampussecurity.com/'
    },
    {
      title: "Lidekahome - Ecomm",
      description: "Nuxt, Shopify - API, MangoDB, Strapi",
      imgUrl: projImg2,
      source: 'https://store.allcampussecurity.com/',
      code: 'https://github.com/CarlstonG/gigware-web'
    },
    {
      title: "Admin - Enrollment",
      description: "C#, .Net, SQL ",
      imgUrl: projImg3,
      source: 'https://github.com/CarlstonG/Mabato_Version4',
      code: 'https://github.com/CarlstonG/Mabato_Version4'
    },
    {
      title: "Crypto-Static - Web3 Status",
      description: "React, Blockchain API",
      imgUrl: projImg4,
      source: 'https://crypto-static.netlify.app/',
      code: 'https://github.com/CarlstonG/CryptoStaticTools'
    },
    {
      title: "Python API",
      description: "Python, Django",
      imgUrl: projImg5,
      source: 'https://github.com/CarlstonG/python_API_Mk_Server',
      code: 'https://github.com/CarlstonG/python_API_Mk_Server'
    },
    {
      title: "Live Conference - Boilerplate",
      description: "Nextjs, Sanity, Stream API, TS",
      imgUrl: projImg6,
      source: 'https://github.com/CarlstonG/virtual-event-starter-kit',
      code: 'https://www.100ms.live/'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Recent Projects</h2>
                <p>Browse and checkout my antecedent clients and personal projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Designing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Game</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                             
                               <ProjectCard
                                key={index}
                                {...project}
                                />
                             
                            )
                          })
                        }
                        
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          designs.map((design, index) => {
                              return(
                                <DesignCard 
                             key={index}
                             {...design}
                             />
                              )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
