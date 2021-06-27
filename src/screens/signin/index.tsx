import React, {useContext} from "react";
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator
} from "react-native";
// import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/auth";

import IllustrarionImg from '../../assets/illustration.png'
import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";

export function Signin() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try{
      await signIn()
    } catch (error) {
      Alert.alert( error )
    }
  }
  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrarionImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'}
            e organize suas{'\n'}
            jogatinas
          </Text>

          <Text style={styles.subtitle} >
            Crie grupos para jogar seus games{'\n'}
            favoritos com seus amigos
          </Text>

          {
            loading ? <ActivityIndicator color={theme.colors.primary} />
            :
            <ButtonIcon 
              title="Entrar com Discord"
              onPress={handleSignIn}
            />
          }
          
        </View>
      </View>
    </Background>
  )
}