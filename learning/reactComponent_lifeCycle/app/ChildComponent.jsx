import React from 'react';

class ChildComponent extends React.Component {

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {

        if(!Object.is(newProps.number, this.props.number)){
            console.log('Component SHOULD UPDATE!');
            return true;
        }

        console.log('Component SHOULDN\'T UPDATE!');
        return false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    render() {
        console.log('Component is Rendering!');
        return (
            <div>
                <h3>{this.props.number}</h3>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
}

export default ChildComponent;