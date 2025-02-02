import React, { useState, useEffect } from 'react';
import { 
    KeyboardAvoidingView, 
    View,
    Text, 
    TextInput, 
    TouchableOpacity,
    Platform,
    PermissionsAndroid
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Geolocation from  '@react-native-community/geolocation'
import Style from '../Style';
import Statusbar from '../Statusbar';
import { setEmployeesList, toggleEventEmployee, getEmployeesList } from '../../Redux/Actions/employee';
import { NAME, MAIL, PHONE, BLACK } from '../../Utils/constant';
import Toast from '../Toast';

const avatrOptions = {
    title: 'Select Avatar',
};

const AddEmployee = ({ navigation }) => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ image, setImage ] = useState('');
    const [ showImageText, setShowImageText ] = useState('');
    const [ currentLongitude, setCurrentLongitude ] = useState('');
    const [ currentLatitude, setCurrentLatitude ] = useState('');
    const dispatch = useDispatch();
    const isEventEmployee = useSelector(state=>state.Employee.isEventEmployee);
    const toast = useSelector(state=>state.Loader.toast);
    if(isEventEmployee && !toast){
        dispatch(getEmployeesList());
        navigation.navigate('Home');
    }
    useEffect(()=>{
        try {
            permissionView();
        } catch (err) {
            console.log(err)
        }
        return()=>{
            dispatch(toggleEventEmployee());
        }
    }, []);
    function permissionView(){
        if(Platform.OS === 'ios'){
            callLocation();
        }else{
            async function requestLocationPermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
                    'title': 'Location Access Required',
                    'message': 'This App needs to Access your location'
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    callLocation();
                } else {
                    alert("Permission Denied");
                }
            } catch (err) {
                console.log(err)
            }
        }
        requestLocationPermission();
        }    
    }
    function callLocation(){
        try{
            Geolocation.getCurrentPosition(
                (position) => {
                    const currentLongitude = JSON.stringify(position.coords.longitude);
                    const currentLatitude = JSON.stringify(position.coords.latitude);
                    setCurrentLatitude(currentLatitude);
                    setCurrentLongitude(currentLongitude);
                },
            )
        }catch(err){
            console.log('error', err)
        }
    }
    function _title(){
        return(
            <View style={Style.titleTextView} >
                <Text style={[Style.titleText, { fontSize: 28 }]}>{`Add the employee`}</Text>
            </View>
        )
    }
    function _getImage() {
        ImagePicker.showImagePicker(avatrOptions, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              setImage(response.uri)
              var peice = `${response.uri}`.split('/')
              setShowImageText(peice[peice.length-1])
            }
          });
    }
    function _onSubmit() {
        if(!NAME.test(name)){
            alert('Name should be atleast 3 char.')
        }else if(!MAIL.test(email)){
            alert('Invalid email')
        }else if(!PHONE.test(phone)){
            alert('Invalid contact number')
        }else if(address.length<5){
            alert('Invalid address')
        }else if(!image){
            alert('Select Profile image')
        }else{
            var data = {
                id: 12,
                name: name,
                email: email,
                phone: phone,
                address: address,
                long: currentLongitude,
                lati: currentLatitude
            }
            dispatch(setEmployeesList(data));
        }
    }
    function _formsDetails() {
        return(
            <View style={Style.textInputFormView} >
                <TextInput
                    placeholder="Name"
                    underlineColorAndroid="transparent"
                    style={Style.textInput}
                    keyboardType="default"
                    onChangeText={(text)=>setName(text)}
                    value={name}
                />
                <TextInput
                    placeholder="Email"
                    underlineColorAndroid="transparent"
                    style={Style.textInput}
                    keyboardType="email-address"
                    onChangeText={(text)=>setEmail(text)}
                    value={email}
                />
                <TextInput
                    placeholder="Phone"
                    underlineColorAndroid="transparent"
                    style={Style.textInput}
                    keyboardType="number-pad"
                    onChangeText={(text)=>setPhone(text)}
                    value={phone}
                />
                <TextInput
                    placeholder="Adress"
                    underlineColorAndroid="transparent"
                    style={Style.textInput}
                    keyboardType="default"
                    onChangeText={(text)=>setAddress(text)}
                    value={address}
                />
                
                <View style={Style.uploadImageView} >
                    <Text style={{fontSize: 18, color: BLACK}} >Image</Text>
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        style={{padding: 10, paddingHorizontal: 25 ,backgroundColor:'#f2f2f2'}} 
                        onPress={()=>{
                            _getImage()
                        }}
                    >
                        <Text>Choose</Text>
                    </TouchableOpacity>
                </View>
                <Text 
                    style={{ width:'100%', textAlign: 'right', paddingRight: 10}}>
                        {showImageText}
                </Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={Style.Submit}
                    onPress={()=>{_onSubmit()}}
                >
                    <Text style={{fontSize: 17, letterSpacing: 1, fontWeight:'500'}} >Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return(
        <KeyboardAvoidingView  style={Style.baseColor}>
            <Statusbar/>
            <>
                {_title()}
                {_formsDetails()}
                <Toast color={"green"}/>
            </>
        </KeyboardAvoidingView>
    )
}
export default AddEmployee;