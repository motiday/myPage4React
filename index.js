import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './app/screens/Home';
import User from './app/screens/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';

const Navigation = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg">My Portfolio</div>
        <div className="space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/about" className="text-gray-300 hover:text-white">About</a>
          <a href="/projects" className="text-gray-300 hover:text-white">Projects</a>
          <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);

const MainLayout = ({ children }) => (
  <div className="container mx-auto p-4">
    {children}
  </div>
);

const SocialLinks = () => (
  <div className="flex justify-center space-x-4 mt-4">
    <a href="https://twitter.com" className="text-gray-500 hover:text-gray-700">Twitter</a>
    <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-700">LinkedIn</a>
    <a href="https://github.com" className="text-gray-500 hover:text-gray-700">GitHub</a>
  </div>
);

const AnimatedSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

ReactDOM.render(
  <Router history={browserHistory}>
    <Navigation />
    <MainLayout>
      <Route path="/" component={Home} />
      <Route path="/:username" component={User} />
    </MainLayout>
    <SocialLinks />
    <AnimatedSection>
      <div>Some animated content here</div>
    </AnimatedSection>
  </Router>,
  document.getElementById('container')
);
