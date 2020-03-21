import React, { Component } from 'react';

import Header from '../../components/template/Header';
import TodoList from './todoList';
import TodoForm from './todoForm';

export default class todo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			description: '',
			list: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleApp = this.handleApp.bind(this);
	}

	handleChange(e) {
		this.setState({...this.state, description: e.target.value})
	}

	handleApp() {
		console.log(this);
	}

  render() {
    return (
    <div>
      <Header name="Todo" small="Sign up"/>
      <TodoForm handle={this.handleApp} description={this.state.description} handleChange={this.handleChange}/>
      <TodoList />
    </div>
    );
  }
}
