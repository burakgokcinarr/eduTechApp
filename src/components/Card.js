import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { Font, Colors } from '../constants'
import { useNavigation } from '@react-navigation/native'

export default function Card({ data = null }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('detail', { cellData: data })}>
            <View>
                <Image
                    style={[styles.image, { backgroundColor: data.bgColor }]}
                    source={data.image}
                    contentFit="contain"
                    transition={1000}
                />
                <Text style={styles.price}>{data.price}</Text>
            </View>
            <View style={{padding: 8, gap: 4}}>
                <Text style={styles.timeText}>3 h 30 min</Text>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.subText}>{data.subTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        borderWidth: 0.7,
        borderColor: Colors.COLOR_3,
        borderRadius: 10,
        overflow: 'hidden'
    },
    title: {
        fontSize: 20,
        fontFamily: Font.bold
    },
    subText: {
        fontSize: 16,
        fontFamily: Font.regular
    },
    timeText: {
        fontSize: 14,
        fontFamily: Font.regular,
        color: Colors.COLOR_7
    },
    image: {
        width: '100%',
        height: 250
    },
    price: {
        fontSize: 14,
        fontFamily: Font.medium,
        color: Colors.BG_COLOR,
        padding: 4,
        backgroundColor: Colors.COLOR_6,
        width: 60,
        borderRadius: 16,
        textAlign: 'center',
        position: 'absolute',
        right: 8,
        bottom: 8
    }
})