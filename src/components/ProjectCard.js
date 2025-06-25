import { Col } from "react-bootstrap";
import { FaGlobe, FaGithub } from 'react-icons/fa';
import React, { useState } from "react";


export const ProjectCard = ({ title, description, imgUrl, source, code }) => {
  const [showModal, setShowModal] = useState(false);
  const isWebflow = description === "Webflow";

  const handleGithubClick = (e) => {
    if (isWebflow) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          {!isWebflow ? (
            <a href={source} target="_blank"><FaGithub/></a>
          ) : (
            <a href="#" onClick={handleGithubClick}><FaGithub/></a>
          )}
          <a href={code} target="_blank"><FaGlobe/></a>
        </div>
        {showModal && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }} onClick={() => setShowModal(false)}>
            <div style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '32px 24px',
              minWidth: '320px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              textAlign: 'center',
              position: 'relative'
            }} onClick={e => e.stopPropagation()}>
              <h4 style={{marginBottom: '16px', color: '#222'}}>GitHub link not available</h4>
              <p style={{marginBottom: '24px', color: '#222'}}>This project is built with Webflow and does not have a public GitHub repository.<br/>Select a non-Webflow project to see its code.</p>
              <button style={{
                background: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 20px',
                cursor: 'pointer',
                fontSize: '1rem'
              }} onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </Col>
  )
}
