/* eslint-disable prettier/prettier */

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { responsiveHeight } from 'react-native-responsive-dimensions';


const Homescreen = () => {

    const navigation = useNavigation();
    useEffect(() => {
            setTimeout(() => {
                navigation.navigate('MenuScreen');
            }, 3000);
    }, []);


    return (
        <SafeAreaView style={styles.Container}>
        <LinearGradient
                colors={['#084ee9', '#87CEFA']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ marginHorizontal: 15, padding: 10, alignItems: 'center',height:'100%',width:'100%' }}
        >
                <View style={styles.Container}>
                    <StatusBar backgroundColor={'#084ee9'} barStyle="light-content" />
            <Image source={require('../src/images/dark-blue-background-designify.png')} style={{  width: 200, height: 200 ,borderRadius:10,alignSelf:'center'}}/>
            <Text style={styles.title}>zomato</Text>
        </View>
    </LinearGradient >
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        // backgroundColor: '#98b1e8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        width: 25,
        height: 10,
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
    },
    // sectionTitle: {
    //   fontSize: 24,
    //   fontWeight: '600',
    // },
    // sectionDescription: {
    //   marginTop: 8,
    //   fontSize: 18,
    //   fontWeight: '400',
    // },
    // highlight: {
    //   fontWeight: '700',
    // },
});

export default Homescreen;
