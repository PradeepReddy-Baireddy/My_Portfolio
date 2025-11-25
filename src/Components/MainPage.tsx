import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Dashboard from './Dashboard';
import { About } from './About';
// import Skills from './Skills';
import { Contact } from './Contact';
import Projects from './Projects';
import Resume from './Resume'; 


const MainPage: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('home');
    const NAV_ITEMS = ["Home", "About", "Resume","Projects", "Contact"];
    // const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Contact"];

    useEffect(() => {
        const handleScroll = () => {
            const currentSection = NAV_ITEMS.find(item => {
                const element = document.getElementById(item.toLowerCase());
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection.toLowerCase());
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // To scroll to desired section
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="portfolio">
            <nav className="nav">
                <div className="nav-container">
                    <div className="nav-logo">
                        <h3>Pradeep Reddy Baireddy</h3>
                    </div>
                    <div className="nav-menu">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item}
                                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                                onClick={() => scrollToSection(item.toLowerCase())}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <button
                    className="nav-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                </div>
                {isMenuOpen && (
                <div className="nav-mobile">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item}
                            className="nav-mobile-link"
                            onClick={() => scrollToSection(item.toLowerCase())}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
            </nav >
            <Dashboard scrollToSection={scrollToSection} />
            <About></About>
            {/* <Skills></Skills> */}
            <Resume /> 
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default MainPage;