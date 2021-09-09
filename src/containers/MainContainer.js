import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions, StyleSheet, Text, useWindowDimensions } from 'react-native';
import PortraitScreen from '../screens/PortraitScreen/PortraitScreen'
import { Appbar, Button } from 'react-native-paper';
import RotateIcon from '../assets/icons/RotateIcon';
import LandscapeScreen from '../screens/LandscapeScreen';
import Orientation from 'react-native-orientation'

const items = [
  {
    id: 1,
    title: 'song 1.mp3',
    performer: 'RHCP',
    imgSrc: require('../assets/rhcp.jpg'),
  },
  {
    id: 2,
    title: 'song 1.mp3',
    performer: 'RHCP',
    imgSrc: require('../assets/top.jpg'),
  },
  {
    id: 11,
    title: 'song 1.mp3',
    performer: 'RHCP',
    imgSrc: require('../assets/rhcp.jpg'),
  },
  {
    id: 3,
    title: 'song 1.mp3',
    performer: 'RHCP',
    imgSrc: require('../assets/top.jpg'),
  },
  {
    id: 4,
    title: 'song 1.mp3',
    performer: 'RHCP',
    imgSrc: require('../assets/rhcp.jpg'),
  },
  {
    id: 5,
    title: 'song 1.mp3',
    performer: 'RHCP',
    imgSrc: require('../assets/top.jpg'),
  },
  {
    id: 6,
    title: 'song 1.mp3',
    performer: 'RHCP',
    imgSrc: require('../assets/rhcp.jpg'),
  },
  {
    id: 7,
    title: 'song 1.mp3',
    performer: 'RHCP',
    imgSrc: require('../assets/top.jpg'),
  },
  {
    id: 8,
    title: 'song 1.mp3',
    performer: 'RHCP',
    imgSrc: require('../assets/rhcp.jpg'),
  },
  {
    id: 9,
    title: 'song 1.mp3',
    performer: 'RHCP',
    imgSrc: require('../assets/top.jpg'),
  },
  {
    id: 10,
    title: 'song 1.mp3',
    performer: 'RHCP',
    imgSrc: require('../assets/rhcp.jpg'),
  },
]



const MainContainer = () => {

  const { width, height } = useWindowDimensions();

  const [orientation, setOrientation] = useState(width > height ? 'landscape' : 'portrait');
  const [selectedIndex, setSelectedIndex] = useState(1);

  const rotationHandler = () => {
    if (orientation === 'portrait') {
      Orientation.lockToLandscape();
      setOrientation('landscape')
    } else {
      Orientation.lockToPortrait();
      setOrientation('portrait')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="My Player"
          color="white"
        />
        <Appbar.Action
          icon={() => <RotateIcon fill="white" />}
          onPress={rotationHandler}
        />
      </Appbar.Header>
      {(orientation === 'portrait') &&
        <PortraitScreen
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          items={items}
        />
      }
      {orientation === 'landscape' &&
        <LandscapeScreen
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          items={items}
          orientation={orientation}
        />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default MainContainer
