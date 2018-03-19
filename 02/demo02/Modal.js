import React, { Component } from 'react';
import { Modal, Button , Text, TouchableHighlight, View } from 'react-native/src/';

class ModalExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
        }
        this.setModalVisible = this.setModalVisible.bind(this);
    }

    setModalVisible(visible) {
        console.log(visible);
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={{display:'flex',flex:1}}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <View>
                            <Text>Modal!</Text>
                        </View>
                    </View>
                </Modal>
                <Button onPress={() => {
                    console.log('Press');
                    this.setModalVisible(true)
                }} title="dialog"/>
            </View>
        );
    }
}
export default ModalExample;