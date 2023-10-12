import { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return <h1>Count: {this.props.counter}</h1>;
    }
}

export default ClassComponent;