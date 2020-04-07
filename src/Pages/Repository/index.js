/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaSortAmountDown } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssueLIst, FilterList, Pagination } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filter: 'all',
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: this.state.filter,
          per_page: 5,
          page: this.state.page,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.filter !== this.state.filter) {
      this.componentDidMount();
    }
    if (prevState.page !== this.state.filter) {
      this.componentDidMount();
    }
  }

  handleFIlter = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { loading, issues, repository, filter } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/"> Voltar aos repositórios </Link>

          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <FilterList>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="SelectFIlter">
            <FaSortAmountDown size={14} />
          </label>
          <select
            value={filter}
            onChange={this.handleFIlter}
            name="SelectFIlter"
            id="SelectFIlter"
          >
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </FilterList>

        <IssueLIst>
          {issues.map((issue) => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}> {issue.title} </a>
                  {issue.labels.map((label) => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueLIst>
        <Pagination>
          <button
            type="button"
            onClick={() =>
              this.setState({
                page: this.state.page > 1 ? this.state.page - 1 : 1,
              })
            }
          >
            Voltar
          </button>
          <span>Página {this.state.page}</span>
          <button
            type="button"
            onClick={() => this.setState({ page: this.state.page + 1 })}
          >
            Próximo
          </button>
        </Pagination>
      </Container>
    );
  }
}
