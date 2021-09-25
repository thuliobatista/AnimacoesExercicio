import React, {useState} from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';

const Covid = () => {

  const [rotacao] = useState(new Animated.Value(0)); 
  Animated.timing(rotacao, {toValue:90, duration:2500}).start();

  let rotacaoInterpolada = rotacao.interpolate({
    inputRange: [0, 90],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Text
        style={{fontSize: 18, marginTop: 14, fontWeight:'bold', transform:[{rotate:rotacaoInterpolada}]}}
      > COVID-19 JUIZ DE FORA
      </Animated.Text>

    </View>
  );
}
export default Covid;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: '#F6F2EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 14,
  }
});