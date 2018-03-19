import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SpecialText from './Text';
import Modal from './Modal';
import {AppRegistry} from 'react-native';

function App() {
    return(
        <div>
            <h1>Hello, world!</h1>
            <SpecialText/>
            <Modal/>
        </div>
    );
}
// ReactDOM.render(
//     App(),
//     document.getElementById('root')
// );
AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });