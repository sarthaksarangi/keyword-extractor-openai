import React from 'react'
import { useState } from 'react'
import { Textarea, Button, useToast } from '@chakra-ui/react'

const TextInput = ({extractKeywords}) => {

const [text, setText] = useState('');

const toast = useToast();
const submitText = () => {
 if(text===''){
    toast({
      title: 'Text field is empty',
      description:'Please enter some text to extract keywords',
      status: 'error',
      duration: 5000,
      isClosable: false,
    })
 }else{
  extractKeywords(text);
 }
}

  return (
    <>
    <Textarea
    bg='#e9c46a'
    color='black'
    padding={5}
    marginTop={6}
    height={200}
    value={text}
    onChange={(e) => setText(e.target.value)}
    
    />
    <Button
    bg='#f03248'
    color='white'
    marginTop={4}
    width='100%'
    _hover={{ bg: '#000000' }}
    onClick={submitText}
    
    >
      Extract Keywords
    </Button>

    
    </>
      
    
  )
}

export default TextInput
