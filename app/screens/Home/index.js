import React, {Component} from 'react';
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

export default class Home extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.context.router.push({pathname: `/${this._input.value}`});
  }

  render() {
    return (
      <MainLayout>
        <Navigation />
        <section className="container home">
          <form
            className="form-inline"
            role="form"
            onSubmit={this.handleSubmit}
          >
            <div className="form-group">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter a GitHub user..."
                  className="form-control"
                  ref={ref => (this._input = ref)}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Go
            </button>
          </form>
        </section>
        <SocialLinks />
        <AnimatedSection>
          <div>Some animated content here</div>
        </AnimatedSection>
      </MainLayout>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
