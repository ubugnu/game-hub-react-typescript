import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import React from 'react'

const ColorModSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme='green' isChecked={colorMode==='dark'} onChange={toggleColorMode} />
      <Text>{ colorMode } Mode</Text>
    </HStack>
  )
}

export default ColorModSwitch