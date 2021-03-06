import React, { Component } from 'react';
import '../App.css';


class FetchForm extends Component {

    input = null

    submit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.input.value)
    };

    render() {
        return (
            <form onSubmit={this.submit}>
                <input type="number" defaultValue={10} ref={element => this.input = element} />
                <input type="submit" value="Fetch Data" />
            </form>
        );
    }
}

export default FetchForm;