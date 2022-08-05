import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CountryCardProps {
  country: string;
  capital: string;
  flag: string;
  capitalImage: string;
}

function CountryCard({
  country,
  capital,
  flag,
  capitalImage,
}: CountryCardProps) {
  return (
    <Flex h="72" w="64" borderTopRadius={8} flexDir="column">
      <Box overflow="hidden" h="40" w="100%">
        <Image src={capitalImage} h="100%" w="100%" />
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
            {capital}
          </Text>

          <Text fontWeight="500" color="gray.300" fontSize={["lg"]}>
            {country}
          </Text>
        </Flex>
        <Flex>
          <Image borderRadius="full" h="8" w="8" src={flag} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CountryCard;
