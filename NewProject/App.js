/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Video from 'react-native-video'

const App=()=>{
	return (
		<View>
			<Text>
				hello world
			</Text>
			<Video
                source={{uri:'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1'}}   
                style={styles.backgroundVideo}
                muted={false}
                repeat={true}
                volume={1.0}
                rate={1.0}/>
		</View>
	);
};

const styles= StyleSheet.create({
    backgroundVideo: {
		alignItems: 'stretch',
		position: 'relative',
        width:350,
        height:300,
		
		
		
       
      }    
});

export default App;
