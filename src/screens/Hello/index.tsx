import React from 'react';
import { View } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler'


import { styles } from './styles';

export default function Hello(){
    return(
        <View style={styles.container}>
            Olá
        </View>
    );
}