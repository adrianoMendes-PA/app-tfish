import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

{/*COMPONENTS*/ }
import Task from '../../../components/Tasks/tasks';

export default () => {
    const navigation = useNavigation();

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
                    <Text style={styles.textHeader}>Registro de Tarefas</Text>
                </View>
            </View>

            {/*TEREFAS*/}
            <View style={styles.tasksWrapper}>
                <ScrollView>
                    <Text style={styles.sectionTitle}>Tarefa do dia</Text>
                    <View style={styles.items}>
                        <Task text={'Terefa1'} />
                        <Task text={'Terefa2'} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}