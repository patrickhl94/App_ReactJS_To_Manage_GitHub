import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adcionar Repositório" />

        <SubmitButton dissabled>
          <FaPlus />
        </SubmitButton>
      </Form>
    </Container>
  );
}
