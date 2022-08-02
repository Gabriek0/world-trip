import { Box, Flex, Image, Text } from "@chakra-ui/react";

function CountryCard() {
  return (
    <Flex h="72" w="64" borderTopRadius={8} flexDir="column">
      <Box overflow="hidden" h="40" w="100%">
        <Image src="/london.png" h="100%" w="100%" />
      </Box>
      <Flex
        h="28"
        py="4"
        px="6"
        alignItems="center"
        justify="space-between"
        borderX="2px solid rgba(255, 186, 8, 0.5)"
        borderBottom="2px solid rgba(255, 186, 8, 0.5)"
      >
        <Flex h="100%" flexDir="column" justify="space-between">
          <Text fontWeight="600" color="gray.400" fontSize={["sm", "lg"]}>
            Londres
          </Text>

          <Text fontWeight="500" color="gray.300" fontSize={["lg"]}>
            Reino Unido
          </Text>
        </Flex>
        <Flex>
          <Image borderRadius="full" h="8" w="8" src="/england.png" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CountryCard;
