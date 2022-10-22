import AppLoading from 'expo-app-loading';
import { ImageBackground, StyleSheet, Text, View, StatusBar, Image, PixelRatio, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Profiles, Icons, Themes } from '../../assets/Themes';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Body = () => {
  return (
      <View style={styles.body}>
        <View style={Themes.light.shadows}>
          <View style={styles.profileCard}>
            <ImageBackground
              style={styles.profileImg} 
              imageStyle={{ borderRadius: 10}}
              source={Profiles.mtl.image} >
                 <Text style={styles.name}>{Profiles.mtl.name}</Text> 
                 <Text style={styles.distance}>{Profiles.mtl.caption}</Text>
            </ImageBackground>
          </View>
        </View>
        <View style={Themes.light.shadows}>
          <View style={styles.audioBox}>
            <Text style={styles.audioText} >My hottest take</Text>
            <View style={styles.audioImgBox}>
              <Image 
              style={styles.playerImg}
              source={Icons.player.light} />
              <View style={styles.audioImgBox}>
                <Image 
                style={styles.audioImg}
                source={Icons.audioWave.light} />
              </View>
            </View>
          </View>
        </View>
        </View>
  );
}

export default Body;

const styles = StyleSheet.create({
  body: {
    width: windowWidth,
    height: windowHeight * 0.76,
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileCard: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  profileImg: {
    width: windowWidth * 0.65,
    height: windowWidth * 0.65 *  1.1,
    alignItems: 'flex-start',
    borderRadius: 10,
    resizeMode: 'contain'
  },
  name: {
    position: 'absolute',
    fontFamily: 'Sydney',
    fontSize: PixelRatio.getFontScale() * windowHeight * 0.045,
    margin: 10,
    color: Themes.light.textSecondary,
  },
  distance: {
    position: 'absolute',
    fontFamily: 'Sydney',
    fontSize: PixelRatio.getFontScale() * windowHeight * 0.025,
    bottom: 10,
    left: 10,
    color: Themes.light.textSecondary,
  },
  audioBox: {
    width: windowWidth * 0.65,
    height: windowWidth * 0.65 * 0.45,
    alignItems: 'flex-start',
    backgroundColor: Themes.light.bgSecondary,
    flexDirection: 'column',
    padding: 10,
    borderRadius: 25
  },
  audioText: {
    fontSize: PixelRatio.getFontScale() * windowHeight * 0.040,
    fontFamily: 'Sydney',
    padding: 5
  },
  audioImgBox: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  playerImg: {
    width: windowWidth * 0.125,
    height: windowWidth * 0.125,
    resizeMode: 'contain',
    padding: 4
  },
  audioImgbox: {
    width: windowWidth * 0.45,
    height: windowWidth * 0.125,
    margin: 5
  },
  audioImg: {
    width: windowWidth * 0.45,
    height: windowWidth * 0.125,
    resizeMode: 'contain',
    padding: 4
  }
});
