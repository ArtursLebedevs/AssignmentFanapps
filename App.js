import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';

const App: () => Node = () => {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Sākums</Text>
      </View>
      {/* Small line after header */}
      <View style={styles.header2}></View>
      {/* Margin border */}
      <View style={styles.body2}>
        {/* Centering elements */}
        <View style={styles.bodyCenter}>
          {/* Hero image */}
          <View style={styles.heroContainer}>
            <ImageBackground
              style={{
                flex: 1,
                height: undefined,
                width: undefined,
                resizeMode: 'contain',
                borderRadius: 10,
                backgroundColor: 'rgba(0,0,0, 0.8)',
                opacity: 0.6,
                overflow: 'hidden',
              }}
              source={require('./images/hero.png')}></ImageBackground>

            <View style={styles.heroTextContainer}>
              <Text style={styles.heroDateText}>JUL 14TH, 2020</Text>
              <Text style={styles.heroUpperText}>JAUNĀKIE JAUNUMI</Text>
              <Text style={styles.heroMainText}>
                Preses Konference & Dainis Kazakevičs izlases Galvenais Treneris
              </Text>
            </View>
          </View>
          {/* Div with warning icon */}
          <View style={styles.warningContainer}>
            <View style={styles.warningIconContainer}>
              <Image
                style={styles.warningIcon}
                source={require('./images/warning.png')}
              />
            </View>
            <Text style={styles.warningText}>
              Lff Atceļ Papildu Ierobežojumus Spēļu Apmeklēšanas Noteikumos
            </Text>
          </View>
        </View>
        {/* Cards */}
        <View style={styles.card}>
          <View>
            <Image
              style={styles.cardImage}
              source={require('./images/news-2.jpg')}
            />
            <Text style={styles.cardText}>
              Meiteņu Turnīrā Gulbenē Uzvar Viešņas No Igaunijas
            </Text>
          </View>
          <View>
            <Image
              style={styles.cardImage}
              source={require('./images/news-1.jpg')}
            />
            <Text style={styles.cardText}>
              Aizvadīts Pirmais "ādas Bumbas" Sabraukums
            </Text>
          </View>
        </View>
        <View style={styles.body2}>
          {/* Social */}
          <View style={styles.social}>
            <View style={styles.socialContainer}>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://www.twitter.com/')}>
                <Image
                  style={styles.socialIcon}
                  source={require('./images/twitter.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.socialContainer}>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://www.facebook.com/')}>
                <Image
                  style={styles.socialIcon}
                  source={require('./images/facebook.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.socialContainer}>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://www.instagram.com/')}>
                <Image
                  style={styles.socialIcon}
                  source={require('./images/instagram.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.socialContainer}>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://www.youtube.com/')}>
                <Image
                  style={styles.socialIcon}
                  source={require('./images/youtube.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  /*The background color of the whole page*/
  body: {
    backgroundColor: '#d3d3d3',
    margin: 0,
  },
  /*Header section*/
  header: {
    backgroundColor: '#7A1712',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  header2: {
    backgroundColor: '#981003',
    padding: 5,
    marginBottom: 30,
  },
  titleText: {
    color: '#dcdcdc',
    fontSize: 25,
    fontWeight: 'bold',
  },

  body2: {
    marginLeft: 10,
    marginRight: 10,
  },

  bodyCenter: {
    display: 'flex',
    alignItems: 'center',
  },

  /*Hero image*/
  heroContainer: {
    width: '95%',
    height: 200,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },

  heroTextContainer: {
    position: 'absolute',
  },

  heroDateText: {
    color: '#dcdcdc',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 30,
    padding: 7,
    paddingLeft: 15,
    width: 125,
    backgroundColor: '#981003',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  heroUpperText: {
    color: '#dcdcdc',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 25,
  },

  heroMainText: {
    color: '#dcdcdc',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    width: 250,
  },

  /*Div with warning icon*/
  warningIconContainer: {
    backgroundColor: '#981003',
    width: 60,
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  warningContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  warningIcon: {
    backgroundColor: '#981003',
    height: 30,
    width: 30,
  },

  warningText: {
    height: 70,
    width: 295,
    backgroundColor: '#F5F5F5',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 17,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    color: 'black',
  },

  /*Cards*/
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  cardImage: {
    height: 100,
    width: 170,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },

  cardText: {
    padding: 10.1,
    maxHeight: 70,
    maxWidth: 170,
    backgroundColor: '#F5F5F5',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  /*Social*/
  social: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 40,
  },

  socialContainer: {
    backgroundColor: '#F5F5F5',
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  socialIcon: {
    height: 40,
    width: 40,
  },
});

export default App;
