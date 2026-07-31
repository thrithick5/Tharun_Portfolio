const PORTFOLIO_DATA = {
    name: "Tharun Hrithick SR",
    title: "AI Agent & Backend Developer",
    location: "Bangalore, India",
    contact: [
        { label: "Phone", value: "+91-8072231360", link: "tel:+918072231360", icon: "phone" },
        { label: "Email", value: "tharunhrithick5@gmail.com", link: "mailto:tharunhrithick5@gmail.com", icon: "email" },
        { label: "LinkedIn", value: "LinkedIn Profile", link: "https://www.linkedin.com/in/tharun-hrithick-sr-56a601293/", icon: "linkedin" },
        { label: "GitHub", value: "GitHub Profile", link: "https://github.com/thrithick5", icon: "github" }
    ],
    objective: "Fourth-year B.Tech student in Information Science and Engineering with hands-on experience in Python, Generative AI, and prompt engineering. Skilled at working closely with large language models, writing clear domain-specific prompts, and evaluating model outputs with strong attention to detail. Comfortable working independently in remote, asynchronous environments, and equally adaptable to in-office settings, and eager to apply research, reasoning, and analytical skills to help improve the performance of AI systems.",
    skills: [
        { category: "Programming", items: "Python, JavaScript" },
        { category: "Technical Interests", items: "Artificial Intelligence, Agentic AI, Prompt Engineering, Machine Learning, Generative AI, RAG" },
        { category: "Web Development", items: "HTML, CSS, React, TypeScript" },
        { category: "Database", items: "MySQL, PostgreSQL, ChromaDB" },
        { category: "Tools", items: "Git, n8n, Claude Code, Postman" },
        { category: "Soft Skills", items: "Problem-solving, Collaboration, Adaptability, Quick Learning" }
    ],
    projects: [
        {
            title: "Early Lung Cancer Detection Web App",
            tags: ["PCL Project", "Deep Learning", "Flask", "PyTorch", "CT Scans", "SQL"],
            description: "Designed an end-to-end medical image classification system using Convolutional Neural Networks (CNNs) to detect lung cancer from CT scan images. Integrated the trained CNN model with a Flask backend and SQL database, achieving 91% validation accuracy while enabling real-time diagnostic predictions."
        },
        {
            title: "Nerve - AI Healthcare Assistant",
            tags: ["FastAPI", "React", "TypeScript", "PostgreSQL", "ChromaDB", "Mistral AI", "RAG", "OCR"],
            description: "Built a full-stack AI healthcare assistant using Retrieval-Augmented Generation (RAG) to answer medical queries from uploaded reports, PDFs, and images with context-aware responses. Implemented OCR-based document processing, semantic search with ChromaDB, JWT/Google authentication, and persistent chat history using FastAPI and PostgreSQL."
        },
        {
            title: "Automated Report Generator",
            tags: ["FastAPI", "Generative AI", "Gemini API", "SQLAlchemy", "SQLite"],
            description: "Built an intelligent automated reporting tool that parses active Git repositories to auto-generate structured development summaries via the Gemini 1.5 Flash API."
        },
        {
            title: "Emotion Detection & Music Recommendation",
            tags: ["Internship Project", "Machine Learning", "Python", "Scikit-Learn", "Pandas", "NLP"],
            description: "Conceptualized a real-time sentiment analysis engine to process user inputs and match emotional states to tailored, context-specific audio playlists."
        }
    ],
    internships: [
        {
            role: "AI Agent Development Intern",
            company: "MacAppStudio",
            period: "Present",
            description: "Developed Nerve, an AI-powered Healthcare Assistant using FastAPI, React, and Retrieval-Augmented Generation (RAG) to provide context-aware responses from uploaded medical reports, PDFs, and images. Implemented OCR-based document processing with Tesseract, semantic retrieval using ChromaDB, JWT/Google authentication, and PostgreSQL-backed conversation management for secure, persistent user interactions."
        },
        {
            role: "Artificial Intelligence Virtual Intern",
            company: "Infosys Springboard 6.0",
            period: "3 Months",
            description: "Engineered a dual-module facial emotion recognition and personalized music recommendation pipeline in Python, optimizing SVM and NLP classifiers to reach 88% accuracy. Structured data preprocessing pipelines for metadata normalization, improving overall music recommendation relevance metrics."
        },
        {
            role: "Backend Development (Python)",
            company: "Hawky (Startup), Bangalore",
            period: "3 Months",
            description: "Architected and optimized high-throughput Flask API endpoints, reducing core application response latencies by 15%. Collaborated with startup engineers to build scalable database schemas and resolve critical server bottlenecks prior to product launching."
        }
    ],
    certifications: [
        "Generative AI - Microsoft & LinkedIn",
        "ChatGPT Prompt Engineering - DeepLearning AI",
        "Artificial Intelligence - Infosys Springboard",
        "Introduction to Agent Skills - Anthropic",
        "Database and SQL for Data Science in Python - Coursera (IBM)"
    ]
};

