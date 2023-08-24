import React from 'react';
import '../styles/Projects.css';
import '../styles/global.css';
import '../styles/App.css';

const projectsData = [
  {
    title: 'Sun Clinic',
    description: 'Online Booking Portal Full Stack application.  I led a team of 5 and managed the project to completion.  Lead developer, QA, Cyber Security, Database Developer',
    Link: 'https://github.com/Hussein-Mortada/SunClinic',
    image: process.env.PUBLIC_URL+'/images/sunclinic.JPG'
  },
  {
    title: 'Leet Code',
    description: 'Solutions to LeetCode problems in Java and Python',
    Link: 'https://github.com/Hussein-Mortada/LeetCode',
    image: process.env.PUBLIC_URL+'/images/LeetCode_Sharing.png'
  },
  {
    title: 'Home nVentory',
    description: 'Fullstack Web Application with user and admin funcitonalities focusing on CRUD functions',
    Link: 'https://github.com/Hussein-Mortada/Home-nVentory',
    image: process.env.PUBLIC_URL+'/images/Home nVentory.png'
  },
  {
    title: 'Binary Search Tree',
    description: 'Binary Search Tree implementation, full JUnit testing, BST searching algorithms, and file serialization and deserialization',
    Link: 'https://github.com/Hussein-Mortada/BSTImplementation',
    image: process.env.PUBLIC_URL+'/images/bst.jpg'
  },
  {
    title: 'Sorting Algorithms',
    description: 'Implementation of sorting algorithms, file reading/managing, and different API',
    Link: 'https://github.com/Hussein-Mortada/JavaSortingAlgorithms',
    image: process.env.PUBLIC_URL+'/images/sorting.jpg'
  }
];

function Projects() {
    return (
      <div className='pageContainer'>
        <div className='ProjectsContainer'>
          <div className="section">
            <div className='projects-top-left'>
              <h1>Projects</h1>
              <p className='underline'></p>
            </div>
            <div className='projects'>
              <div className="project-container">
                {projectsData.map((project, index) => (
                  <a
                    key={index}
                    href={project.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                  >
                    <div className="project-card">
                      <img className='project-img' src={project.image} alt={project.title} />
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;