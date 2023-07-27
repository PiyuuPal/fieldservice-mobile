import { spacing } from "@/theme";
import { font } from "@/theme/font";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },

    firstView: {
        flex: 1,
        padding: 2,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 8.35,
        shadowRadius: 5.84,
        elevation: 30,
        // backgroundColor: 'green'
    },
    custIcon: {
        padding: 15,
        color: "#195090",
    },
    headerTitle: {
        color: "#041B3E",
        fontFamily: font.bold,
        padding: spacing.s,
        textAlign: 'center',
        fontSize: 18,
    },
    headerImg: {
        height: 98,
        padding: 0,
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 8.35,
        shadowRadius: 5.84,
        elevation: 20,
    },
    clientTitle: {
        textAlign: 'center',
        marginVertical: spacing.x,
        color: '#041B3E',
        fontSize: 20,
        fontFamily: font.bold
    },
    txtClient: {
        color: '#041B3E',
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 10
    },
    clientMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth:1,
        borderRadius: 40,
        padding: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            // height: 12,
        },
        shadowOpacity: 0.58,
        // shadowRadius: 10,
        elevation: 4,
    },
    txtView: { flexDirection: 'row', marginTop: 10 },
    imgIcon: {
        marginLeft: spacing.x,
        marginVertical: 2
    },
    modalText: {
        // textAlign: 'center',
        padding: spacing.s,
        fontFamily: font.regular,
        fontSize: 15,
        fontWeight: '700',
        color: '#000000'
    },
    modallText: {
        // textAlign: 'center',
        padding: spacing.s,
        fontFamily: font.regular,
        fontSize: 15,
        fontWeight: '700',
        color: '#000000',
        marginLeft:-25
    },
    headingText: {
        // textAlign: 'center',
        padding: spacing.s,
        fontFamily: font.regular,
        fontSize: 18,
        fontWeight: '700',
        color: '#000000'
    },
    modalEmpView: {
        backgroundColor: '#CECECE',
        height: 1,
        width: '90%',
        alignSelf: 'center',
        marginHorizontal: 20
    },
    modalsideView:
    {
        flexDirection: 'row',
        padding: 10,
        marginLeft: spacing.x,
        //  backgroundColor: 'red' 
    },
    txtFieldView: {
        borderRadius: 10,
        borderColor: "#E4EFF2",
        borderWidth: 2,
        marginTop: spacing.x,
    },
    textboxfield: {
        backgroundColor: '#FFFFFF',
        // fontFamily: font.regular,
        fontWeight: "600",
        fontSize: 16,
        padding: spacing.xii,
        paddingHorizontal: 10,
        width: "80%",
        color: "#757588",
    },
    clientModalView:
    {
        flexDirection: 'row',
        padding: 5,
        borderColor: '#E4EFF2',
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 10

    },
    clientCount: {
        height: 25, width: 25,
        backgroundColor: '#E9F6FC',
        borderRadius: 30,
        marginTop: 12,
        justifyContent: 'center',
        alignContent: 'flex-end',
        marginLeft: "20%"

    }
})