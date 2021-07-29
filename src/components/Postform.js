import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class Postform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();
		const post = {
			title: this.state.title,
			body: this.state.title,
		};
		//call action

		this.props.createPost(post);
	}

	render() {
		return (
			<div>
				<h1>add post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title:</label> <br />
						<input
							type="text"
							name="title"
							onChange={this.onChange}
							value={this.state.title}
						/>
					</div>
					<div>
						<label>body:</label> <br />
						<textarea
							name="body"
							onChange={this.onChange}
							value={this.state.body}
						></textarea>
					</div>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

Postform.propsTypes = {
	createPost: PropTypes.func.isrequired,
};



export default connect(null, { createPost })(Postform);
