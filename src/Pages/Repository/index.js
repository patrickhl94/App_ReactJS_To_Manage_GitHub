import React, { Component } from 'react';
import { FaGithubAlt } from 'react-icons/fa';

import api from '../../services/api';

import { Container } from './styles';

export default class Repository extends Component {
  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [reposirory, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}`),
    ]);
    console.log(reposirory.data);
    console.log(issues.data);
  }

  render() {
    return (
      <Container>
        <h1>Repo</h1>
      </Container>
    );
  }
}
