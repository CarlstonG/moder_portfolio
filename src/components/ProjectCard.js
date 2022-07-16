import { Col } from "react-bootstrap";
import { FaGlobe, FaGithub } from 'react-icons/fa';


export const ProjectCard = ({ title, description, imgUrl, source, code }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <a href={source} target="_blank"><FaGithub/></a> 
          
          <a href={code} target="_blank"><FaGlobe/></a>
          
        </div>
        
      </div>
    </Col>
  )
}
