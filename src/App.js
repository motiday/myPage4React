import { useState, useEffect } from 'react';
import './App.css';

const skillsData = [
  {
    id: 1,
    title: "フロントエンド開発",
    skills: ["React", "TypeScript", "Next.js", "CSS/SCSS"],
    description: "モダンなフロントエンド開発技術を活用したUI/UX設計",
    projects: [
      {
        name: "ECサイトリニューアル",
        description: "大手ECサイトのフロントエンド刷新プロジェクト",
        technologies: ["React", "TypeScript", "Next.js"],
        role: "フロントエンドリード"
      },
      {
        name: "管理画面開発",
        description: "社内向け管理システムのUI/UX改善",
        technologies: ["React", "SCSS"],
        role: "フロントエンドエンジニア"
      }
    ]
  },
  {
    id: 2,
    title: "バックエンド開発",
    skills: ["Node.js", "Express", "Python", "PostgreSQL"],
    description: "スケーラブルなバックエンドシステムの設計と実装",
    projects: [
      {
        name: "APIサーバー開発",
        description: "モバイルアプリのバックエンドサーバー",
        technologies: ["Node.js", "Express", "PostgreSQL"],
        role: "バックエンドリード"
      }
    ]
  },
  {
    id: 3,
    title: "インフラストラクチャ",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    description: "クラウドインフラの構築と運用",
    projects: [
      {
        name: "クラウドインフラ構築",
        description: "AWSを利用したクラウドインフラの構築",
        technologies: ["AWS", "Docker", "Kubernetes"],
        role: "インフラエンジニア"
      }
    ]
  }
];

function ProjectAccordion({ project }) {
  return (
    <div className="project-item">
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <div className="project-tech">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <p className="role">役割: {project.role}</p>
    </div>
  );
}

function SkillSection({ title, skills, description, projects }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="skill-section">
      <div className="content-wrapper">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
        <button 
          className="learn-more" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '閉じる' : '詳細を見る'}
        </button>
        
        {isOpen && (
          <div className="projects-accordion">
            <h3>関連プロジェクト</h3>
            {projects.map((project, index) => (
              <ProjectAccordion key={index} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="logo">LOGO</div>
        <nav>
          <a 
            href="#profile" 
            className={activeSection === 'profile' ? 'active' : ''}
          >
            プロフィール
          </a>
          <a 
            href="#skills" 
            className={activeSection === 'skills' ? 'active' : ''}
          >
            スキル
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
          >
            お問い合わせ
          </a>
        </nav>
      </header>

      <div className="main-content">
        <section id="profile" className="hero-section">
          <h1>プロフィール</h1>
        </section>
        
        <main id="skills">
          {skillsData.map((item) => (
            <SkillSection key={item.id} {...item} />
          ))}
        </main>
      </div>
      
      <footer id="contact">
        <p>© 2024 Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
