import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors, Font } from '../../constants'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomTextInput, Button } from '../../components'
import { useNavigation } from '@react-navigation/native'

const bg_image  = require('../../assets/images/signup2.png')
const { width } = Dimensions.get('window');

export default function SignUp() {

  const navigation              = useNavigation();
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
        <View >
          <Image source={bg_image} style={styles.image} contentFit="contain" transition={500}/>
          <View>
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.subTitle}>Create your account</Text>
          </View>

          <CustomTextInput placeholder='Name' onChangeText={setName}/>
          <CustomTextInput placeholder='Email' keyboardType='email-address' onChangeText={setEmail}/>
          <CustomTextInput placeholder='Password' onChangeText={setPassword} secureTextEntry={true} isShowIcon={true}/>

          <Button onClicked={() => console.log('sign up pressed')} style={{marginBottom: 10}}>
            Sign up
          </Button>

          <TouchableOpacity onPress={() => navigation.navigate('signin')}>
            <Text style={styles.forgot}>Log in</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: 200,
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontFamily: Font.medium,
    color: Colors.COLOR_1,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 16,
    fontFamily: Font.regular,
    color: Colors.COLOR_2,
    textAlign: 'center'
  },
  forgot:{
    textAlign: 'center',
    fontFamily: Font.regular,
    fontSize: 15,
    color: Colors.COLOR_1,
    marginVertical: 10
  }
})