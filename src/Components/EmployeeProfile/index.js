import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import Statusbar from '../Statusbar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee, toggleEventEmployee, getEmployeesList } from '../../Redux/Actions/employee';
import Style from '../Style';
import Toast from '../Toast';

const EmployeeProfile = ({ route, navigation }) =>{
    const [employeeDetails, setEmployeeDetails] = useState(route.params.employee);
    const isEventEmployee = useSelector(state=>state.Employee.isEventEmployee);
    const toast = useSelector(state=>state.Loader.toast);
    const dispatch = useDispatch();
    useEffect(()=>{
        return()=>{
            dispatch(toggleEventEmployee());
        }
    }, [])
    if(isEventEmployee && !toast){
        dispatch(getEmployeesList());
        navigation.navigate('Home');
    }
    return(
        <SafeAreaView style={Style.baseColor} >
            <Statusbar/>
            <Toast color="red"/>
            <ScrollView style={{padding: 9}} showsVerticalScrollIndicator={false}>
                <View style={Style.center}>
                    <Image source={{uri:employeeDetails.avatar}} style={Style.employeeDetailsImg}/>
                </View>
                <View style={{padding: 3}} >
                    <Text style={Style.titleText} >{employeeDetails.name}</Text>
                    <Text style={Style.text}>{employeeDetails.email}</Text>
                    <Text style={Style.text}>{employeeDetails.phone}</Text>
                    <Text style={Style.text}>{`Address: ${employeeDetails.address}`}</Text>
                    <Text style={Style.text}>{`Longitude: ${employeeDetails.long}`}</Text>
                    <Text style={Style.text}>{`Latitude: ${employeeDetails.lati}`}</Text>
                </View>
            </ScrollView>
            <TouchableOpacity
                activeOpacity={0.6}
                style={Style.deleteView}
                onPress={()=>{
                    dispatch(deleteEmployee(employeeDetails.id))
                }}
            >
                <Text style={[Style.text, {color:'white'}]} >Delete</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default EmployeeProfile;