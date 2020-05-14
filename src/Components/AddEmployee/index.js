import React, { useState, useEffect } from 'react';
import { 
    KeyboardAvoidingView, 
    View,
    Text, 
    Image,
    ScrollView, 
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
import { setEmployeesList } from '../../Redux/Actions/employee';
import { NAME, MAIL, PHONE, BLACK } from '../../Utils/constant';

const avatrOptions = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

const AddEmployee = ({ navigation }) => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ image, setImage ] = useState('');
    const [ showImageText, setShowImageText ] = useState('');
    const [ currentLongitude, setCurrentLongitude ] = useState('23.87');
    const [ currentLatitude, setCurrentLatitude ] = useState('54.21');
    const dispatch = useDispatch();
    useEffect(()=>{
        // permissionView();
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
        Geolocation.getCurrentPosition(
            (position) => {
                const currentLongitude = JSON.stringify(position.coords.longitude);
                const currentLatitude = JSON.stringify(position.coords.latitude);
                setCurrentLatitude(currentLatitude);
                setCurrentLongitude(currentLongitude);
            },
            // (error) => alert(error.message),
            // { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
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
                name: name,
                email: email,
                phone: phone,
                address: address,
                long: currentLongitude,
                lati: currentLatitude
            }
            dispatch(setEmployeesList());
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
        <KeyboardAvoidingView style={Style.baseColor}>
            <Statusbar/>
            <ScrollView showsVerticalScrollIndicator={false}>
                {_title()}
                {_formsDetails()}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default AddEmployee;