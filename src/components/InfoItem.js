import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Font, Colors } from '../constants';

const InfoItem = ({ icon, label, value }) => (
    <TouchableOpacity style={styles.item}>
        <Ionicons name={icon} size={24} color="#4A90E2" />
        <View style={styles.textContainer}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
        <Ionicons name="chevron-forward" size={30} color={Colors.COLOR_3} />
    </TouchableOpacity>
);

export default InfoItem;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 12,
        marginTop: 16,
        borderWidth: 1,
        height: 80,
        borderColor: Colors.COLOR_3,
    },
    textContainer: {
        flex: 1,
        marginLeft: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: Font.bold,
    },
    value: {
        fontSize: 14,
        color: '#666',
    },
});
