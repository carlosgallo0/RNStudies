import React from 'react';
import {View, Text} from 'react-native';
//import { PinchGestureHandler, State } from 'react-native-gesture-handler'
import ChickenImage from '../../assets/ChickenImage.png';

import PinchableBox from '../../components/PinchableBox'

import {styles} from './styles'

export default function Hello() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.content}>Behold the power of the</Text>
        <Text style={styles.boldText}>Mighty Zoom</Text>

        <PinchableBox source={ChickenImage} />

        {/* <Image
          source={ChickenImage}
          style={styles.image}
          >

          </Image> */}
      </View>
    </>
  );
}
