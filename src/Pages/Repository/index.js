import React, { Component } from 'react';
import { FaGithubAlt } from 'react-icons/fa';

import api from '../../services/api';

import { Container } from './styles';

export default class Repository extends Component {
  async componentDidMount() {
    const state = {
      repository: {},
      issues: [],
      loading: true,
    };
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [reposirory, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      reposirory: reposirory.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { loading, issues, repository } = this.state;
    return (
      <Container>
        <h1>Repo</h1>
      </Container>
    );
  }
}
