import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, ScrollView, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import Api from "../../../api/api";

export default () => {
    const navigation = useNavigation();

    const [peixe, setPeixe] = useState([
        { key: 0, nome: 'Escolha do tipo do peixe', valor: 0 },
        { key: 1, nome: 'Tambaqui', valor: 1 },
        { key: 2, nome: 'Tilápia', valor: 2 },
    ]);
    const [tipo_peixe, setTipoPeixe] = useState([]);

    const [quant_peixe, setQuantPeixe] = useState('');

    const [faseCriacao, setFaseCria] = useState(['Defina a fase de criação', 'Alevino', 'Recria', 'Engorda'])
    const [fase_criacao, setFaseCriacao] = useState([]);

    const [loading, setLoading] = useState(true);


    const Cadastrapeixe = async () => {
        if (tipo_peixe != '' && quant_peixe != '') {
            setLoading(false);

            let json = await Api.cadastraPeixe(tipo_peixe, quant_peixe, fase_criacao);
            if (json.user_id) {
                if (fase_criacao == '') {
                    Alert.alert(
                        "Cadastro realizado. Mas, atenção!",
                        "Você não informou a fase de criação do peixe, dessa forma não poderemos sugerir a ração mais adequada para sua criação.",
                        [
                            {
                                text: 'Ok!', onPress: () => console.log("ok clicado")
                            }
                        ]
                    );
                    navigation.reset({
                        routes: [{ name: 'Home' }]
                    });
                } else {
                    Alert.alert(
                        "Sucesso!",
                        "Cadastro foi realizado com sucesso.",
                        [
                            {
                                text: 'Ok!', onPress: () => console.log("ok clicado")
                            }
                        ]
                    );
                    navigation.reset({
                        routes: [{ name: 'Home' }]
                    });
                }

            } else {
                Alert.alert(
                    "Ops!",
                    "Aconteceu alguma coisa não esperada.",
                    [
                        {
                            text: "Ok, entendi.", onPress: () => {
                                navigation.reset({
                                    routes: [{ name: 'Home' }]
                                });
                            }
                        }
                    ]
                );
            }
        } else {
            Alert.alert(
                "Ops!",
                "Existem campos vazios! Por favor, preencha todos os campos para poder realizar o cadastro.",
                [
                    {
                        text: "Ok, entendi.", onPress: () => console.log("ok clicado")
                    }
                ]
            );
        }
    }

    function voltar() {
        navigation.goBack();
    }

    return (
        <View>
            <StatusBar barStyle='default' backgroundColor="#236084" />
            <View style={styles.header}>
                <TouchableOpacity onPress={voltar} style={styles.iconVoltar} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                    <Icon name="chevron-left" size={25} color="#FFF" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.textHeader}>Registro de Peixes</Text>
                </View>
            </View>

            <ScrollView style={{ marginBottom: 50 }}>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Tipo de peixe:</Text>
                    <View style={styles.inputPicker}>
                        <Picker
                            selectedValue={tipo_peixe}
                            style={{ height: 36, width: '100%' }}
                            onValueChange={(itemValue) =>
                                setTipoPeixe(itemValue)
                            }>
                            {
                                peixe.map(cr => {
                                    return <Picker.Item
                                        key={cr.key}
                                        label={cr.nome}
                                        value={cr.valor}
                                    />
                                })
                            }
                        </Picker>
                    </View>

                    <Text style={styles.label}>Quantidade de peixes adquirido:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='exemplo: 50'
                        placeholderTextColor='#999'
                        keyboardType={'decimal-pad'}
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={quant_peixe}
                        onChangeText={setQuantPeixe}
                    />

                    <Text style={styles.label}>Fase da criação:</Text>
                    <View style={styles.inputPicker}>
                        <Picker
                            selectedValue={fase_criacao}
                            style={{ height: 36, width: '100%' }}
                            onValueChange={(itemValue) =>
                                setFaseCriacao(itemValue)
                            }>
                            {
                                faseCriacao.map(cr => {
                                    return <Picker.Item
                                        key={fase_criacao}
                                        label={cr}
                                        value={cr}
                                    />
                                })
                            }
                        </Picker>
                    </View>

                </View>
                <View style={styles.campoBtn}>
                    <TouchableOpacity onPress={() => Cadastrapeixe()} style={styles.btnSalvar}>
                        <View>
                            {loading ? (
                                <>
                                    <Text style={styles.btnText}>Salvar</Text>
                                </>

                            ) : (
                                <ActivityIndicator
                                    style={styles.loadingLogin}
                                    visible={loading}
                                    size="small"
                                    color="#FFF"
                                />
                            )
                            }
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCancelar}>
                        <Text style={styles.btnText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}