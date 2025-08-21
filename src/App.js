import React, { useState } from 'react';

// Main App component
const App = () => {
  // State for navigation (optional, could use react-router-dom in a larger app)
  const [currentPage, setCurrentPage] = useState('home'); // Still starts at 'home' for the main landing page

  const renderSection = () => {
    switch (currentPage) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />; // Default to HomeSection if an unknown page is set
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-10 bg-gray-800 bg-opacity-90 shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="text-2xl font-bold text-teal-400 rounded-md p-2">
            {/* Clicking the portfolio title will take you back to the Home section */}
            <a href="#home" onClick={() => setCurrentPage('home')}>Sai Santhosh Kumar Vedala</a>
          </div>
          <div className="flex space-x-6">
            {/* Removed the dedicated NavItem for Home */}
            <NavItem label="About" target="about" setCurrentPage={setCurrentPage} />
            <NavItem label="Skills" target="skills" setCurrentPage={setCurrentPage} />
            <NavItem label="Projects" target="projects" setCurrentPage={setCurrentPage} />
            <NavItem label="Contact" target="contact" setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main className="pt-20"> {/* Padding to account for fixed nav bar */}
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 p-6 text-center mt-12 rounded-t-lg">
        <p>&copy; {new Date().getFullYear()} Sai Santhosh Kumar Vedala. All rights reserved.</p>
        <p className="mt-2 text-sm">Built with React and Tailwind CSS</p>
      </footer>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ label, target, setCurrentPage }) => (
  <a
    href={`#${target}`}
    onClick={() => setCurrentPage(target)}
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:bg-teal-600 hover:shadow-lg"
  >
    {label}
  </a>
);

// Home Section Component
const HomeSection = () => (
  <section id="home" className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-center">
    <div className="max-w-4xl mx-auto p-8 bg-gray-800 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out border border-teal-500">
      <h1 className="text-5xl md:text-6xl font-extrabold text-teal-400 mb-4 leading-tight">
        Hi, I'm <span className="text-white">Sai Santhosh Kumar Vedala</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        <span className="text-teal-300"> Data Analyst | Business Analyst | MS in IT & Project Management</span>.
      </p>
      <div className="space-x-4">
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          View My Work
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Contact Me
        </button>
      </div>
    </div>
  </section>
);

