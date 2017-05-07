import React from 'react';
import ChildComponent from './ChildComponent.jsx';

class ParentComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }

        this.increaseNumber = this.increaseNumber.bind(this);

        console.log('Constructor function called, Component constructed from parent component');
    };

    increaseNumber() {
        this.setState({number: this.state.number + 1})
    }

    render() {
        return (
            <div>
                <button onClick = {this.increaseNumber}>INCREMENT</button>
                <ChildComponent number = {this.state.number}></ChildComponent>
            </div>
        );
    }
}

export default ParentComponent;