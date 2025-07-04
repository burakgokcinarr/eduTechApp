import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { Font, Colors } from '../../constants';
import { Button } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { slides } from '../../data/onboard';

const { width } = Dimensions.get('window');

export default function Onboarding() {

    const navigation                      = useNavigation();
    const flatListRef                     = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
    };

    const handleNext = () => {
      if (currentIndex < slides.length - 1) {
          flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      } else {
          navigation.navigate('signin'); // Navigate to SignIn screen
      }
    };

    const renderItem = ({ item }) => (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.image} contentFit="contain" transition={500}/>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('signin')}>
            <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <FlatList
            data={slides}
            ref={flatListRef}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            keyExtractor={(item) => item.id}
        />

        <View style={styles.pagination}>
            {slides.map((_, index) => (
                <View
                key={index}
                style={[
                    styles.dot,
                    index === currentIndex ? styles.activeDot : null,
                ]}
                />
            ))}
        </View>

        <Button onClicked={handleNext}>
            {currentIndex < slides.length - 1 ? 'Next' : 'Get Started'}
        </Button>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  skipText: {
    fontSize: 16,
    fontFamily: Font.bold,
    color: Colors.COLOR_2,
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.8,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: Font.medium,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: Font.regular,
    textAlign: 'center',
    color: Colors.COLOR_2,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.COLOR_3,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: Colors.COLOR_6,
    width: 20,
  },
  
});

