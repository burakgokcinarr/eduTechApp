import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors, Font } from '../constants'
import { Ionicons } from '@expo/vector-icons';

export default function CustomTextInput({ style = {}, placeholder = "Enter text", keyboardType = "default", secureTextEntry = false, onChangeText = null, isShowIcon = false }) {

    const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={[styles.input, style]}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.COLOR_2}
                    selectionColor={Colors.COLOR_1}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType={keyboardType}
                    secureTextEntry={isPasswordVisible}
                    onChangeText={onChangeText}
                />
                {
                    isShowIcon && (
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={25} color={Colors.COLOR_2} />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 53,
        borderColor: Colors.COLOR_3,
        borderWidth: 0.8,
        borderRadius: 12,
        paddingHorizontal: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        fontFamily: Font.regular
    }
})