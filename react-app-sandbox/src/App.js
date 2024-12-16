import { useState } from 'react';
import './App.css';

const skillsData = [
  {
    id: 1,
    title: "フロントエンド開発",
    skills: ["React", "TypeScript", "Next.js", "CSS/SCSS"],
    description: "モダンなフロントエンド開発技術を活用したUI/UX設計"
  },
  {
    id: 2,
    title: "バックエンド開発",
    skills: ["Node.js", "Express", "Python", "PostgreSQL"],
    description: "スケーラブルなバックエンドシステムの設計と実装"
  },
  {
    id: 3,
    title: "インフラストラクチャ",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    description: "クラウドインフラの構築と運用"
  }
];

function SkillAccordion({ title, skills, description, isOpen, onClick }) {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={onClick}>
        <h3>{title}</h3>
        <span className="accordion-icon">{isOpen ? '−' : '＋'}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{description}</p>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function App() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>エンジニアスキルセット</h1>
      </header>
      
      <main className="accordion-container">
        {skillsData.map((item) => (
          <SkillAccordion
            key={item.id}
            {...item}
            isOpen={openItems.has(item.id)}
            onClick={() => toggleItem(item.id)}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
