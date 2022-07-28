import { Box, Flex, Text } from "@chakra-ui/react";
import { AirplaneIcon } from "../../icons";

import { useMediaQuery } from '@chakra-ui/react';

function Banner() {

    const [isLargeThan1048] = useMediaQuery("(min-width: 1048px)");

    return (
        <Flex
            h={isLargeThan1048 ? "80" : "fit-content"}
            w="100%"
            py="10"
            px={isLargeThan1048 ? "32" : "10"}
            bgSize="cover"
            bgRepeat="no-repeat"
            bgImg="url('/banner.png')"
            justifyContent="center"
        >
            <Flex
                h="fit-content"
                w="100%"
                maxW={1440}
                justifyContent="space-evenly"
            >
                <Box
                    h="fit-content"
                    w={["fit-content", "fit-content", "50%"]}
                >
                    <Text
                        fontSize={isLargeThan1048 ? "4xl" : "2xl"}
                        fontWeight="500"
                        color="gray.100"
                    >
                        5 Continentes,<br></br>
                        infinitas possibilidades.
                    </Text>
                    <Text
                        color="gray.200"
                        mt="2"
                        fontWeight="400"
                        fontSize={isLargeThan1048 ? "xl" : "sm"}
                    >
                        Chegou a hora de tirar do papel a viagem que você<br></br>
                        sempre sonhou.
                    </Text>
                </Box>

                {isLargeThan1048 && (
                    <Box
                        h="100%"
                    >
                        <AirplaneIcon />
                    </Box>
                )}
            </Flex>
        </Flex >
    )
};

export default Banner;