import { Dimensions, StyleSheet } from "react-native";
import theme from "../../assets/theme/theme";

const { width,height } = Dimensions.get('window')

const styles = StyleSheet.create({
    landingCnt: {
        flex: 1,
        backgroundColor: theme.colors.primaryMedium
    },
    landingImg: {
        flex: 1,
        objectFit: "fill",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    landingText: {
        fontFamily: theme.fonts.bold.fontFamily,
        color: theme.colors.secondaryMedium,
        fontWeight: '800',
        fontSize: 55,
        display: "flex",
        width: '90%',
        height: '20%',
        justifyContent: "center",
        marginTop: 15
    },
    landingBtn_Cnt: {
        width: '100%',
        height: '25%',
        alignItems: "center",
        backgroundColor: '#213742'
    },
    landingBtn: {
        width: '60%',
        height: "25%",
        backgroundColor: theme.colors.secondaryDark,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 25,
        elevation: 1
    },
    landingBtn_Text: {
        fontFamily: "Poppins-Meduim",
        fontSize: 24,
        fontWeight: '400',
    },
    loginCnt: {
        // flex: 1,
        width:width,
        height:height,
        backgroundColor: theme.colors.primaryMedium,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBox: {
        width: '90%',
        height: height-450,
        alignItems: "center",
        backgroundColor: theme.colors.highLighted,
        borderRadius: 10,
        justifyContent: "space-between"
    },
    loginTop: {
        width: "100%",
        height: "10%",
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    loginCenter: {
        width: "100%",
        height: "60%",
        // backgroundColor: "green",
        alignItems: 'center',
        justifyContent:"space-around"
    },
    loginBottom: {
        width: "100%",
        height: "15%",
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: theme.colors.secondaryMedium
    },
    loginHeading:{
        fontFamily: "Poppins-SemiBold",
        fontSize:32,
        fontWeight:'600',
        color:"black"
    },
    inputCnt:{
        width:"90%",
        height:"30%",
        justifyContent:"space-between"
    },
    loginInput:{
        width:'100%',
        height:"70%",
        borderRadius:10,
        borderWidth:2,
        borderColor:'black',
        padding:10,
        fontSize:24,
        color:"black"
    },
    smallText:{
        fontSize:16,
        fontFamily:"Poppins-Medium",
        color:"black",
        fontWeight:"400"
    }
})

export default styles