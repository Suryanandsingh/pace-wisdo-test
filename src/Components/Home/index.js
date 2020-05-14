import React, { useEffect, Suspense } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Style from '../Style';
import { BLACK } from '../../Utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesList } from '../../Redux/Actions/employee';
import Statusbar from '../Statusbar';

const EmployeeCard = React.lazy(()=>import('./employeeCard'))

const Home = ({ navigation }) => {
    const employees = useSelector(state => state.Employee.employees);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getEmployeesList());
    }, [])
    function _title(){
        return(
            <View style={Style.titleTextView} >
                <Text style={Style.titleText}>{`Employees`}</Text>
            </View>
        )
    }
    function _addEmployeeButton(){
        return(
            <TouchableOpacity
                activeOpacity={0.6}
                style={Style.addEmployeeButtonView} 
                onPress={()=>{
                    navigation.navigate('AddEmployee')
                }}
            >
                <Text style={{fontSize: 24, color: BLACK}} >+</Text>
            </TouchableOpacity>
        )
    }
    function _employeeListView(){
        return(
            <Suspense fallback={
                <Text style={[Style.titleText, {fontSize: 25}]}>Loading...</Text>
            }>
                <EmployeeCard navigation={navigation} employees={employees}/>
            </Suspense>
        )
    }
    return(
        <SafeAreaView style={Style.baseColor} >
            <Statusbar/>
            <ScrollView showsVerticalScrollIndicator={false}>
                {_title()}
                {_employeeListView()}
            </ScrollView>
            {_addEmployeeButton()}
        </SafeAreaView>
    )
}

export default Home;