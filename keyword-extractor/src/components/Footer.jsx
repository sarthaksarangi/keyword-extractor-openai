import React from 'react'
import {Box, Image, Text,Flex} from '@chakra-ui/react'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <>
    <Box marginTop ={50}>
        <Flex justifyContent='center' alignItems='center'>
            <Image src={logo} marginRight={1} width={7} />
            <Text>
                Powered by OpenAI
            </Text>

            
            </Flex>

    </Box>
    
    </>
  )
}

export default Footer
