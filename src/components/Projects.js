import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { DesignCard } from "./DesignCard";
import precision from "../assets/img/precisiontech.png"
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/lidekahome.PNG";
import projImg3 from "../assets/img/csharp1.png";
import projImg4 from "../assets/img/progimg4.PNG";
import projImg5 from "../assets/img/2.png";
import projImg6 from "../assets/img/3.jpg";
import projImg7 from "../assets/img/project7.PNG"
import Design1 from "../assets/img/dan1.png"
import Map1 from "../assets/img/map.png"
import Game01 from "../assets/img/game01.PNG"
import Vizdak from "../assets/img/vizdak.png"
import Game1 from "../assets/img/Illustration18.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import Mobile1 from "../assets/img/mobile1.PNG"
import Mobile2 from "../assets/img/mobile2.PNG"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {


  const Game = [
    {
      title: "Python DB solution - Contribution",
      description: "Python, Django, Unity, C#",
      code: "https://github.com/CarlstonG/django-unity3d-example",
      imgUrl: Game01,
    },

    {
      title: "Lideka APP",
      description: "React-Native, Firebase, Tailwind",
      source: "https://play.google.com/store/apps/details?id=com.cchip.lideka&hl=en&gl=US",
      code: "https://play.google.com/store/apps/details?id=com.cchip.lideka&hl=en&gl=US",
      imgUrl: Mobile1,
    },
    {
      title: "Recipe APP",
      description: "React-Native, Tailwind",
      code: "https://github.com/CarlstonG/Recipe-app",
      imgUrl: Mobile2,
    },
    

  ]


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
      source: 'https://store.allcampussecurity.com/',
      code: 'https://github.com/CarlstonG/gigware-web'
    },
    {
      title: "PrecisionTech",
      description: "ReactJS, Strapi, PostGresql, Typescript",
      imgUrl: precision,
      source: 'https://github.com/CarlstonG/precision_tech',
      code: 'https://www.precisiontech-solutions.com/'
    },
    {
      title: "Lidekahome - Ecomm",
      description: "Nuxt, Shopify - API, MangoDB, Strapi",
      imgUrl: projImg2,
      source: 'https://lidekahome.nl/',
      code: 'https://github.com/CarlstonG/lideka_German'
    },
    {
      title: "Hubmind CRM Dash",
      description: "Nextjs, React, Firebase, Tailwind",
      imgUrl: projImg7,
      source: 'https://github.com/CarlstonG/serverless_hubmind',
      code: 'https://myhubmind.com/login'
    },
    {
      title: "Admin - Enrollment",
      description: "C#, .Net, SQL ",
      imgUrl: projImg3,
      source: 'https://github.com/CarlstonG/Mabato_Version4',
      code: 'https://github.com/CarlstonG/Mabato_Version4'
    },
    {
      title: "Fitness React",
      description: "React, CSS",
      imgUrl: projImg4,
      source: 'https://fitclub-1my.pages.dev/',
      code: 'https://github.com/CarlstonG/fitness_boiler_react'
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
                      <Nav.Link eventKey="third">Game and App</Nav.Link>
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
                    <Row>
                        {
                          Game.map((design, index) => {
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
