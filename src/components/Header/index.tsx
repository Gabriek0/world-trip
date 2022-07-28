// Chakra
import { Flex } from "@chakra-ui/react";
import { WorldTripIcon } from "../../icons";

function Header() {
    return (
        <Flex
            as="header"
            h="24"
            w="100%"
            py="6"
            justifyContent="center"
            alignItems="center"
        >
            <WorldTripIcon />
        </Flex>
    )
};

export default Header;