import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

{/*COMPONENTS*/ }
import Task from '../../../components/Tasks/tasks';

export default () => {

    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task]);
        setTask(null);
    }

    const completeTask = (index) => {
        let intemsCopy = [...taskItems];
        intemsCopy.slice(index, 1);
        setTaskItems(intemsCopy);
    }

    const navigation = useNavigation();

    function voltar() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
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
                <Text style={styles.sectionTitle}>Tarefa do dia</Text>
                <View style={styles.items}>
                    {
                        taskItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                    <Task text={item} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
            {/* ESCREVER UMA TAREFA */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? 'padding' : 'height'}
                style={styles.writeTaskWrapper}>
                <TextInput style={styles.input} placeholder={'Escreva uma tarefa'} value={task} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
    )
}