interface Skill {
    name: string;
    level: number;
}

const skillList: Skill[] = [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 100 },
    { name: "TypeScript", level: 95 },
    { name: "Angular", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "CSS/SASS", level: 95 },
    { name: "Java", level: 95 },
    { name: "Spring Boot", level: 95 },
    { name: "Python", level: 90 },
    { name: "MongoDB", level: 85 },
    { name: "Git", level: 100 }
];

function Skills() {
    return <section id="skills" className="skills">
        <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
                {skillList.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-progress"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default Skills