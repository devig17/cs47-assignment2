import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, PixelRatio, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from '../../assets/Themes';
import {Icons} from "../../assets/Themes";
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = () => {
  return (
    <View style={styles.header}>
        <Image 
          style={styles.image}
          source={Icons.menu.light}
        />
          <Text style={styles.name}>
            ensom
          </Text>
        <Image 
          style={styles.image}
          source={Icons.sun}
        />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: windowHeight * 0.10,
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 4,
    padding: 12
  },
  image: {
    height: windowHeight * 0.07,
    width: windowHeight * 0.07,
    padding: 24
  },
  name: {
    fontFamily: 'SydneyBold',
    fontSize: PixelRatio.getFontScale() * windowHeight * 0.05,
    flexDirection: 'row',
    alignItems: 'baseline'
  }
});