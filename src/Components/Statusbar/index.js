import React from 'react';
import { StatusBar, Platform } from 'react-native';

const Statusbar = ({ }) =>{
    if(Platform.OS ==='android'){
        return <StatusBar backgroundColor="transparent" barStyle="dark-content"/>
    }else{
        return null
    }
}

export default Statusbar;