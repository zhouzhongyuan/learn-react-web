import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

class ModalExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
        }
        this.setModalVisible = this.setModalVisible.bind(this);
    }



    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View style={{marginTop: 22}}>
                        <Text>Modal!</Text>
                    </View>
                </Modal>

                <TouchableHighlight onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>

            </View>
        );
    }
}
export default ModalExample;