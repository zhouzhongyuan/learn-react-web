import React , { Component } from 'react';

const ReactNative = require('react-native');
const { Button } = ReactNative;

class WrapButton extends Component {
    render() {
        return (
            <Button
                title="Learn More"
            />
        );
    }
}
export default WrapButton;