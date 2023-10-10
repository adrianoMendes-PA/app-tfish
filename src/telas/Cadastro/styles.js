import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginBottom: 8
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },
    button: {
        height: 45,
        backgroundColor: '#236084',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    TextoButton: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    messagenButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 15
    },
    textCadastre: {
        fontSize: 16,
        color: '#236084'
    },
    textCadastreBold: {
        fontSize: 16,
        color: '#236084',
        fontWeight: 'bold',
        marginLeft: 5
    },
    inputArea: {
        borderWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        marginBottom: 15,
    },
    TesteInput: {
        width: '80%',
        height: 50,
        color: '#000',
        padding: 5,
        fontSize: 15
    },
})

export default styles
