import { Linkedin, Mail } from 'lucide-react';
export function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-text">
                        <h3>Let's work together!</h3>
                        <p>
                            I'm always interested in new opportunities and exciting projects.
                            Whether you have a question or just want to say hi, I'll do my best
                            to get back to you!
                        </p>
                        <div className="contact-links">
                            <a href="mailto:pradeepbireddy358@gmail.com" className="contact-link">
                                <Mail size={20} />
                                pradeepbireddy358@gmail.com
                            </a>
                            <a href="https://www.linkedin.com/in/pradeep-reddy-baireddy-374660230" className="contact-link" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}