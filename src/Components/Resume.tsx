import React from 'react';
import { Download, Eye } from 'lucide-react';

// const RESUME_URL = './Pradeep-Reddy-Baireddy.pdf';
const RESUME_URL = './Pradeep Reddy Baireddy.pdf';

const Resume: React.FC = () => {
    return (
        <section id="resume" className="section resume">
            <div className="resume-container">
                <h2 className="section-title">Resume</h2>
                <p className="section-subtitle">
                    You can view or download my latest resume below.
                </p>

                <div className="resume-actions">
                    <a
                        href={RESUME_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        <Eye size={18} />
                        <span>View Resume</span>
                    </a>

                    <a
                        href={RESUME_URL}
                        download
                        className="btn btn-primary"
                    >
                        <Download size={18} />
                        <span>Download Resume</span>
                    </a>
                </div>

                <div className="resume-preview">
                    <iframe
                        src={RESUME_URL + '#toolbar=0'}
                        title="Resume Preview"
                        className="resume-iframe"
                    />
                </div>
            </div>
        </section>
    );
};

export default Resume;
