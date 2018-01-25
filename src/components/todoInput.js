import React from 'react';
import './todoInput.css';

export default class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.state.value.length > 0) {
            this.props.addTodo(this.state.value);
            this.setState({value: ''});
        }
    }
    render() {
        return (
            <form action="" onSubmit={(event) => this.onSubmit(event)}>
                <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                <button className="btn" type="submit"> Submit</button>

            </form>
        );
    }
}

