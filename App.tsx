import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainStack from './src/stacks/mainStatck'


export default () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}