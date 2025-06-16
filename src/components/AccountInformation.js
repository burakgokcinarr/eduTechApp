import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font, Colors } from '../constants';
import InfoItem from './InfoItem';

const AccountInformation = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Account information</Text>
        <InfoItem icon="person" label="Name" value="Juana Antonieta" />
        <InfoItem icon="mail" label="Email" value="juanita123@gmail.com" />
        <InfoItem icon="lock-closed" label="Password" value="changed 2 weeks ago" />
    </View>
);

export default AccountInformation;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
        fontFamily: Font.medium,
    },
});
