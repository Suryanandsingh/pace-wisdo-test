import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import Style from '../Style';

const EmployeeCard = ({ navigation, employees }) => {
    return employees.map((emp, index)=>{
        return(
            <TouchableOpacity 
                activeOpacity={0.8}
                style={Style.employeeListView} 
                key={index}
                onPress={()=>{
                    navigation.navigate('EmployeeProfile', { employee: emp });
                }}
            >
                <Image source={{uri: emp.avatar}} style={Style.employeeAvatar}/>
                <View style={{marginLeft: 7}} >
                    <Text style={{fontSize: 18, fontWeight:'600'}} >{emp.name}</Text>
                    <Text style={{fontWeight:'400'}}>{emp.email}</Text>
                </View>
            </TouchableOpacity>
        )
    })
}

export default EmployeeCard;