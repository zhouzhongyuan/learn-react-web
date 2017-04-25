import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SpecialText from './Text';
ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <SpecialText/>
    </div>,
    document.getElementById('root')
);
class App extends Component {
    render(){
        return(
            <div>
                <h1>Hello, world!</h1>
                <SpecialText/>
            </div>
        );
    }
}
AppRegistry.registerComponent('App', () => ReactNativeWeb);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });