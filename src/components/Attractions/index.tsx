import { Flex, HStack } from "@chakra-ui/react";
import { BeachIcon, BuildingIcon, CocktailIcon, MuseumIcon, WorldIcon } from "../../icons";
import Miniature from "./Miniature";



function Attractions() {
    return (
        <Flex
            justifyContent="center"
            mt="16"
            py="10"
            px="10"
        >
            <HStack
                spacing="32"
            >
                <Miniature icon={<CocktailIcon />} text="vida noturna" />
                <Miniature icon={<BeachIcon />} text="praia" />
                <Miniature icon={<BuildingIcon />} text="moderno" />
                <Miniature icon={<MuseumIcon />} text="clássico" />
                <Miniature icon={<WorldIcon />} text="e mais..." />
            </HStack>
        </Flex>
    )
};

export default Attractions;