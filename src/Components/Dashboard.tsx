import { ChevronDown } from "lucide-react";

interface DashProps {
    scrollToSection: (sectionId: string) => void;
}

const Dashboard: React.FC<DashProps> = ({ scrollToSection }) => {
    return (
        <section id="home" className="dashboard">
            <div className="dashboard-container">
                <div className="dashboard-content">
                    <h1 className="dashboard-title">
                        Hi, I'm <span className="highlight">Pradeep Reddy Baireddy</span>
                    </h1>
                    <h2 className="dashboard-subtitle">Senior Software Engineer && Full Stack Developer</h2>
                    <p className="dashboard-description">
                        I create functional, and user-centered softwares and web applications.
                        Passionate about clean code and innovative solutions.
                    </p>
                    <div className="dashboard-buttons">
                        <button
                            className="btn-primary"
                            onClick={() => scrollToSection('about')}
                        >
                            View My Work
                        </button>
                    </div>
                </div>
                <div className="dashboard-image">
                    <div className="dashboard-placeholder">
                        <img
                            src="/my_image.jpg"
                            alt="Profile"
                            className="profile-image"
                            style={{ height: "125%" }}
                        />
                    </div>
                </div>
            </div>
            <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
                <ChevronDown size={24} />
            </div>
        </section>);
}

export default Dashboard;