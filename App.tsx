import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import HeaderTabs from './src/components/HeaderTabs';

const App = () => {
  const [activeTab, setActiveTab] = useState("Delivery")

  return (
    <View>
      <Home activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  )
}

export default App