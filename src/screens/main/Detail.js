import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Font, Colors } from '../../constants'
import { useRoute } from '@react-navigation/native'
import { Image } from 'expo-image'
import { Button } from '../../components'

export default function Detail() {

    const route = useRoute();
    const { cellData }  = route.params;

    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    <Image
                        style={[styles.image, { backgroundColor: cellData.bgColor }]}
                        source={cellData.image}
                        contentFit="contain"
                        transition={1000}
                    />
                    <Text style={styles.price}>{cellData.price}</Text>
                </View>
                <View style={{padding: 8, gap: 8}}>
                    <Text style={styles.title}>{cellData.title}</Text>
                    <Text style={styles.subText}>{cellData.desc}</Text>
                    <Text style={styles.title}>Duration</Text>
                    <Text style={styles.subText}>3 h 30 min</Text>
                </View>
            </ScrollView>
            <Button>
                Add to cart
            </Button>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        borderColor: Colors.COLOR_3,
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