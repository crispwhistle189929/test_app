
import React from 'react';
import {StyleSheet, SafeAreaView, Button, Text, FlatList} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title : "learn more", 
      isClicked: false,
    }
    this.fetchData = this.fetchData.bind(this);
  }
  
  //fetchData () {
    
  fetchData = async () => {
    const res = await fetch("https://reactnative.dev/movies.json");
    const json = await res.json();
    
    this.setState({isClicked: true});
    this.setState({title: 'Data fetched!'});
  }
  
  render() {
    const {data} = this.state;

    return(
      <SafeAreaView style = {styles.container}>
        <Button
          disabled = {this.state.isClicked} 
          onPress = {this.fetchData} 
          title = {this.state.title} >
        </Button>
        {isClicked ? <Text />: (
        <FlatList
          data = {data}
          keyExtractor = {({id}, index) => id}
          renderItem = {({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
      </SafeAreaView>
    );
  }

}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray',
    padding: 100,
  },

});
