//Next
import type { NextPage } from 'next'

// Chakra
import { Flex } from '@chakra-ui/react'

// Components
import Header from '../components/Header'
import Banner from '../components/Banner'
import Attractions from '../components/Attractions'

const Home: NextPage = () => {
  return (
    <Flex
      h="100vh"
      w="100vw"
      bg="gray.100"
      flexDirection="column"
    >
      <Header />
      <Banner />
      <Attractions />
    </Flex>
  )
}

export default Home
