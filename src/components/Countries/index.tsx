import { Box, Flex, Text } from "@chakra-ui/react";
import CountryCard from "./CountryCard";

function Countries() {
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      px={["8", "8", "8", "32"]}
      py={["4", "8"]}
    >
      <Flex w={1440} flexDir="column">
        <Text
          fontSize={["28", "32", null, null, "48"]}
          fontWeight="500"
          color="gray.400"
          py="8"
        >
          Cidades +100
        </Text>

        <Flex
          w="100%"
          gap="4"
          flexDir={["column", "column", "row"]}
          align="center"
        >
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Countries;
