import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#236084'
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
        letterSpacing: 1
    },
    iconVoltar: {
        position: 'absolute',
        left: 16
    },
    tasksWrapper: {
        paddingTop: 25,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        width: 250,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    addText: {

    }
})

export default styles