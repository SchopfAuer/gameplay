import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RectButtonProps } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";

export function ButtonAdd({ ...rest }: RectButtonProps) {
  return (
    <RectButton 
      style={styles.container}
      {...rest}
    >
    <MaterialCommunityIcons 
      name='plus'
      color={theme.colors.heading}
      size={24}
    />
    </RectButton>
  )
}
