import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList } from 'react-native';
import { SANDWICHES } from './sandwiches.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Current Sandwich: NONE' };
  }
  
  onPressGimmeSammie = (sammie) => {
    this.setState({text: `Current Sandwich: ${sammie}`})
  }
   
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://indianakitchen.com/wp-content/uploads/2015/03/Ham-Sandwich-180x180.jpg'}} />
        <Text>GRAMWICH</Text>
        <Text>{this.state.text}</Text>
        <FlatList
          data={SANDWICHES}
          renderItem={({item}) => {
            return (
              <View>
                <Text>{item.name}</Text>
                <Image source={require('./img/balogna.png')}/>
                <Button onPress={()=> this.onPressGimmeSammie(item.name)} title="Gimme That Sammie" color="#841584"/>
              </View>
            )
          }} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
});
