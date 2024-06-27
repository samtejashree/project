import { StyleSheet, Text, View, Button } from 'react-native';

const name = 'teju';
let age = 24;
var email = 'teju@gmail.com';
function fruit() {
  return "apple";
}
export default function Text1(){
    return(
<View style={styles.container}>
    <Text style={styles.title}>Hello world!</Text>
    <Text style={{ fontSize: 30 }}>{name}</Text>
    <Text style={{ fontSize: 20 }}>{age}</Text>
    <Button title='press me'></Button>
    <Text style={{ fontSize: 20 }}>{email}</Text>
    <Text style={{ fontSize: 20 }}>{100 / 20}</Text>
    <Text style={{ fontSize: 30 }}>{fruit()}</Text>
</View>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        backgroundColor: 'green',
        color: '#fff',
      },
})  