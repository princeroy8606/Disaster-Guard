import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Styles/auth-styles/authStyle';
import theme from '../../assets/theme/theme';

const Landing: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("login");
  };

  return (
    <View style={styles.landingCnt}>
      <ImageBackground style={styles.landingImg} source={theme.images.landingBg} resizeMode="contain">
        <Text style={styles.landingText}>DISASTER GAURD</Text>
        <View style={styles.landingBtn_Cnt}>
          <TouchableOpacity style={styles.landingBtn} onPress={handleNavigation}>
            <Text style={styles.landingBtn_Text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.landingBtn, { backgroundColor: theme.colors.primaryDark }]}>
            <Text style={styles.landingBtn_Text}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Landing;
