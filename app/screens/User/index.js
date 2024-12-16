import React, {Component, PropTypes} from 'react';
import Profile from './components/Profile'
import RepoFilter from './components/RepoFilter'
import RepoList from './components/RepoList'
import { motion } from 'framer-motion';

export default class User extends Component {
  constructor() {
    super()
    this.state = {filter: ''}
  }

  handleFilterUpdate = (filter) => {
    this.setState({filter})
  }

  render() {
    const {username} = this.props.params
    const {filter} = this.state
    return (
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-2">
            <Profile username={username} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-4"
            >
              <h3>Social Links</h3>
              <ul>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">GitHub</a></li>
              </ul>
            </motion.div>
          </div>
          <div className="md:w-2/3 p-2">
            <h3>Repositories</h3>
            <RepoFilter onUpdate={this.handleFilterUpdate} />
            <RepoList filter={filter} username={username} />
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  params: PropTypes.shape({
    username: PropTypes.string,
  }),
}
