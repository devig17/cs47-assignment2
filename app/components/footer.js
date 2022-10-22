import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, Image, PixelRatio} from 'react-native';
import { useFonts } from 'expo-font';
import {Icons} from '../../assets/Themes'
import { Themes } from '../../assets/Themes';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const iconNames = {
    discover: 'Discover',
    matches: 'Matches',
    dms: 'DMs',
};

const NavIcon = ({ imageSource, name }) => {
    return (
      <View style={styles.navBox}>
          <Image 
              style={styles.image}
              source= {imageSource}
          />
          <Text style={styles.name}>{name}</Text>
  
      </View>
    );
  }

const Footer = () => {
    return (
        <View style={styles.footer}>
            <NavIcon 
            imageSource={Icons.discover.light}
            name = {iconNames.discover}
            />
            <NavIcon 
            imageSource={Icons.heart.light}
            name = {iconNames.matches}
            />
            <NavIcon 
            imageSource={Icons.messages.light}
            name = {iconNames.dms}
            />
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
   footer: {
    height: windowHeight * 0.12,
    width: windowWidth,
    backgroundColor: Themes.light.navigation,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    },
  image: {
    height: windowHeight * 0.05,
    width: windowHeight * 0.05,
    padding: 8,
  },
  name: {
    fontFamily: 'Sydney',
    fontSize: PixelRatio.getFontScale() * windowHeight * 0.02,
    color: Themes.light.textSecondary,
  },
  navBox: {
    flexDirection: 'column',
    alignItems: 'center'
  }
});
