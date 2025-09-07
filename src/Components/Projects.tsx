import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';


interface Project {
  id: number,
  title: string,
  description: string,
  technologies: string[],
  image: string,
  githubUrl?: string,
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "College Data Management System",
    description: "A comprehensive database management system to handle data for students and faculty, including personal details and academic records using Python based UI and SQL backend to handle student/faculty records, developed incrementally following Agile methodology with weekly sprints and continuous testing.",
    technologies: ["Python", "SQL","DBMS","MySQL Workbench"],
    image: "/C_DBMS.png",
    githubUrl: "https://github.com/PradeepReddy-Baireddy/MSCS_542L_256_23S_College-Data-Management-System_Super-Six/tree/main/phase07",

  },
  {
    id: 2,
    title: "Tech Track",
    description: "A Java-based real-time monitoring application developed with PowerShell scripts and Core Java integration for system metrics extraction, featuring Spring Boot backend with RESTful APIs and SQL/JDBC database integration for optimized performance tracking.",
    technologies: ["Java", "SpringBoot", "HTML", "JavaScript", "Node.js", "MongoDB", "Powershell"],
    image: "/Tech_Track.png",
    githubUrl: "https://github.com/PradeepReddy-Baireddy/TechTrack",

  }
];

function Project() {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                                                <FaGithub size={20} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>);
}

export default Project