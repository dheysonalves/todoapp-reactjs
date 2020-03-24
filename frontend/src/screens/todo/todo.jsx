import React, { Component } from 'react';
import axios from 'axios';

import Header from '../../components/template/Header';
import TodoList from './todoList';
import TodoForm from './todoForm';

const URL = 'http://localhost:3003/api/todos'

export default class todo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			description: '',
			list: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleApp = this.handleApp.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
		this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleClear = this.handleClear.bind(this);

		this.refresh();
	}

	handleChange(e) {
		this.setState({...this.state, description: e.target.value})
	}

	refresh(description = '') {
		const search = description ? `&description__regex=/${description}/` : '';
		axios.get(`${URL}?sort=-createdAt${search}`)
		.then(res => this.setState({...this.state, description, list: res.data }));
	}

		handleSearch(e) {
		this.refresh(this.state.description);
	}

	handleRemove(todo) {
		axios.delete(`${URL}/${todo._id}`)
					.then(() => this.refresh(this.state.description))
	}

	handleMarkAsDone(todo) {
		axios.put(`${URL}/${todo._id}`, {...todo, done: true})
					.then(() => this.refresh(this.state.description))
	}

	handleMarkAsPending(todo) {
		axios.put(`${URL}/${todo._id}`, {...todo, done: false})
		.then(() => this.refresh(this.state.description))
	}

	handleApp() {
		const description = this.state.description;
		axios.post(URL, {description})
		.then(() => this.refresh());
	}

	handleClear() {
		this.refresh();
	}

  render() {
    return (
    <div>
      <Header name="Todo" small="Sign up"/>
			<TodoForm
			handle={this.handleApp}
			description={this.state.description}
			handleChange={this.handleChange}
			handleSearch={this.handleSearch}
			handleClear={this.handleClear}
			/>
			<TodoList
			list={this.state.list}
			handleRemove={this.handleRemove} handleMarkAsDone={this.handleMarkAsDone}
			handleMarkAsPending={this.handleMarkAsPending}
			/>
    </div>
    );
  }
}
