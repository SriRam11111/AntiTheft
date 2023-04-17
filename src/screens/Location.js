/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, { useState, useEffect } from 'react';
import Geocoder from 'react-native-geocoder-reborn';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
// import Placesearch from 'react-native-placesearch';

const Location = () => {
    const [location,setLocation] = useState('');

    async function requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission',
                    message: 'This app requires access to your location.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Location permission granted');
            } else {
                console.log('Location permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }
    useEffect(() => {
        requestLocationPermission();
        Geolocation.getCurrentPosition(
            position => {
                const { longitude, latitude } = position.coords;
                console.log('Longitude: ' + longitude);
                console.log('Latitude: ' + latitude);
                // using Geocoder from here to
                var NY = {
                    lat: latitude,
                    lng: longitude,
                };
                Geocoder.geocodePosition(NY).then(res => {
                    // res is an Array of geocoding object (see below)
                    setLocation(res[0]);
                }) //here
                    .catch(err => console.log(err));
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        console.log('location ====', location);
    }, []);
  return (
    //  <Placesearch 
    // apikey="AIzaSyC7vpG0k0WSuE3Y7dFO8f_SJ6_4ZgEJlR4" // required *
    // SelectedAddress={(data)=>console.log(data)} // required *
    // onClose={(data)=>console.log(data)}
    // country ="country code" //optional
    // coordinate={true} //optional
    // removeImg = {true} //optional
    // StatusBarColor="Your color code" //option *only for android
    // StatusBarStyle="" //option  default "dark-content" *only for android
    // ContainerBackgroundColor="Your color code" // optional
    // InputContainer = {{'your style goes here'}} //optional
    // MainContainer = {{'your style goes here'}} //optional
    // ListStyle = {{'your style goes here'}} //optional
    // ListTextStyle = {{'your style goes here'}} //optional
    // ListIconStyle = {{'your style goes here'}} //optional
    // ImgStyle = {{'your style goes here'}} //optional
    // Img = {{'your style goes here'}} //optional
    // textInput = {{'your style goes here'}} //optional
    // placeHolder = {{'type any textInput placeholder as you like'}} //optional
    // />
      <View style={styles.Container}>
      <Text>Location</Text>
              <Text style={styles.title}>Address</Text>
                  <Text style={styles.text}>{location.formattedAddress}
              </Text>
          <Text style={{ fontSize: 15, color: 'black' }}>State :{location.adminArea}</Text>

          <Text style={{ fontSize: 15, color: 'black' }}>country : {location.country}</Text>
          <Text style={{ fontSize: 15, color: 'black' }}>postalCode :{location.postalCode}</Text>
    </View>

  );
};

export default Location;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        // width:'80%',
        padding:20,
        // backgroundColor: '#98b1e8',
        backgroundColor: 'white',
        borderRadius: 5,
    },
    title: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: 'black',
    },
});
