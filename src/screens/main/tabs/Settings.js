import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { Font, Colors } from '../../../constants'
import { NotificationToggle, AccountInformation } from '../../../components'

const user_image = require('../../../assets/images/settings.png')
const { width }  = Dimensions.get('window');

export default function Settings() {

  return (
    <View style={styles.container}>
      <Image
        source={user_image}
        style={styles.image}
        contentFit="contain"
        transition={500}
      />
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <NotificationToggle />
        <AccountInformation />
      </ScrollView>
    </View>
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