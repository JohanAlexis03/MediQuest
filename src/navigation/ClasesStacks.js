import react from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ClasesScreen from "../screens/ClasesScreen";
import {colors} from "../theme";

const Stack = createNativeStackNavigator();

export default function ClasesStacks() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Home" 
            component={ClasesScreen}
            options={{headerShown:false}}
            />
            //aca se pueden agregar mas pantallas al stack de clases
        </Stack.Navigator>
    )

}

