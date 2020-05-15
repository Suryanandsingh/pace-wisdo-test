import React from 'react';
import { Modal, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Style from '../Style';

const Toast = ({ color }) => {
    const toast = useSelector(state=>state.Loader.toast)
    const toastMsg = useSelector(state=>state.Loader.toastMsg);
    return(
        <Modal
            transparent={true}
            visible={toast}
            onRequestClose={()=>{
                console.log('close modal')
            }}
            animationType="slide"
        >
            <View style={Style.ToastStyle} >
                <Text style={[Style.text, {color: color}]} >{toastMsg}</Text>
            </View>
        </Modal>
    )
}
export default Toast;