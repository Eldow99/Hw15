import React, { Component } from 'react'

export default class List extends Component {
	render() {
		return (
			<ul>
				{this.props.data.map((el) => (
					<li key={el.id}>
						{el.todo}{' '}
						<button onClick={() => this.props.onDel(el.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		)
	}
}
