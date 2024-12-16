import React, {Component, PropTypes} from 'react';
import { motion } from 'framer-motion';
import {getUserData} from '../../../utils/github-api'
import ProfileStat from './ProfileStat'

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {user: {}, orgs: []}
  }

  getUser() {
    const {username} = this.props
    getUserData(username)
      .then(({user, orgs}) => {
        this.setState({user, orgs});
      });
  }

  componentWillMount() {
    this.getUser();
  }

  render() {
    const {user, orgs} = this.state;
    return (
      <div>
        <section className="user border-bottom">
          <img
            src={user.avatar_url}
            className="img-rounded img-responsive"
            alt="User Avatar"
          />
          <h2>{user.name}</h2>
          <h5>{user.login}</h5>
        </section>
        <section className="stats border-bottom">
          <ProfileStat value={user.followers} label="followers" />
          <ProfileStat value={user.public_repos} label="repositories" />
          <ProfileStat value={user.following} label="following" />
        </section>
        <section className="orgs">
          <h4>Organizations</h4>
          {orgs.map(org => (
            <img
              key={org.id}
              src={org.avatar_url}
              alt="Organization Avatar"
              data-tip={org.login}
            />
          ))}
        </section>
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
    );
  }
}

Profile.propTypes = {
  username: PropTypes.string.isRequired
}
