import React, { Component } from 'react'

export default class Input extends Component {
	constructor() {
		super()
		this.state = {
			todo: '',
		}
	}
	addTodoHandler(event) {
		this.setState({ todo: event.target.value })
	}
	addTodoSubmit(event) {
		event.preventDefault()
		if (this.state.todo === '') return
		let data = {
			id: Math.random().toString(),
			todo: this.state.todo,
			completed: false,
		}
		this.props.onGetData(data)

		this.setState({ todo: '' })
	}
	render() {
		return (
			<form onSubmit={this.addTodoSubmit.bind(this)}>
				<label>TODO </label>
				<input
					value={this.state.todo}
					onChange={this.addTodoHandler.bind(this)}
				/>
				<button type='submit'>OK</button>
			</form>
		)
	}
}
