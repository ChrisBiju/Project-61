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


  goToFinalScreen = () => {
    this.props.navigation.navigate('FinalScreen');
  };

  schoolcount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View>
        <AppHeader />

        <Text style={styles.Name}>1. Aayush</Text>
        <Text style={styles.Name}>2. Aditya </Text>
        <Text style={styles.Name1}>3. Rubin</Text>

        <TouchableOpacity
          onPress={this.schoolcount}
          style={{
            marginLeft: 130,
            marginTop: -160,
            borderWidth: 2,
            borderColor: '()',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            height: 40,
            backgroundColor: 'lightgreen',
          }}>
          <Text style={styles.Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.schoolcount}
          style={{
            marginTop: -40,
            marginLeft: 230,
            borderWidth: 2,
            borderColor: '()',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            height: 40,
            backgroundColor: 'red',
          }}>
          <Text style={styles.Text} onPress={this.schoolcount}>
            Absent
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.schoolcount}
          style={{
            marginLeft: 130,
            marginTop: 20,
            borderWidth: 2,
            borderColor: '()',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            height: 40,
            backgroundColor: 'lightgreen',
          }}>
          <Text style={styles.Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.schoolcount}
          style={{
            marginTop: -40,
            marginLeft: 230,
            borderWidth: 2,
            borderColor: '()',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            height: 40,
            backgroundColor: 'red',
          }}>
          <Text style={styles.Text}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.schoolcount}
          style={{
            marginLeft: 130,
            marginTop: 30,
            borderWidth: 2,
            borderColor: '()',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            height: 40,
            backgroundColor: 'lightgreen',
          }}>
          <Text style={styles.Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.schoolcount}
          style={{
            marginTop: -40,
            marginLeft: 230,
            borderWidth: 2,
            borderColor: '()',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            height: 40,
            backgroundColor: 'red',
          }}>
          <Text style={styles.Text}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.goToFinalScreen}
          style={{
            marginTop: 40,
            borderColor: '()',
            alignItems: 'center',
            justifyContent: 'center',
            width: 333,
            height: 45,
            backgroundColor: 'yellow',
          }}>
          <Text
            style={{
              fontSize: 27,
              textAlign: 'center',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Name: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginRight: 220,
    marginTop: 40,
  },
  Name1: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginRight: 230,
    marginTop: 40,
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
