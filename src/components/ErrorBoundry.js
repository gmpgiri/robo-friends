import React from 'react';
import { render } from '@testing-library/react';

class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false
        }        
    }


    componentDidCatch(error, info) {
        this.setState({ hasError : true });
    }
    render(){
        if(this.state.hasError) {
            return <h1>You're not supposed to see this error!</h1>
        }
        return this.props.children;
    }
}
export default ErrorBoundry;