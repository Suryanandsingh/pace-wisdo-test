import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Style from '../Style';
import Statusbar from '../Statusbar';

const Splash = ({ navigation }) => {
    useEffect(()=>{
       setTimeout(() => {
           navigation.navigate('Dashboard');
       }, 1000);
    }, []);
    return(
        <View style={[Style.center, Style.baseColor]} >
            <Statusbar/>
            <Text 
                style={{fontSize: 40, letterSpacing: 2, fontWeight:'500'}} >
                    {'Welcome'}
            </Text>
        </View>
    )
}

export default Splash;