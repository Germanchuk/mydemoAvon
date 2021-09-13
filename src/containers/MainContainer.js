import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, useWindowDimensions } from 'react-native';
import PortraitScreen from '../screens/PortraitScreen/PortraitScreen'
import { Appbar } from 'react-native-paper';
import RotateIcon from '../assets/icons/RotateIcon';
import LandscapeScreen from '../screens/LandscapeScreen';
import Orientation from 'react-native-orientation'
import { items } from '../items';

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
