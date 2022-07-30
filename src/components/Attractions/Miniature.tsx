import { Box, Flex, Grid, GridItem, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import { ElementType } from "react";

import { GoPrimitiveDot } from "react-icons/go";

interface MiniatureProps {
    icon: JSX.Element;
    text: string;
};

function Miniature({ icon, text }: MiniatureProps) {
    const [isLargeThan1048] = useMediaQuery("(min-width: 1048px)");

    return (
        <Flex
            flexDirection={["row", "row", "row", "column"]}
            alignItems="center"
        >
            {isLargeThan1048 && icon}

            {!isLargeThan1048 && (
                <Box
                    mr={2}
                >
                    <GoPrimitiveDot
                        color="#FFBA08"
                    />
                </Box>
            )}

            <Text
                color="gray.400"
                // 16 -> mobile 
                // 18 -> iPad
                // 20 -> desktop
                fontSize={["16", "18", "20"]}
                my="4"
                textAlign="center"
            >
                {text}
            </Text>
        </Flex>
    )
};

export default Miniature;