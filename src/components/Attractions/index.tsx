import { Box, Divider, Flex, Grid, GridItem, HStack, Text, useMediaQuery } from "@chakra-ui/react";
import { BeachIcon, BuildingIcon, CocktailIcon, MuseumIcon, WorldIcon } from "../../icons";
import Miniature from "./Miniature";

function Attractions() {
    const [isLargeThan1048] = useMediaQuery("(min-width: 1048px)");

    if (isLargeThan1048) {
        return (
            <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mt="16"
                py="10"
                px="10"
            >
                <HStack
                    spacing="32"
                    pb="6"
                >
                    <Miniature icon={<CocktailIcon />} text="vida noturna" />
                    <Miniature icon={<BeachIcon />} text="praia" />
                    <Miniature icon={<BuildingIcon />} text="moderno" />
                    <Miniature icon={<MuseumIcon />} text="clássico" />
                    <Miniature icon={<WorldIcon />} text="e mais..." />
                </HStack>

                <Divider
                    w="20"
                    background="black"
                />
            </Flex>
        )
    }

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"

            py={4}
        >
            <Grid
                p={[8, 4]}
                templateColumns="repeat(3, 1fr)"
                alignSelf="center"
            >
                <GridItem>
                    <Miniature icon={<CocktailIcon />} text="vida noturna" />
                </GridItem>

                <GridItem
                    colStart={3}
                >
                    <Miniature icon={<BeachIcon />} text="praia" />
                </GridItem>

                <GridItem>
                    <Miniature icon={<BuildingIcon />} text="moderno" />
                </GridItem>

                <GridItem
                    colStart={3}
                >
                    <Miniature icon={<MuseumIcon />} text="clássico" />
                </GridItem>

                <GridItem
                    colStart={2}
                >
                    <Miniature icon={<WorldIcon />} text="e mais..." />
                </GridItem>
            </Grid>

            <Divider
                w="20"
                background="black"
            />

            <Box
                fontWeight="600"
                fontSize="20"
                textAlign="center"
                py={6}
                px={4}
            >
                <Text
                    color="gray.600"
                >
                    Vamos nessa?
                </Text>
                <Text
                    color="gray.600"
                >
                    Então escolha seu continente
                </Text>
            </Box>


        </Flex>
    );
};

export default Attractions;