import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { HeaderContext, HeaderProvider } from '../context/HeaderContext'

interface HeaderTabsProps {
  activeTab: string,
  setActiveTab: (value: string) => void
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ activeTab, setActiveTab }) => {

  return (
    <HeaderProvider>
      <SafeAreaView style={{ flexDirection: 'row', alignSelf: 'center'}}>
        <HeaderTab text='Delivery' activeTab={activeTab} setActiveTab={setActiveTab} />
        <HeaderTab text='Pickup' activeTab={activeTab} setActiveTab={setActiveTab} />
      </SafeAreaView>
    </HeaderProvider>
  )
}

interface HeaderTabProps {
  text: string;
  activeTab: string;
  setActiveTab: (value: string) => void
}

const HeaderTab: React.FC<HeaderTabProps> = ({ text, activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: activeTab === text ? 'black' : 'white',
      borderRadius: 30,
      marginTop: 5
    }}
      onPress={() => setActiveTab(text)}
      >
      <Text style={{ 
        fontWeight: 'bold',
        fontSize: 20, 
        color: activeTab === text ? 'white' : 'black',
        paddingHorizontal: 20,
        paddingVertical: 7
        }}
        >
        {text}</Text>
    </TouchableOpacity>
  )
}

export default HeaderTabs