// About Section Component
const AboutSection = () => (
  <section id="about" className="py-20 px-8 bg-gray-900 rounded-lg">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-12 rounded-md p-3 shadow-md bg-gray-800">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-12 bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
        <div className="w-48 h-48 rounded-full overflow-hidden mb-8 md:mb-0 md:flex-shrink-0 border-4 border-teal-500 shadow-lg">
          {/* Placeholder for profile image */}
          <img
            src="https://placehold.co/192x192/0D0D0D/F3F4F6?text=Your+Photo"
            alt="Your Profile"
            className="w-full h-full object-cover rounded-full"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/192x192/0D0D0D/F3F4F6?text=Image+Error"; }}
          />
        </div>
        <div className="flex-grow text-gray-300 text-lg leading-relaxed">
          <p className="mb-4">
            Hi, I’m **Sai Santhosh Kumar Vedala**, a data enthusiast with an aviation backbone. I started out in Aircraft Maintenance Engineering, working hands-on with live aircraft and seeing up close how much safety, reliability, and operations depend on good data from maintenance logs and parts life cycles to scheduling and telemetry. That experience taught me precision, systems thinking, and the cost of bad decisions.
          </p>
          <p className="mb-4">
            To go deeper into the data itself, I completed a Master’s in Information Technology and Project Management. Since then, I have focused on turning messy, real-world data into clear, decision-ready insights. I build interactive dashboards in **Power BI** and **Tableau**, write robust **SQL** for modeling and analysis, and use **Python (pandas/NumPy)** to automate repetitive tasks and streamline workflows. I enjoy connecting the dots between business questions, data constraints, and practical outcomes.
          </p>
          <p className="mb-4">
            What I love most is solving problems at the intersection of business and analytics: clarifying requirements, defining KPIs, finding root causes, and telling the story with simple visuals and crisp narratives. Whether it is inventory and supply chain KPIs, product performance, or customer behavior, my goal is the same: deliver insights people can act on.
          </p>
          <p className="mb-4">
            **Tools & Focus**: Power BI, Tableau, SQL (PostgreSQL/SQL Server), Python (pandas/NumPy), Excel, Git · Data modeling, DAX, KPI design, dashboard UX, automation, and stakeholder communication.
          </p>
          <p className="mb-4">
            **What is next**: I am pursuing roles as a Data Analyst / Business Analyst, where I can partner with teams to solve real business and data problems faster, cleaner, and with measurable impact.
          </p>
          <p className="mb-4">
            Thank you for taking the time to learn about me. Feel free to browse my portfolio to see some of my featured projects, and do not hesitate to reach out if you would like to connect or discuss how I can add value to your team.
          </p>
          <p className="mb-4">
            **Connect with me**: LinkedIn | GitHub
          </p>
          <p className="text-gray-400 italic">
            “Without data, you’re just another person with an opinion.” — W. Edwards Deming
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Skills Section Component
const SkillsSection = () => {
  const skills = [
    {
      category: 'Analytics & Visualization',
      items: [
        'Power BI', 'Tableau', 'Looker', 'Cognos', 'Excel (Pivot Tables, Charts)',
        'KPI Reporting', 'DAX', 'Dashboard Automation', 'EDA', 'Data Cleaning'
      ]
    },
    {
      category: 'Programming & Databases',
      items: [
        'Python (Pandas, NumPy)', 'R', 'SQL (PostgreSQL, SQL Server, MySQL, SQLite)',
        'VBA', 'pgAdmin 4', 'Git', 'GitHub'
      ]
    },
    {
      category: 'Business Analysis & Tools',
      items: [
        'BRD/FRD Documentation', 'UAT Planning & Testing', 'Agile (Scrum, Kanban)',
        'Stakeholder Communication', 'Salesforce', 'Lucidchart', 'JIRA', 'Confluence',
        'Microsoft SharePoint', 'Microsoft Office Suite'
      ]
    },
    {
      category: 'Certifications',
      items: [
        { name: 'Data Analysis with Python', url: 'https://courses.cognitiveclass.ai/certificates/3bb156c630994bc588f1142ed8383d9f' },
        { name: 'Google Data Analytics', url: 'https://www.coursera.org/account/accomplishments/professional-cert/XJ0I74ZQGXUB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof' },
        { name: 'IBM Business Analyst', url: 'https://www.coursera.org/account/accomplishments/professional-cert/9ECEE6E3M12W?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof' },
        { name: 'Microsoft Certified: Power BI Data Analyst Associate', url: 'https://learn.microsoft.com/en-us/users/saisanthoshkumarvedala-8384/credentials/b71a035e768f7f00?ref=https%3A%2F%2Fwww.linkedin.com%2F' },
        { name: 'Agile Project Management Foundation', url: 'https://www.linkedin.com/learning/certificates/19539982356dc6a0a21dd6a484e36fac928c806bd06bf92e3b6ae0b3919aed8b?trk=share_certificate' },
        { name: 'Business Analysis Foundations', url: 'https://www.linkedin.com/learning/certificates/7efc17c0f69a7f994093f5c7453994f8cb24ceaf6daa99b4c3f5c3ad53425710?trk=share_certificate' },
        { name: 'Data Analytics: 1 Foundations', url: 'https://www.linkedin.com/learning/certificates/89b78d24d939b00e8679ce2031d5611425d309528f939a520d29adb4f97b1d9d?trk=share_certificate' },
        { name: 'Six Sigma Foundations', url: 'https://www.linkedin.com/learning/certificates/e06cda0ba62bc9032f48f0f852655622209558fe4a2b6c11c1724f21f05eeb7e?trk=share_certificate' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-8 bg-gray-800 rounded-lg">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-12 rounded-md p-3 shadow-md bg-gray-900">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-white mb-4 border-b border-teal-600 pb-2">
                {skillCategory.category}
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-lg">
                {skillCategory.items.map((skill, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <span className="mr-2 text-teal-400">&#x2022;</span>
                    {typeof skill === 'object' ? (
                      <a href={skill.url} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-200">
                        {skill.name}
                      </a>
                    ) : (
                      skill
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title: "Supply Chain Dashboard",
      description: "Interactive dashboard analyzing inventory turnover, shipping efficiency, and cost breakdown. Implemented KPI tracking and vendor performance insights for supply chain optimization.",
      tags: ["Tableau", "KPI Reporting", "Supply Chain"],
      imageUrl: "https://placehold.co/400x250/1F2937/D1D5DB?text=Supply+Chain",
      liveLink: "#", // Add actual link if available
      githubLink: "#", // Add actual link if available
    },
    {
      title: "Olympics Performance Dashboard",
      description: "Dashboard visualizing athlete trends, medal distribution, and country-wise performance. Used advanced DAX for time-based insights and ranking measures.",
      tags: ["Power BI", "DAX", "Data Visualization"],
      imageUrl: "https://placehold.co/400x250/1F2937/D1D5DB?text=Olympics+Dashboard",
      liveLink: "#", // Add actual link if available
      githubLink: "#", // Add actual link if available
    },
    {
      title: "AdventureWorks Sales Dashboard",
      description: "Retail dashboard tracking sales, product returns, and customer segments. Built dynamic KPI visuals using structured transactional data.",
      tags: ["Power BI", "KPIs", "Retail Analytics"],
      imageUrl: "https://placehold.co/400x250/1F2937/D1D5DB?text=Sales+Dashboard",
      liveLink: "#", // Add actual link if available
      githubLink: "#", // Add actual link if available
    },
    {
      title: "Tip Calculator",
      description: "CLI-based tool calculating per-person bill split with adjustable tip logic. Focused on user input handling and rounding precision.",
      tags: ["Python", "CLI", "Logic"],
      imageUrl: "https://placehold.co/400x250/1F2937/D1D5DB?text=Tip+Calculator",
      liveLink: "#", // Add actual link if available
      githubLink: "#", // Add actual link if available
    },
    {
      title: "Treasure Island Game",
      description: "Text-based interactive game using conditional branches and logical flows. Designed for beginner-level storytelling with command-line navigation.",
      tags: ["Python", "Text Game", "Storytelling"],
      imageUrl: "https://placehold.co/400x250/1F2937/D1D5DB?text=Treasure+Island",
      liveLink: "#", // Add actual link if available
      githubLink: "#", // Add actual link if available
    },
  ];

  return (
    <section id="projects" className="py-20 px-8 bg-gray-900 rounded-lg">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-12 rounded-md p-3 shadow-md bg-gray-800">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-56 object-cover"
      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/1F2937/D1D5DB?text=Image+Error"; }}
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="bg-teal-700 text-teal-100 text-sm font-semibold px-3 py-1 rounded-full shadow-md">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between space-x-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Live Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

// Contact Section Component
const ContactSection = () => (
  <section id="contact" className="py-20 px-8 bg-gray-800 rounded-lg">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-12 rounded-md p-3 shadow-md bg-gray-900">
        Contact Me
      </h2>
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-700">
        <p className="text-gray-300 text-lg text-center mb-8">
          Feel free to reach out directly:
        </p>
        <div className="text-center text-gray-300 text-lg mb-6">
          <p className="mb-2">
            📧 Email: <a href="mailto:saisanthoshvedala2000@gmail.com" className="text-teal-400 hover:underline">saisanthoshvedala2000@gmail.com</a>
          </p>
          <p>
            📞 Phone: <a href="tel:+18137090498" className="text-teal-400 hover:underline">813-709-0498</a>
          </p>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>You can also find me on:</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.linkedin.com/in/sai-santhosh-v-371705209/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-4xl transform hover:scale-110 transition-transform duration-300" aria-label="LinkedIn">
              {/* LinkedIn Icon - using a simple letter 'in' for now */}
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/Saisanthoshkumarvedala" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-4xl transform hover:scale-110 transition-transform duration-300" aria-label="GitHub">
              {/* GitHub Icon - using a simple letter 'gh' for now */}
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.235 1.838 1.235 1.07 1.835 2.809 1.305 3.49.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.312.465-2.387 1.229-3.22-.124-.3-.535-1.524.118-3.176 0 0 1-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.298-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.876.118 3.176.766.834 1.229 1.91 1.229 3.22 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.197-6.094 8.197-11.387c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default App;
