import LottieView from 'lottie-react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const  AppLoader = () => {
  return (
    <View style={[ StyleSheet.absoluteFill, styles.container]}>
      <LottieView
        source={require("../../../assets/glow_loading.json")}
        style={styles.animation}
        autoPlay
        loop
      />
    </View>
  );
};

export default AppLoader;

const styles = StyleSheet.create({
  animation: {
    width: 300,
    height: 300,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  }
});