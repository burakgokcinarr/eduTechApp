import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Font, Colors } from '../../../constants'
import { CourseNavBar } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'

const user_image = require('../../../assets/images/settings.png')
const { width }  = Dimensions.get('window');

export default function Course() {

  return (
    <SafeAreaView style={styles.container}>
      <CourseNavBar userName="Burak Gökçınar" />
  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  image: {
    width: width,
    height: 150,
    marginTop: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: Font.medium,
    color: Colors.COLOR_1,
  },
  subTitle: {
    fontSize: 16,
    color: Colors.COLOR_2,
    fontFamily: Font.medium,
    alignSelf: 'center',
    marginTop: 8,
  },
  card: {
    width: width - 32,
    height: 80,
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.COLOR_3,
  },
})