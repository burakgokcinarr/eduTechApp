import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Font } from '../constants';

const NotificationToggle = () => {
    const [enabled, setEnabled] = useState(true);

    return (
        <View style={styles.container}>
            <Ionicons name="notifications" size={24} color="#4A90E2" />
            <Text style={styles.label}>Notifications</Text>
            <Switch
                value={enabled}
                onValueChange={setEnabled}
                thumbColor="#fff"
                trackColor={{ true: '#3CB371', false: '#ccc' }}
            />
        </View>
    );
};

export default NotificationToggle;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 12,
        backgroundColor: Colors.BG_COLOR,
        borderWidth: 1,
        borderColor: Colors.COLOR_3,
        justifyContent: 'space-between',
        marginTop: 16,
    },
    label: {
        fontSize: 16,
        flex: 1,
        marginLeft: 8,
        fontFamily: Font.bold,
    },
});
