import { View, StyleSheet,SafeAreaView,ScrollView } from 'react-native';
import SimpleCommentApp from './SimpleCommentApp';

import MessageApp from './MessageApp';
export default function App(){
  return(
  
    <SafeAreaView style={styles.container}>

       <SimpleCommentApp/>
           <MessageApp/>
</SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container:{flex: 1}
})