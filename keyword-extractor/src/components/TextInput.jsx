import React from 'react'
import { useState } from 'react'
import { Textarea, Button, useToast } from '@chakra-ui/react'

const TextInput = () => {

const [text, setText] = useState('');

  return (
    <>
    <Textarea
    bg='blue.400'
    color='white'
    padding={5}
    marginTop={6}

    
    >


    </Textarea>
    </>
      
    
  )
}

export default TextInput
