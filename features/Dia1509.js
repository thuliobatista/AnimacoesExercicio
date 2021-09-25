import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View,Animated } from 'react-native';

const Dia1509 = () => {

    const valores = [57.92, 29.29, 80.87, 34.69, 64.97];

    const [altura1] = useState(new Animated.Value(0));
    const [altura2] = useState(new Animated.Value(0));
    const [altura3] = useState(new Animated.Value(0));
    const [altura4] = useState(new Animated.Value(0));
    const [altura5] = useState(new Animated.Value(0));
    const [opacidade] = useState(new Animated.Value(0));

    let alturaInterpolada1 = altura1.interpolate({
        inputRange: [0, 57.92],
        outputRange: ['0%', '57.92%'],
      });
    let alturaInterpolada2 = altura2.interpolate({
        inputRange: [0, 29.29],
        outputRange: ['0%', '29.29%'],
      });
    let alturaInterpolada3 = altura3.interpolate({
        inputRange: [0, 80.87],
        outputRange: ['0%', '80.87%'],
      });
    let alturaInterpolada4= altura4.interpolate({
        inputRange: [0,34.69],
        outputRange: ['0%', '34.69%'],
      });
    let alturaInterpolada5 = altura5.interpolate({
        inputRange: [0, 64.97],
        outputRange: ['0%', '64.97%'],
      });

      const gerarGrafico = () => {

        Animated.parallel([
            
            Animated.timing(altura1, {toValue:57.92, duration:2000}),
            Animated.timing(altura2, {toValue:29.29, duration:2000}), 
            Animated.timing(altura3, {toValue:80.87, duration:2000}), 
            Animated.timing(altura4, {toValue:34.69, duration:2000}), 
            Animated.timing(altura5, {toValue:64.97, duration:2000}),
            Animated.timing(opacidade, {toValue:1, duration:4000}),    
          ]).start();
    }

    return (
        <View style={styles.container}>
            <Text 
                style={styles.text}> Boletim Epidemiológico {'\n'} 15 de setembro de 2021</Text>
            <View 
                style={styles.viewGraficos}>
                <Animated.View                   
                    style={[styles.viewAnimadas, {height:alturaInterpolada1, backgroundColor:'#DF8021'}]}
                >
                <Animated.Text
                     style={{fontSize: 10,fontWeight: 'bold',marginBottom: -20,opacity:opacidade}}
                >57.92%</Animated.Text>
                </Animated.View>
                <Animated.View
                    style={[styles.viewAnimadas, {height:alturaInterpolada2, backgroundColor:'#44AA8F'}]}
                >
                <Animated.Text
                     style={{fontSize: 10,fontWeight: 'bold',marginBottom: -20,opacity:opacidade}}
                >29.29%</Animated.Text>
                </Animated.View>
                <Animated.View
                    style={[styles.viewAnimadas, {height:alturaInterpolada3, backgroundColor:'#AA5344'}]}
                >
                <Animated.Text
                     style={{fontSize: 10,fontWeight: 'bold',marginBottom: -20,opacity:opacidade}}
                >80.87%</Animated.Text>
                </Animated.View>  
                <Animated.View
                    style={[styles.viewAnimadas, {height:alturaInterpolada4, backgroundColor:'#7c5d9a'}]}
                >
                    <Animated.Text
                         style={{fontSize: 10,fontWeight: 'bold',marginBottom: -20,opacity:opacidade}}
                    >30.69%</Animated.Text>
                </Animated.View>   
                <Animated.View
                    style={[styles.viewAnimadas, {height:alturaInterpolada5, backgroundColor:'#345fd0'}]}
                >
                <Animated.Text
                     style={{fontSize: 10,fontWeight: 'bold',marginBottom: -20,opacity:opacidade}}
                >64.97%</Animated.Text>
                </Animated.View> 
                
                     
            </View>
            <View style={styles.viewBotoes}>
                <TouchableOpacity
                    style={styles.botoes}
                    onPress={gerarGrafico}
                >
                <Text 
                    style={{fontWeight:'bold', fontSize:12, margin: 2}}>Gerar gráfico</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Dia1509;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#F6F2EE',
        alignItems: 'center',
        marginBottom: -40,
        marginTop: 20,
    },
    viewGraficos: {
      flex: 0.5,
      flexDirection: 'row',
      alignItems: 'flex-end'
    },
    viewAnimadas: {
      width: 40,
      margin: 2, 
      alignItems: 'center',
    },
    viewTextos: {
      fontWeight: 'bold', 
      fontSize: 10,
    },
    viewBotoes: {
        margin: 4,
    }, 
    botoes: {
      backgroundColor: '#DDDDDD',
      padding: 4,
      alignItems: 'center',
    }
  });