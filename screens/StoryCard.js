import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import {RFValue} from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Image 
            source = {require("../assets/story_image_1.png")}
            style= {styles.storyImage}>

            </Image>
            
            <View style = {styles.titleContainer}>

              <Text style = {styles.storyTitleText}>
                {this.props.story.author}
              </Text>

              <Text style = {style.storyDescription}>
              {this.props.story.description}
              </Text>
              
            </View>

            <View style = {styles.actionContainer}>
              <View style = {styles.likeButton}>
                <Ionicons name = {"heart"} size = {RFValue(30)} colour = {"white"}/>
                <Text style = {styles.likeText}>
                  12K
                </Text>
              </View>
            </View>

          </View>
          <Text style={{ color: "white" }}>Story Card!</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
