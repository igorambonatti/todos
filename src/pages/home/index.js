import React, { useEffect, useState } from 'react';

import { Container, Content } from './styles';

import api from '../../services/api';

export default function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function Load() {
      const response = await api.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      setTodos(response.data);
    }
    Load();
  }, []);
  return (
    <Container>
      {console.log(todos)}
      <Content />
    </Container>
  );
}
