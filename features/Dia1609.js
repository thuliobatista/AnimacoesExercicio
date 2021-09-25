import React,{useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View,Animated } from 'react-native';

const Dia1609 = () => {

    const valores = [56.76, 28.57, 76.52, 37.76, 62.63];

    const [altura1] = useState(new Animated.Value(0));
    const [altura2] = useState(new Animated.Value(0));
    const [altura3] = useState(new Animated.Value(0));
    const [altura4] = useState(new Animated.Value(0));
    const [altura5] = useState(new Animated.Value(0));
    const [opacidade] = useState(new Animated.Value(0));
  

    

    let alturaInterpolada1 = altura1.interpolate({
        inputRange: [0, 56.76],
        outputRange: ['0%', '56.76%'],
      });
    let alturaInterpolada2 = altura2.interpolate({
        inputRange: [0, 28.57],
        outputRange: ['0%', '28.57%'],
      });
    let alturaInterpolada3 = altura3.interpolate({
        inputRange: [0, 76.52],
        outputRange: ['0%', '76.52%'],
      });
    let alturaInterpolada4= altura4.interpolate({
        inputRange: [0,37.76],
        outputRange: ['0%', '37.76%'],
      });
    let alturaInterpolada5 = altura5.interpolate({
        inputRange: [0, 62.63],
        outputRange: ['0%', '62.63%'],
      });


    const gerarGrafico = () => {

     Animated.sequence([
            Animated.timing(altura1, {toValue:57.92, duration:1000}),
            Animated.timing(altura2, {toValue:29.29, duration:1000}), 
            Animated.timing(altura3, {toValue:80.87, duration:1000}), 
            Animated.timing(altura4, {toValue:34.69, duration:1000}), 
            Animated.timing(altura5, {toValue:64.97, duration:1000}),
     Animated.parallel([
            Animated.timing(opacidade, {toValue:1, duration:1000})])
          ]).start();
    }

    return (
        <View style={styles.container}>
            <Text 
                style={styles.text}> Boletim Epidemiológico {'\n'} 16 de setembro de 2021</Text>
            <View 
                style={styles.viewGraficos}>
                <Animated.View                    
                    style={[styles.viewAnimadas, {height:alturaInterpolada1,backgroundColor:'#DF8021'}]}
                >
                <Animated.Text
                     style={{fontSize: 10,fontWeight: 'bold',marginBottom: -20,opacity:opacidade}}
                >56.76%</Animated.Text>
                </Animated.View>

                <Animated.View
                    style={[styles.viewAnimadas, {height:alturaInterpolada2, backgroundColor:'#44AA8F'}]}
                >
                <Animated.Text
                    style={{fontSize: 10,fontWeight: 'bold',marginBottom: -20,opacity:opacidade}}
                >28.57%</Animated.Text>
                </Animated.View>

                <Animated.View
                    style={[styles.viewAnimadas, {height:alturaInterpolada3, backgroundColor:'#AA5344'}]}
                >
                <Animated.Text
                    style={{fontSize: 10,fontWeight: 'bold',marginBottom: -20,opacity:opacidade}}
                >76.52%</Animated.Text>
                </Animated.View> 

                <Animated.View
                    style={[styles.viewAnimadas, {height:alturaInterpolada4, backgroundColor:'#7c5d9a'}]}
                >
                <Animated.Text
                    style={{fontSize: 10,fontWeight: 'bold',marginBottom: -20,opacity:opacidade}}
                >37.76%</Animated.Text>
                </Animated.View>  

                <Animated.View
                    style={[styles.viewAnimadas, {height:alturaInterpolada5, backgroundColor:'#345fd0'}]}
                >
                <Animated.Text
                    style={{fontSize: 10,fontWeight: 'bold',marginBottom: -20,opacity:opacidade}}
                >62.63%</Animated.Text>
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
export default Dia1609;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#F6F2EE',
        alignItems: 'center',
        marginTop: -40,
        marginBottom: -30,
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
