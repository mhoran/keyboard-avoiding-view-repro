import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';

export default class App extends React.Component {
  state = {
    margin: 0
  }

  onLayout = (event) => {
    console.log(event.nativeEvent.layout)
  }

  render() {
    return (
      <View onLayout={this.onLayout} style={styles.container}>
        <Animated.View />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});
