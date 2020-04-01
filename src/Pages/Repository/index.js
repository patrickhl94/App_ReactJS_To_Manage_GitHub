import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';

import { Container } from './styles';

export default function Repository() {
  return (
    <Container>
      <h1>
        <FaGithubAlt /> Repositórios
      </h1>
    </Container>
  );
}
