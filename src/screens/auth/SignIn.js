import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors, Font } from '../../constants'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { CustomTextInput, Button } from '../../components'
import { useNavigation } from '@react-navigation/native'

const bg_image  = require('../../assets/images/login2.png')
const { width } = Dimensions.get('window');

export default function SignIn() {

  const navigation              = useNavigation();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView >
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View >
          <Image source={bg_image} style={styles.image} contentFit="contain" transition={500}/>
          <View>
            <Text style={styles.title}>Log in</Text>
            <Text style={styles.subTitle}>Login with social networks</Text>
            <View style={styles.socialBtns}>
              <Entypo name="facebook" size={40} color={Colors.COLOR_6} />
              <Entypo name="instagram" size={40} color={Colors.COLOR_6} />
              <AntDesign name="googleplus" size={40} color={Colors.COLOR_6} />
            </View>
          </View>

          <CustomTextInput placeholder='Email' keyboardType='email-address' onChangeText={setEmail}/>
          <CustomTextInput placeholder='Password' onChangeText={setPassword} secureTextEntry={true} isShowIcon={true}/>

          <Text style={styles.forgot}>Forgot Password?</Text>

          <Button onClicked={() => console.log('Login pressed')} style={{marginBottom: 10}}>
            Log in
          </Button>

          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.forgot}>Sign up</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: width * 0.8,
    height: 250,
    marginBottom: 30
  },
  title: {
    fontSize: 24,
    fontFamily: Font.medium,
    color: Colors.COLOR_1,
    textAlign: 'center',
    marginBottom: 10
  },
  subTitle: {
    fontSize: 16,
    fontFamily: Font.regular,
    color: Colors.COLOR_2,
    textAlign: 'center',
    marginBottom: 20
  },
  socialBtns: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },
  forgot:{
    textAlign: 'center',
    fontFamily: Font.regular,
    fontSize: 15,
    color: Colors.COLOR_1,
    marginVertical: 10
  }
})