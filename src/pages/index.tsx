//Next
import type { NextPage } from "next";

// Chakra
import { Flex } from "@chakra-ui/react";

// Components
import Header from "../components/Header";
import Banner from "../components/Banner";
import Attractions from "../components/Attractions";
import Swiper from "../components/Swiper";
import Head from "../components/Head";

const Home: NextPage = () => {
  return (
    <Flex h="100vh" w="100%" bg="gray.100" flexDirection="column">
      <Header />
      <Head title="Home" />
      <Banner />
      <Attractions />
      <Swiper />
    </Flex>
  );
};

export default Home;
