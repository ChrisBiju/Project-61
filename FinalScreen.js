import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppHeader from '../components/AppHeader';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  goToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  school = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity onPress={this.schoolcount}>
          <Text style={{ marginTop: 50, marginLeft: 70 }}>
            Present: {this.state.count}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.schoolcount}>
          <Text style={{ marginTop: -20, marginLeft: 220 }}>
            Absent: {this.state.count}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.goToHomeScreen}
          style={[styles.button, { backgroundColor: 'lightgreen' }]}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 55,
    marginLeft: 75,
    borderWidth: 2,
    borderColor: '()',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 15,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
