import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Font, Colors } from '../../../constants'
import { CourseNavBar, Card } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LegendList } from "@legendapp/list";
import { items } from '../../../data/data'

const { width }  = Dimensions.get('window');

export default function Course() {

  const [search, setSearch] = React.useState("");

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.subTitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <CourseNavBar userName="Burak Gökçınar" setSearch={setSearch}/>
      {
        search && <Text style={styles.resultTextCount}> {filteredItems.length} Results</Text>
      }
      <LegendList
        data={filteredItems}
        renderItem={({ item }) => <Card data={item}/>}
        keyExtractor={(item) => item.id}
        recycleItems
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  image: {
    width: width,
    height: 150,
    marginTop: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: Font.medium,
    color: Colors.COLOR_1,
  },
  subTitle: {
    fontSize: 16,
    color: Colors.COLOR_2,
    fontFamily: Font.medium,
    alignSelf: 'center',
    marginTop: 8,
  },
  card: {
    width: width - 32,
    height: 80,
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.COLOR_4,
  },
  resultTextCount: {
    fontSize: 28,
    fontFamily: Font.medium
  }
})