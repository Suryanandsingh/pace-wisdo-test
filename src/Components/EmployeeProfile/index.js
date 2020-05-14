import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Statusbar from '../Statusbar';
import Style from '../Style';

const EmployeeProfile = ({ route, navigation }) =>{
    const [employeeDetails, setEmployeeDetails] = useState(route.params.employee);
    return(
        <SafeAreaView style={Style.baseColor} >
            <Statusbar/>
            <ScrollView style={{padding: 9}} showsVerticalScrollIndicator={false}>
                <View style={Style.center}>
                    <Image source={{uri:employeeDetails.avatar}} style={Style.employeeDetailsImg}/>
                </View>
                <View style={{padding: 3}} >
                    <Text style={Style.titleText} >{employeeDetails.name}</Text>
                    <Text style={Style.text}>{employeeDetails.email}</Text>
                    <Text style={Style.text}>{employeeDetails.phone}</Text>
                    <Text style={Style.text}>{employeeDetails.address}</Text>
                </View>
                {/* <MapView
                    style={{width: '100%', height: '50%'}}
                    region={{
                        latitude: currentLatitude,
                        longitude: currentLongitude,
                        // latitudeDelta: currentLongitude/width,
                        // longitudeDelta: currentLongitude/height,
                    }}
                /> */}
            </ScrollView>
        </SafeAreaView>
    )
}
export default EmployeeProfile;