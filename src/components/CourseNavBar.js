import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React from 'react'
import { Font, Colors } from '../constants'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Category from './Category';

export default function CourseNavBar({ userName = "" }) {

    const [focused, setFocused] = React.useState(false);

    const clickedBackBtn = () => {
        setFocused(!focused); 
        Keyboard.dismiss();
    }

    return (
        <View>
            {
                !focused
                ?
                <>
                    <Text style={styles.userTxt}>Hello,</Text>
                    <View style={styles.row}>
                        <Text style={styles.userName}>{userName}</Text>
                        <Ionicons name="notifications-circle-outline" size={45} color={Colors.COLOR_2} />
                    </View>
                </>
                :
                null
            }
            <View style={styles.searhView}>
                { 
                    focused 
                    ? 
                    <TouchableOpacity onPress={clickedBackBtn}>
                        <Ionicons name="chevron-back-circle-outline" size={45} color={Colors.COLOR_2} />
                    </TouchableOpacity> 
                    : 
                    null 
                }
                <TextInput
                    placeholder='Search course'
                    placeholderTextColor={Colors.COLOR_3}
                    style={[styles.searchInput, focused ? { width: '75%' } : { width: '85%' }]}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    returnKeyType='search'
                    keyboardType='default'
                    selectionColor={Colors.COLOR_2}
                />
                <AntDesign name="search1" size={30} color={Colors.COLOR_2} style={{paddingRight: 8}}/>
            </View>
            {
                !focused 
                ? 
                <Category/>
                :
                null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    userTxt: {
        fontSize: 16,
        fontFamily: Font.regular,
        marginTop: 8,
        paddingHorizontal: 16,
    },
    userName: {
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: Font.bold
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    searhView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 8
    },
    searchInput: {
        backgroundColor: Colors.BG_COLOR,
        paddingHorizontal: 8,
        borderRadius: 8,
        fontFamily: Font.regular,
        fontSize: 16,
        height: 56,
        width: '85%',
        borderWidth: 0.7,
        borderRadius: 8,
        borderColor: Colors.COLOR_3
    }
})