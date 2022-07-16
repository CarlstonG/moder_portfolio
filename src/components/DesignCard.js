import { Col } from "react-bootstrap";
import { FaGlobe } from 'react-icons/fa';


export const DesignCard = ({ title, description, imgUrl, code }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <a href={code} target="_blank"><FaGlobe/></a>
        </div>
        
      </div>
    </Col>
  )
}
