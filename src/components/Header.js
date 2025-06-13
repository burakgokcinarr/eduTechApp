import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Font } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({ route, options, navigation }) => {

    const title      = options?.title;

    return (
        <SafeAreaView>
            <View style={styles.header}>
                {
                    navigation.canGoBack() &&
                    (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="chevron-back-circle-outline" size={40} color={Colors.COLOR_2} />
                        </TouchableOpacity>
                    ) 
                }
                {
                    title && <Text style={styles.title}>{title}</Text>
                }
            </View>
        </SafeAreaView>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        fontFamily: Font.medium
    },
});
