import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Font, Colors } from '../constants'

export default function Category() {
    return (
        <ScrollView 
            horizontal 
            contentContainerStyle={styles.categoryView} 
            showsHorizontalScrollIndicator={false}
        >
            <Text style={styles.title}>Category:</Text>
            <Text style={styles.category}>#CSS</Text>
            <Text style={styles.category}>#UX</Text>
            <Text style={styles.category}>#Swift</Text>
            <Text style={styles.category}>#UI</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    categoryView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 8
    },
    title: {
        fontSize: 16,
        fontFamily: Font.regular
    },
    category: {
        padding: 8,
        backgroundColor: Colors.COLOR_6,
        fontSize: 12,
        fontFamily: Font.medium,
        borderRadius: 16,
        color: Colors.BG_COLOR
    }
})