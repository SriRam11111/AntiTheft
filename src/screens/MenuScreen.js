/* eslint-disable prettier/prettier */
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View, Linking ,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';



const MenuScreen = () => {
    const navigation = useNavigation();
  return (
      <SafeAreaView style={styles.Container}>
          <LinearGradient
              colors={['#084ee9', '#87CEFA']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{ alignItems: 'center', height: '100%', width: '100%' }}
          >
              <View style={{alignSelf:'flex-start',marginLeft:20}}>
              <Ionicons name="chevron-back" size={35} color="#020024" style={{}} onPress={() => navigation.goBack()} />
              </View>

              <View style={styles.Container}>
                  <StatusBar backgroundColor={'#084ee9'} barStyle="light-content" />
                  <Image source={require('../images/dark-blue-background-designify.png')} style={{ width: 200, height: 200, borderRadius: 10, alignSelf: 'center' ,marginTop:10}} />
                  <Text style={styles.title}>ANTI-THEFT</Text>

              </View>
              <View style={styles.grid}>
                  <View style={styles.row}>
                      <View style={styles.box} >
                          <FontAwesome name="registered" size={75} color="#020024"  onPress={() => navigation.navigate('RegistrationScreen')} />
                      <Text style={{fontSize:15,color:'black'}}>Registration</Text>
                      </View>
                      <View style={styles.box} >
                          <MaterialCommunityIcons name="security" size={75} color="#020024" onPress={() => navigation.navigate('SecurityOptionsScreen')} />
                        <Text style={{ fontSize: 15, color: 'black' }}>Security</Text>
                        </View>
                  </View>
                  <View style={styles.row}>
                      <View style={styles.box} >
                          <Ionicons name="settings-outline" size={75} color="#020024" onPress={() =>{
                             try {Linking.openSettings();}
                          catch (error){
                            console.log(error);
                          }}} />
                          <Text style={{ fontSize: 15, color: 'black' }}>Settings</Text>
                          </View>
                      <View style={styles.box} >
                      <Ionicons name="location" size={75} color="#020024"  onPress={() => navigation.navigate('Location')} />
                          <Text style={{ fontSize: 15, color: 'black' }}>Location</Text>
                          </View>
                  </View>
              </View>
          </LinearGradient >
      </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        // backgroundColor: '#98b1e8',
    },
    title: {
        // width: 25,
        // height: 10,
        fontSize: 50,
        // color: 'white',
        fontWeight: 'bold',
    },
    grid: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        width:'100%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // alignSelf:'center',
        // backgroundColor:'black',
        width: '100%',
    },
    box: {
        height: 100,
        width: 100,
        // backgroundColor: '#2196F3',
        justifyContent:'center',
        alignItems:'center',
        margin: 10,
        
    }
});