const renderIcon = (type: string) => {
    switch (type) {
        case "phone":
            return (
                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            );
        case "email":
            return (
                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            );
        case "linkedin":
            return (
                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            );
        case "github":
            return (
                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            );
        default:
            return null;
    }
};

export default function App() {
    return (
        <div className="app-container">
            {/* Header / Hero Section */}
            <header className="hero-section" id="portfolio-header">
                <div className="hero-backdrop"></div>
                <div className="hero-content">
                    <div className="location-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="pin-icon">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {PORTFOLIO_DATA.location}
                    </div>
                    <h1 className="name-title">{PORTFOLIO_DATA.name}</h1>
                    <p className="subtitle">{PORTFOLIO_DATA.title}</p>

                    <div className="contacts-grid">
                        {PORTFOLIO_DATA.contact.map((info, idx) => (
                            <a
                                key={idx}
                                href={info.link}
                                target="_blank"
                                rel="noreferrer"
                                className="contact-card"
                                id={`contact-link-${info.label.toLowerCase()}`}
                            >
                                {renderIcon(info.icon)}
                                <div className="contact-details">
                                    <span className="contact-label">{info.label}</span>
                                    <span className="contact-val">{info.value}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </header>

            <main className="main-content">
                {/* Objective Section */}
                <section className="section-container card-reveal" id="objective-section">
                    <h2 className="section-title">Objective</h2>
                    <div className="glass-card objective-card">
                        <p className="objective-text">{PORTFOLIO_DATA.objective}</p>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="section-container card-reveal" id="skills-section">
                    <h2 className="section-title">Skills & Expertise</h2>
                    <div className="skills-grid">
                        {PORTFOLIO_DATA.skills.map((skill, idx) => (
                            <div className="glass-card skill-card" key={idx} id={`skill-category-${idx}`}>
                                <h3 className="skill-category-title">{skill.category}</h3>
                                <div className="skill-tags">
                                    {skill.items.split(', ').map((item, itemIdx) => (
                                        <span className="skill-pill" key={itemIdx}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section className="section-container card-reveal" id="projects-section">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="projects-grid">
                        {PORTFOLIO_DATA.projects.map((proj, idx) => (
                            <div className="glass-card project-card" key={idx} id={`project-card-${idx}`}>
                                <div className="project-header">
                                    <h3 className="project-title">{proj.title}</h3>
                                    <svg className="project-arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                                <div className="project-tags">
                                    {proj.tags.map((tag, tagIdx) => (
                                        <span className="project-tag" key={tagIdx}>{tag}</span>
                                    ))}
                                </div>
                                <p className="project-description">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Internships Section */}
                <section className="section-container card-reveal" id="internships-section">
                    <h2 className="section-title">Experience & Internships</h2>
                    <div className="timeline">
                        {PORTFOLIO_DATA.internships.map((intern, idx) => (
                            <div className="timeline-item" key={idx} id={`internship-item-${idx}`}>
                                <div className="timeline-dot"></div>
                                <div className="glass-card timeline-card">
                                    <span className="timeline-date">{intern.period}</span>
                                    <h3 className="timeline-role">{intern.role}</h3>
                                    <h4 className="timeline-company">{intern.company}</h4>
                                    <p className="timeline-desc">{intern.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications Section */}
                <section className="section-container card-reveal" id="certifications-section">
                    <h2 className="section-title">Certifications</h2>
                    <div className="certifications-grid">
                        {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                            <div className="glass-card certification-card" key={idx} id={`cert-item-${idx}`}>
                                <div className="cert-icon-container">
                                    <svg className="cert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <span className="cert-name">{cert}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="footer" id="portfolio-footer">
                <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with React & Vite.</p>
            </footer>
        </div>
    );
}
