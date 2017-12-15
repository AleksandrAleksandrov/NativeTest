import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
    card: {
        justifyContent: 'center',
        position: 'relative',
        marginVertical: Metrics.section,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 25,
        paddingBottom: 70,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 6,
        backgroundColor: '#fff',
        shadowColor: "rgba(61, 82, 190, 0.17)",
        shadowOffset: {
            width: 0,
            height: 15
        },
        shadowRadius: 28,
        shadowOpacity: 1
    }
})
