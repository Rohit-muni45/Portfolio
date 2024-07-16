import React from 'react';
import './Skills.css';
import Avatar from '../../Images/Avatar.png'; 

const skills = [
  { id:'1', name: 'Javascript', color: '#A3D200' },
  { id:'2', name: 'HTML/CSS', color: '#E44D26' },
  { id:'3', name: 'Python', color: '#4F5B93' },
  { id:'4', name: 'MySQL', color: '#31A8FF' },
  { id:'5', name: 'React', color: '#FF9A00' },
];

function Skills() {
  return ( 
    <>
    <div className='skills-box'>
    <section className="skills-section">
      <div className="skills-container">
        <div className="avatar">
          <img src={Avatar} alt="Avatar" />
        </div>
        <h2>My Skills</h2>
        {skills.map((skill, id) => (
          <div key={id} className="skill-bubble" style={{ backgroundColor: skill.color }}>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
    </div>
    </>
  );
}

export default Skills;
