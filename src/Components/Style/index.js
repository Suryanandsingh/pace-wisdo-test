import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { BLACK, LIGHT_COLOR } from '../../Utils/constant';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    center:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    baseColor:{
        flex:1,
        backgroundColor: 'white'
    },
    titleTextView:{
        marginVertical: 12,
        paddingLeft: 25,
        paddingHorizontal: 5,
    },
    titleText:{
        fontSize: width/12,
        fontWeight:'500',
        letterSpacing:1,
        color: BLACK
    },
    addEmployeeButtonView:{
        position: 'absolute',
        bottom: width/9,
        right: width/10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        width: width/7.5, 
        height: width/7.5,
        borderRadius: width/15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    employeeListView:{
        flexDirection:'row',
        backgroundColor:'white',
        padding: 10,
        marginVertical: 3,
        alignItems:'center'
    },
    employeeAvatar:{
        width: width/7,
        height: width/7,
        borderRadius: width/14,
        resizeMode: 'contain'
    },
    employeeDetailsImg:{
        width: width-20,
        height: width-20,
        resizeMode: 'contain',
        ...Platform.select({
            ios:{
                borderRadius: width/12
            },
            android:{
                borderRadius: 3
            }
        })
    },
    text:{
        fontSize: 16,
        fontWeight: '500',
        color: BLACK
    },
    textInputFormView:{
        padding: 10,
        alignItems:'center'
    },
    textInput:{
        backgroundColor: '#f8f8f8',
        width: '100%',
        height: '17%',
        padding: 7,
        paddingHorizontal: 10,
        fontSize: 18,
        color: BLACK,
        marginVertical: 4,
        borderRadius: 3
    },
    uploadImageView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding: 7,
        paddingHorizontal: 10,
        width:'100%',
        height:'15%'
    },
    Submit:{
        backgroundColor: '#f2f2f2',
        width: '50%',
        height: '15%',
        justifyContent:'center',
        alignItems:'center',
        marginVertical: 15,
        borderRadius: 3,
        ...Platform.select({
            ios:{
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 1,
                shadowRadius: 1
            },
            android:{
                elevation: 4
            }
        })
    }

})