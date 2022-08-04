import { Box, Flex, HStack, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import Header from "../../components/Header";

import Countries from "../../components/Countries";

function ContinentPage() {
  return (
    <Flex flexDirection="column">
      <Header />

      <Flex
        h={["40", "sm", "sm", "sm", "sm", "lg"]}
        bg="url(/europe-london.png)"
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
            Europa
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
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
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
                50
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
                60
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

      <Countries />
    </Flex>
  );
}

export default ContinentPage;
