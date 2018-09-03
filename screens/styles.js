import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    container: {
        flex: 1,
        display: 'flex',
        flexShrink: 1,
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },

    btn: {
        marginTop: 15
    },

    img: {
        width: 150,
        height: 150
    },

    content: {
        width: '90%',
        flex: 1
    }
});
