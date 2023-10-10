import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e0e0"
    },
    containerCard: {
        marginBottom: 40,
        width: '100%'
    },
    header: {
        width: '100%',
        height: 45,
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
    card: {
        padding: 10,
        marginTop: 10,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#FFF',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 19,
        marginVertical: 6
    },
    cardPropriedade: {
        fontSize: 18,
        color: '#41414d',
        fontWeight: 'bold'
    },
    cardValor: {
        marginTop: 5,
        fontSize: 17,
        marginBottom: 5,
        marginLeft: 10,
        color: '#737380',
    },
    cardValorNull: {
        marginTop: 5,
        fontSize: 17,
        marginBottom: 5,
        marginLeft: 10,
        color: '#737380',
        fontStyle: 'italic'
    },
    dadosNull: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dadosNullText: {
        fontSize: 20
    },
    TESTE: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Titulo: {
        alignItems: 'center',
        marginTop: 15,
    },
    TituloText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#41414d',
    }
});

export default styles;