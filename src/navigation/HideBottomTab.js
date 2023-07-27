import { useNavigation } from "@react-navigation/native";
const HideBottomTab = () => {
const navigation = useNavigation();
    const grandparentNavigation = navigation.getParent("rootNavigator");

    if (grandparentNavigation) {
        const screenOptions = {
            tabBarStyle: { display: "none" },
        };
        try {
            grandparentNavigation.setOptions(screenOptions);
        } catch (error) {
            console.log("Error occurred while setting options:", error);
        }
    } else {
        console.log("grandparentNavigation is null or undefined");
    }

    return () => {
        if (grandparentNavigation) {
            const screenOptions = {
                tabBarStyle: { backgroundColor: "#FCFDFF", height: 80 },
            };
            try {
                grandparentNavigation.setOptions(screenOptions);
            } catch (error) {
                console.log("Error occurred while setting options:", error);
            }
        }
    };

}

export default HideBottomTab;



