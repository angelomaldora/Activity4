import { View, Text, Image,StatusBar, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
import { ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import * as Speech from 'expo-speech';


export default function Home({ route }) {
  const receivedData = route.params?.data;
  const animation = useRef(null);
  const navigation = useNavigation();
  const speak = () => {
    Speech.speak('Hi! ' + receivedData + 'Welcome To React Native Components. React Native is a popular framework for building mobile applications. It allows you to create mobile apps for both iOS and Android using JavaScript and React. With React Native, you can build high-quality, native-like mobile experiences while sharing a single codebase. Enjoy exploring the world of mobile app development with React Native!');
  };

  useEffect(() => {
    speak();
  }, []);

  return (
    <>
    <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Image
          source={require("../src/acc.png")} 
          style={{ width: 30, height: 30 }} 
        />
        <View style={styles.space}>
        <Text style={styles.hi}>Hi! {receivedData}</Text>
        </View>
        <Image
          source={require("../src/search.png")} 
          style={{ width: 30, height: 30 }} 
        />
        <Image
          source={require("../src/menu-burger.png")} 
          style={{ width: 30, height: 30 }} 
        />
      </View>
      <View style={styles.body}>
        
        <View style={styles.body1}>
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 150,
              height: 150,
              backgroundColor: "white",
              marginTop: 5,
            }}
            source={require("../assets/logos.json")}
          />
        </View>

        <ScrollView>
          <View style={styles.body1}>
            <TouchableOpacity style={styles.body2} onPress={() => navigation.navigate('Web')}>
              <View style={styles.icons}>
                <Image
                  source={require("../src/icon.png")} 
                  style={{ width: 100, height: 80 }} 
                />
              </View>
              <Text style={styles.h2}></Text>
              <Text style={styles.h2}>WebView</Text>
              <Text style={styles.h2}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.body2} onPress={() => navigation.navigate('Screen2')}>
              <View style={styles.icons}>
                <Image
                  source={require("../src/icon.png")} 
                  style={{ width: 100, height: 80 }} 
                />
              </View>
              <Text style={styles.h2}></Text>
              <Text style={styles.h2}>Map</Text>
              <Text style={styles.h2}></Text>
        
            </TouchableOpacity>
          </View>
          <View style={styles.body1}>
          <TouchableOpacity style={styles.body2} onPress={() => navigation.navigate('Screen3')}>
              <View style={styles.icons}>
                <Image
                  source={require("../src/icon.png")} 
                  style={{ width: 100, height: 80 }} 
                />
              </View>
              <Text style={styles.h2}></Text>
              <Text style={styles.h2}>Touchable</Text>
              <Text style={styles.h2}></Text>
             
            </TouchableOpacity>
            <TouchableOpacity style={styles.body2} onPress={() => navigation.navigate('FlatList')}>
              <View style={styles.icons}>
                <Image
                  source={require("../src/icon.png")} 
                  style={{ width: 100, height: 80 }} 
                />
              </View>
              <Text style={styles.h2}></Text>
              <Text style={styles.h2}>FlatList</Text>
              <Text style={styles.h2}></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body1}>
            <TouchableOpacity style={styles.body2} onPress={() => navigation.navigate('View')}>
              <View style={styles.icons}>
                <Image
                  source={require("../src/icon.png")} 
                  style={{ width: 100, height: 80 }} 
                />
              </View>
              <Text style={styles.h2}></Text>
              <Text style={styles.h2}>ViewPager</Text>
              <Text style={styles.h2}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.body2} onPress={() => navigation.navigate('Svg')}>
              <View style={styles.icons}>
                <Image
                  source={require("../src/icon.png")} 
                  style={{ width: 100, height: 80 }} 
                />
              </View>
              <Text style={styles.h2}></Text>
              <Text style={styles.h2}>SVG</Text>
              <Text style={styles.h2}></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body1}>
          <TouchableOpacity style={styles.body2} onPress={() => navigation.navigate('Video')}>
              <View style={styles.icons}>
                <Image
                  source={require("../src/icon.png")} 
                  style={{ width: 100, height: 80 }} 
                />
              </View>
              <Text style={styles.h2}>Video</Text>
              <Text style={styles.h2}>Video Thumbnails</Text>
              <Text style={styles.h2}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.body2} onPress={() => navigation.navigate('Screen4')}>
              <View style={styles.icons}>
                <Image
                  source={require("../src/icon.png")} 
                  style={{ width: 100, height: 80 }} 
                />
              </View>
              <Text style={styles.h2}>Collapse</Text>
              <Text style={styles.h2}>Carousel</Text>
              <Text style={styles.h2}></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body1}>
            <TouchableOpacity style={styles.body2} onPress={() => navigation.navigate('Screen5')}>
              <View style={styles.icons}>
                <Image
                  source={require("../src/icon.png")} 
                  style={{ width: 100, height: 80 }} 
                />
              </View>
              <Text style={styles.h2}>Switch</Text>
              <Text style={styles.h2}>Spinner</Text>
              <Text style={styles.h2}>Slider</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={styles.body2} onPress={() => navigation.navigate('Screen1', {data: receivedData})}>
              <View style={styles.icons}>
                <Image
                  source={require("../src/icon.png")} 
                  style={{ width: 100, height: 80 }} 
                />
              </View>
              <Text style={styles.h2}>Alert</Text>
              <Text style={styles.h2}>PopUp</Text>
              <Text style={styles.h2}>Toast</Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </View>
    </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    flexDirection: "row",
    paddingTop: 10,
    gap: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomColor: "black",
    borderBottomWidth: 0.4,
  },
  body: {
    flex: 1,
    padding: 5,
  },
  space: {
    flex: 1,
    justifyContent: 'center'
  },
  hi: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#0b093a',
    textDecorationLine: 'underline',
  },
  h2: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#797979'
  },
  body1: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    gap: 5
  },
  body2: {
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 10,
    elevation: 5,
    marginBottom: 5,
    flex: 1,
  },
  icons:{
    backgroundColor: '#0b093a',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
});
