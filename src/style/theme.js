import { MD3LightTheme as DefaultTheme, configureFonts } from "react-native-paper"
import { colors } from "./colors"

export const DefaultTheme = {
    ...DefaultTheme,

    fonts: configureFonts({config: {fontFamily: 'KGPrimaryPenmanshipAlt'}}),

    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        secondary: colors.secondary,
    },
}
