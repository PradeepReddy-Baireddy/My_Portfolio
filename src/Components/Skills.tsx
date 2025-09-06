interface Skill {
    name: string;
    level: number;
}

const skillList: Skill[] = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "CSS/SASS", level: 85 },
    { name: "MongoDB", level: 70 },
    { name: "Git", level: 85 }
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