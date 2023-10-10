import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebebeb"
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
        marginTop: 30
    }
})

export default styles