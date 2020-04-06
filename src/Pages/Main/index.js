import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import api from '../../services/api';

import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    borderColor: true,
  };

  // Carregar os dados do localstorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salvar os dados do localstorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== this.state.repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo } = this.state;

    try {
      /**
       * SE HOUVER ERRO, ELE CRIA O ERRO SE NÃO CONTINUA A TREAD
       */
      if (this.state.borderColor) {
        throw new Error('Repositório duplicado');
      }

      const resp = await api.get(`repos/${newRepo}`);

      const data = {
        name: resp.data.full_name,
      };

      this.setState({
        // eslint-disable-next-line react/no-access-state-in-setstate
        repositories: [...this.state.repositories, data],
        newRepo: '',
        loading: false,
        borderColor: true,
      });
    } catch (error) {
      this.setState({ loading: false, borderColor: false });
    }
  };

  render() {
    const { repositories, loading, newRepo } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form borderColor={this.state.borderColor} onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adcionar Repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {this.state.loading ? (
              <FaSpinner color="#eee" size={14} />
            ) : (
              <FaPlus color="#eee" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map((repository) => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
