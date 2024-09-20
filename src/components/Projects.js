import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import shopping_cart from "../assets/img/shopping_cart.png"
import currency_exchanger from "../assets/img/currency_exchanger.png"
import timely from "../assets/img/timely.png"
import weather from "../assets/img/weather.png";
import you_Tube_mini from "../assets/img/you_Tube_mini.png"
import kfc from "../assets/img/kfc.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "shopping-cart",
      description: "This is a dummy ecommerce website that contains products, filters for products and cart.",
      techStack: "React, Redux, FakeAPI store",
      imgUrl: shopping_cart,
      github_url: 'https://github.com/Vikasviplav/shopping-cart',
      deploy_url: 'https://shopping-cart-vikasviplav.netlify.app/',
    },
    {
      title: " currency-exchanger",
      description: "It is a simple currency exchanger application made with react and open source api",
      techStack: "React, Tailwind",
      imgUrl: currency_exchanger,
      github_url: 'https://github.com/Vikasviplav/currency-exchanger',
      deploy_url: 'https://vikas-currency-exchanger-app.netlify.app',
    },
    {
      title: "Timely app",
      description: "it is a group project of cloning an application named Timely app",
      techStack: "React, Redux, OAuth",
      imgUrl: timely,
      github_url: 'https://github.com/khuranajordan/Timely-app-clone',
      deploy_url: 'https://timelyapp-clone.netlify.app/',
    },
    {
      title: "Weather_Project ",
      description: "This is a solo project show live weather report and map of any city on the planet.",
      techStack: "HTML, CSS, JS",
      imgUrl: weather,
      github_url: 'https://github.com/Vikasviplav/Weather_Project',
      deploy_url: 'https://subtle-buttercream-e2f3f0.netlify.app',
    },
    {
      title: " YouTube-mini",
      description: "This is a solo project of cloning YouTube.",
      techStack: "React, youtube-api",
      imgUrl: you_Tube_mini,
      github_url: 'https://github.com/Vikasviplav/YouTube-mini',
      deploy_url: 'https://zingy-faloodeh-0bb2b1.netlify.app/',
    },
    {
      title: "KFC clone",
      description: "This is a group project of cloning KFC",
      techStack: "React, Redux",
      imgUrl: kfc,
      github_url: 'https://github.com/Mukul-hub-dotcom/KFC_clone_Project',
      deploy_url: 'https://kfc-clonning.netlify.app/',
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
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
