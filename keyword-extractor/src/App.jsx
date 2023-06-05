import React from 'react'
import { useState } from 'react'

import {Container ,Box} from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import TextInput from './components/TextInput'
const App = () => {
  const [keywords, setKeywords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading,setLoading] = useState(false);


const extractKeywords = async(text) => {
  setLoading (true);
  setIsOpen(true);

  const options ={
    method : 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,

    },
    body: JSON.stringify({
     model: 'text-davinci-003',
     prompt:'Extract keywords from the following text. Make the first letter of each word uppercase and separate with commas\n\n'+ text +'',
      temperature: 0.5, //controls the randomness of predictions ragne =(0,1)
      max_tokens: 60,//number of words to generate after prompt
      frequency_penalty: 0.8,//higher means repeating words are less likely
    }),
  }
 
 
  const response = await fetch(
    import.meta.env.VITE_OPENAI_API_URL, options
    );
  const json = await response.json();
  console.log(json.choices[0].text.trim());
  setKeywords(json.choices[0].text.trim());
  setLoading(false);
 
  

}



  return (
    <Box bg = '#264653' color='white' height='100vh' paddingTop={130}>
<Container maxW = '3xl' centerContent='true'>
<Header/>
<TextInput extractKeywords={extractKeywords} />
<Footer/>
</Container>
    </Box>
   
  )
}

export default App
