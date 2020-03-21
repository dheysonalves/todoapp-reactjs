import React, { Component } from 'react';

import Header from '../../components/template/Header';
import TodoList from './todoList';
import TodoForm from './todoForm';

export default class todo extends Component {
  render() {
    return (
    <div>
      <Header name="Todo" small="Sign up"/>
      <TodoForm />
      <TodoList />
    </div>
    );
  }
}
