import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SpecialText from './Text';
import Modal from './Modal';
ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <SpecialText/>
        <Modal/>
    </div>,
    document.getElementById('root')
);