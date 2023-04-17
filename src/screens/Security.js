/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SecurityOptionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}>
          <FontAwesome name="lock" size={35} color="#020024" />
          <Text style={styles.boxTitle}>Password</Text>
          <Text style={styles.boxDescription}>Change your password</Text>
        </View>
        <View style={styles.box}>
          <Ionicons name="finger-print" size={35} color="#020024" />
          <Text style={styles.boxTitle}>Fingerprint</Text>
          <Text style={styles.boxDescription}>Enable fingerprint unlock</Text>
        </View>
    
        <View style={styles.box}>
          <Ionicons name="md-notifications-outline" size={35} color="#020024" />
          <Text style={styles.boxTitle}>Notifications</Text>
          <Text style={styles.boxDescription}>
            Configure security notifications
          </Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="shield-check-outline"
            size={35}
            color="#020024"
          />
          <Text style={styles.boxTitle}>Security Checkup</Text>
          <Text style={styles.boxDescription}>
            Review your security settings
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    // flexDirection: 'row',
    justifyContent: 'space-evenly',

    alignItems: 'center',
    marginVertical: 20,
    padding:5,

  },
  box: {
    alignItems: 'center',
    padding: 20,
    margin:10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    // backgroundColor:'red'
    // borderWidth:10
  },
  boxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color:'#777'

  },
  boxDescription: {
    fontSize: 16,
    color: '#777',
    width:200,
  },
});

export default SecurityOptionsScreen;
