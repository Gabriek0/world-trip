import { useRouter } from "next/router";

import { Box, Flex, HStack, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

import Header from "../../components/Header";
import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../services/api";
import Countries from "../../components/Countries";
import { Continents } from "../../models/Continents";

interface ContinentPageProps {
  continent: Continents[];
}

function ContinentPage({ continent }: ContinentPageProps) {
  return (
    <Flex flexDirection="column">
      <Header />

      <Flex
        h={["40", "sm", "sm", "sm", "sm", "lg"]}
        bg={`url(${continent[0].image})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        px={["6", "6", "12", "32"]}
        py={["6", "6", "6", "12"]}
      >
        <Flex
          h="100%"
          w="100%"
          justifyContent={["center", "normal"]}
          alignItems={["center", "flex-end"]}
        >
          <Text color="gray.100" fontSize={["4xl", "5xl"]} fontWeight="600">
            {continent[0].name}
          </Text>
        </Flex>
      </Flex>

      <Flex
        py={["4", "12", "12", "20"]}
        px={["8", "8", "8", "32"]}
        justify="center"
      >
        <Flex
          w={1440}
          align="center"
          justify="space-between"
          flexDirection={["column", "column", "column", "row"]}
        >
          <Box
            w={["100%", "100%", "100%", null, "lg", "3xl"]}
            pb={["8", null, "8", "0"]}
          >
            <Text lineHeight="8" textAlign="justify" fontSize={["18", "20"]}>
              {continent[0].information}
            </Text>
          </Box>
          <HStack spacing="8" px={["0", "0", "8"]}>
            <Box>
              <Text
                fontSize={["32", "48", null, null, "48", "64"]}
                fontWeight="600"
                color="yellow"
                textAlign="center"
              >
                {continent[0].countryNumber}
              </Text>
              <Text
                fontWeight="600"
                color="gray.400"
                fontSize={["14", "20", "24"]}
              >
                países
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={["32", "48", null, null, "48", "64"]}
                fontWeight="600"
                color="yellow"
                textAlign="center"
              >
                {continent[0].languageNumber}
              </Text>
              <Text
                fontWeight="600"
                color="gray.400"
                fontSize={["14", "20", "24"]}
              >
                línguas
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={["32", "48", null, null, "48", "64"]}
                fontWeight="600"
                color="yellow"
                textAlign="center"
              >
                24
              </Text>
              <Text
                display="inline-flex"
                alignItems="center"
                fontWeight="600"
                color="gray.400"
                fontSize={["14", "20", "24"]}
              >
                cidades + 100
                <Tooltip
                  label="+100 cidades"
                  placement="bottom-end"
                  closeDelay={200}
                >
                  <InfoOutlineIcon ml="2" h={["3", "4"]} w={["3", "4"]} />
                </Tooltip>
              </Text>
            </Box>
          </HStack>
        </Flex>
      </Flex>

      <Countries countries={continent[0].countries!} />
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get(`/continents`);

  const continents: Continents[] = await response.data;

  const paths = continents.map((path: Continents) => ({
    params: {
      shortcut: path.shortcut,
    },
  }));

  return {
    paths,
    fallback: true, // ?
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await api.get(`/continents?shortcut=${params?.shortcut}`);
  const continent = await response.data;

  return {
    props: {
      continent,
    },
  };
};

export default ContinentPage;
