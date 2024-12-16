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

function SkillSection({ title, skills, description }) {
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
        <button className="learn-more">詳細を見る</button>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <header className="hero-section">
        <div className="logo">LOGO</div>
        <nav>
          <a href="#profile">プロフィール</a>
          <a href="#skills">スキル</a>
          <a href="#contact">お問い合わせ</a>
        </nav>
        <h1>プロフィール</h1>
        <button className="cta-button">詳細を見る</button>
      </header>
      
      <main>
        {skillsData.map((item) => (
          <SkillSection key={item.id} {...item} />
        ))}
      </main>
      
      <footer>
        <p>© 2024 Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
