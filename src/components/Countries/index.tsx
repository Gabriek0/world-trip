import { Box, Flex, Text } from "@chakra-ui/react";
import { Countries } from "../../models/Continents";
import CountryCard from "./CountryCard";

interface CountriesProps {
  countries: Countries[];
}

function Countries({ countries }: CountriesProps) {
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
          flexWrap="wrap"
        >
          {countries &&
            countries.map((country) => (
              <CountryCard
                key={country.id}
                capital={country.capital}
                country={country.country}
                flag={country.flag}
                capitalImage={country.capitalImage}
              />
            ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Countries;
