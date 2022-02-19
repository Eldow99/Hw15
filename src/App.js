import Input from './components/Input'
import List from './components/List'
import './App.css'

import React, { Component } from 'react'

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			todos: [],
		}
	}
	onGetData(value) {
		const data = [...this.state.todos]
		data.push(value)
		this.setState({ todos: data })
		// console.log(this.state.todos)
	}
	delHandler(id) {
		const todos = [...this.state.todos]
		const updatedTodos = todos.filter((el) => {
			return el.id !== id
		})
		this.setState({
			todos: updatedTodos,
		})
	}
	render() {
		return (
			<div className='App'>
				<Input onGetData={this.onGetData.bind(this)} />
				<List
					onDel={this.delHandler.bind(this)}
					data={this.state.todos}
				/>
			</div>
		)
	}
}
