import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'

interface HomeProps {
  activeTab: string;
  setActiveTab: (value: string) => void
}

const Home:React.FC<HomeProps> = ({ activeTab, setActiveTab }) => {
  return (
    <View>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  )
}

export default Home
