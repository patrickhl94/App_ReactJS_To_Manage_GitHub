import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo } = this.state;

    const resp = await api.get(`repos/${newRepo}`);

    const data = {
      name: resp.data.full_name,
    };

    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      repositories: [...this.state.repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adcionar Repositório"
            value={this.state.newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={this.state.loading}>
            {this.state.loading ? (
              <FaSpinner color="#eee" size={14} />
            ) : (
              <FaPlus color="#eee" size={14} />
            )}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
