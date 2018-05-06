import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  
  onPressGimmeSammie = (sammie) => {
    this.setState({text: `yeah i like ${sammie}`})
  }
   
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://indianakitchen.com/wp-content/uploads/2015/03/Ham-Sandwich-180x180.jpg'}} />
        <Text>GRAMWICH</Text>
        <Text>So do you like sandwiches?</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <FlatList
          data={[{key: 'Yummy Sammie'}, {key: 'Gross Sammie'}]}
          renderItem={({item}) => <View><Text>{item.key}</Text><Button onPress={()=> this.onPressGimmeSammie(item.key)} title="Gimme That Sammie" color="#841584"/></View>}
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
  },
});
