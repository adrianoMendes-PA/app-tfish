import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import Icone from 'react-native-vector-icons/MaterialCommunityIcons';

import { LineChart } from 'react-native-chart-kit'

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
export default function Atividades({ navigation }) {
    // const Home = () => {
    //     navigation.navigate('Home');
    // }

    return (
        <View style={styles.container}>
            <StatusBar barStyle='default' backgroundColor="#236084" />
            <View style={styles.header}>
                <View>
                    <Text style={styles.textHeader}>Atividades</Text>
                </View>
            </View>

            <View style={styles.containerCard}>
                <View style={styles.card}>
                    <View style={styles.TESTE}>
                        <Text style={styles.cardPropriedade}>Nome do Tanque:</Text>
                        <Text style={styles.cardValor}>Tanque 01</Text>
                    </View>

                    <View style={styles.TESTE}>
                        <Text style={styles.cardPropriedade}>Tipo de peixe:</Text>
                        <Text style={styles.cardValor}>Tambaqui</Text>
                    </View>

                    <View style={styles.TESTE}>
                        <Text style={styles.cardPropriedade}>Quantidade de peixe:</Text>
                        <Text style={styles.cardValor}>50</Text>
                    </View>

                    <View style={styles.TESTE}>
                        <Text style={styles.cardPropriedade}>Fase de criação:</Text>
                        <Text style={styles.cardValor}>Alevino</Text>
                    </View>

                    <View style={styles.TESTE}>
                        <Text style={styles.cardPropriedade}>Data do cadastro:</Text>
                        <Text style={styles.cardValor}>01/04/21</Text>
                    </View>

                    <View style={styles.Titulo}>
                        <Text style={styles.TituloText}>Evolução do peixe</Text>
                    </View>

                    {/* TESTE */}
                    <View>
                        <LineChart
                            data={{
                                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
                                datasets: [
                                    {
                                        data: [
                                            Math.random() * 1,
                                            Math.random() * 1,
                                            Math.random() * 1,
                                            Math.random() * 1,
                                            Math.random() * 1,
                                            Math.random() * 1
                                        ]
                                    }
                                ]
                            }}
                            width={300} // from react-native
                            height={220}
                            yAxisSuffix="kg"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundColor: "#e26a00",
                                backgroundGradientFrom: "#fb8c00",
                                backgroundGradientTo: "#ffa726",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 5
                                },
                                propsForDots: {
                                    r: "4",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 5
                            }}
                        />
                    </View>

                    <View>
                        <Text style={{ textAlign: 'center', color: '#41414d', marginTop: 5, fontSize: 15 }}>
                            <Icone name="lightbulb-on-outline" size={15} color="#41414d" />
                            O mês previsto para que os peixes desse tanque atingam a faixa de 1kg é Maio
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}