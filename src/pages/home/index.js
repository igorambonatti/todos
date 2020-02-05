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
      <table>
        <tr>
          <th>userID</th>
          <th>Id</th>
          <th>Title</th>
        </tr>
        {todos.map(item => (
          <tr key={item.id}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}}</td>
          </tr>
        ))}
      </table>
      <Content />
    </Container>
  );
}
