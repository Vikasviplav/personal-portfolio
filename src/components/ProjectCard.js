import { Col } from "react-bootstrap";
import { FaPlay, FaCode } from 'react-icons/fa';

export const ProjectCard = ({ title, description, imgUrl, github_url, deploy_url, techStack }) => {

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="imgUrl" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <span>Tech Stack: {techStack}</span>
          <br/>
          <div style={{display: 'flex', justifyContent: "space-around" }}>
            <a
              href={deploy_url}
              target='_blank'
              rel='noreferrer'
              style={{display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: 50,
                border: "2px solid white",}}
                title="Deploy link"
            >
              <FaPlay
                style={{fontSize: '1.1rem',
                  color: "white",
                  transition: 'all 0.2s',}}
                aria-label='Demo'
              /> 
            </a>
            
            <a
              href={github_url}
              target='_blank'
              rel='noreferrer'
              style={{display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: 50,
                border: "2px solid white",}}
                title="Github link"
            >
              <FaCode
                style={{fontSize: '1.1rem',
                  color: "white",
                  transition: 'all 0.2s',}}
                aria-label='Code'
              />
            </a>
          </div>
        </div>
      </div>

    </Col>
  )
}
