import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Font, Colors } from '../constants'

export default function Button({ onClicked = null, children, style, disabled = false }) {

return (
    <TouchableOpacity 
        onPress={onClicked}
        style={[styles.button, style, disabled && styles.disabled]}
        disabled={disabled}
        activeOpacity={0.7}
    >
        <Text style={styles.buttonText}>
            { children}
        </Text>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.COLOR_5,
        height: 56,
        marginHorizontal: 20,
        borderRadius: 16,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 40,
    },
    buttonText: {
        color: Colors.COLOR_4,
        fontSize: 18,
        fontWeight: '600',
        fontFamily: Font.medium,
    },
})