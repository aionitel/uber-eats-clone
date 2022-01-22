import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { HeaderContext, HeaderProvider } from '../context/HeaderContext'

const HeaderTabs: React.FC = () => {

  return (
    <HeaderProvider>
      <SafeAreaView style={{ flexDirection: 'row', alignSelf: 'center'}}>
        <HeaderTab text='Delivery' />
        <HeaderTab text='Pickup' />
      </SafeAreaView>
    </HeaderProvider>
  )
}

interface HeaderTabProps {
  text: string;
}

const HeaderTab: React.FC<HeaderTabProps> = ({ text }) => {
  return (
    <View style={{
      backgroundColor: text === 'Delivery' ? 'black' : 'white',
      borderRadius: 30,

    }}>
      <Text style={{ 
        fontWeight: 'bold',
        fontSize: 15, 
        color: text === 'Delivery' ? 'white' : 'black',
        paddingHorizontal: 12,
        paddingVertical: 7
        }}
        >
        {text}</Text>
    </View>
  )
}

export default HeaderTabs